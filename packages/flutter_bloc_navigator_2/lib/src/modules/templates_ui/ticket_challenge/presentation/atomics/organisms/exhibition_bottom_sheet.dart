import 'dart:math' as math;
import 'dart:ui';

import 'package:collection/collection.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter_bloc_navigator_2/src/configs/dependency_injection/injection.dart';
import 'package:flutter_bloc_navigator_2/src/modules/templates_ui/ticket_challenge/constants/events.dart';
import 'package:flutter_bloc_navigator_2/src/modules/templates_ui/ticket_challenge/models/event.dart';
import 'package:flutter_bloc_navigator_2/src/modules/templates_ui/ticket_challenge/presentation/atomics/atoms/menu_icon.dart';
import 'package:flutter_bloc_navigator_2/src/modules/templates_ui/ticket_challenge/presentation/atomics/atoms/sheet_header.dart';
import 'package:flutter_bloc_navigator_2/src/modules/templates_ui/ticket_challenge/presentation/atomics/molecules/expanded_item_event.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:logger/logger.dart';

const double minHeight = 120;
const double paddingContainer = 32;
const double doublePaddingContainer = 32 * 2;
const double iconStartSize = 44;
const double iconEndSize = 120;
const double iconStartMarginTop = 36;
const double iconEndMarginTop = 48;
const double iconsVerticalSpacing = 24;
const double iconsHorizontalSpacing = 16;
const Duration transitionBottomSheet = Duration(milliseconds: 600);
const double percentMaxHeight = 0.85;

const double minRangeHeaderTopMargin = 20;

const double minRangeHeaderFontSize = 14;
const double maxRangeHeaderFontSize = 24;

const double minRangeBorderRadius = 8;
const double maxRangeBorderRadius = 24;

class ExhibitionBottomSheetController extends HookWidget {
  const ExhibitionBottomSheetController({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => _ExhibitionBottomSheetView(this);

  //////////////////////////////////////////////////////////
  // UI event handlers, init code, etc goes here
  //////////////////////////////////////////////////////////

  void _toggle() {
    getIt<Logger>().d('put logic in here when have event toggle');
  }

  void _onVerticalDragUpdate() {
    getIt<Logger>().d('put logic in here when have event onDragUpdate');
  }

  void _onVerticalDragEnd() {
    getIt<Logger>().d('put logic in here when have event onDragEnd');
  }
}

class _ExhibitionBottomSheetView extends HookWidget {
  const _ExhibitionBottomSheetView(
    this.state, {
    Key? key,
    this.duration = transitionBottomSheet,
  }) : super(key: key);

  final Duration duration;
  final ExhibitionBottomSheetController state;

  Widget _buildItem(
    Event event, {
    required double imageSize,
    required double top,
    required double left,
    required double imageLeftRadius,
    required double imageRightRadius,
    required Alignment alignment,
    required bool isVisible,
    required double widthContainer,
    required double contentLeftRadius,
    required double contentRightRadius,
    required int index,
  }) {
    return ExpandedItemEventController(
      imageSize: imageSize,
      top: top,
      left: left,
      imageLeftRadius: imageLeftRadius,
      imageRightRadius: imageRightRadius,
      event: event,
      alignment: alignment,
      isVisible: isVisible,
      widthContainer: widthContainer,
      contentLeftRadius: contentLeftRadius,
      contentRightRadius: contentRightRadius,
      index: index,
    );
  }

  @override
  Widget build(BuildContext context) {
    //////////////////////////////////////////////////////////
    // Define variable
    //////////////////////////////////////////////////////////
    final controller = useAnimationController(duration: duration);
    final maxHeight = MediaQuery.of(context).size.height * percentMaxHeight;
    final paddingTop = MediaQuery.of(context).padding.top;
    final widthItem =
        MediaQuery.of(context).size.width - doublePaddingContainer;
    //////////////////////////////////////////////////////////
    // Handle event animation
    //////////////////////////////////////////////////////////
    void _toggle() {
      state._toggle();
      final isOpen = controller.status == AnimationStatus.completed;
      controller.fling(velocity: isOpen ? -2 : 2);
    }

    void _onVerticalDragUpdate(DragUpdateDetails details) {
      state._onVerticalDragUpdate();
      controller.value -= details.primaryDelta! / maxHeight;
    }

    void _onVerticalDragEnd(DragEndDetails details) {
      state._onVerticalDragEnd();
      if (controller.isAnimating ||
          controller.status == AnimationStatus.completed) return;

      final flingVelocity = details.velocity.pixelsPerSecond.dy /
          maxHeight; //<-- calculate the velocity of the gesture
      if (flingVelocity < 0.0) {
        controller.fling(velocity: math.max(2, -flingVelocity));
      } else if (flingVelocity > 0.0) {
        controller.fling(velocity: math.min(-2, -flingVelocity));
      } else {
        controller.fling(velocity: controller.value < 0.5 ? -2.0 : 2.0);
      }
    }

    double lerp(double min, double max) =>
        lerpDouble(min, max, controller.value)!;

    double height() => lerp(minHeight, maxHeight);

    double headerTopMargin() =>
        lerp(minRangeHeaderTopMargin, minRangeHeaderTopMargin + paddingTop);

    double headerFontSize() =>
        lerp(minRangeHeaderFontSize, maxRangeHeaderFontSize);

    double itemBorderRadius() =>
        lerp(minRangeBorderRadius, maxRangeBorderRadius);

    double iconLeftBorderRadius() => itemBorderRadius();
    double iconRightBorderRadius() {
      if (controller.value == 1) {
        return 0;
      }
      return itemBorderRadius();
    }

    double contentLeftBorderRadius() => lerp(minRangeBorderRadius, 0);
    itemBorderRadius();
    double contentRightBorderRadius() => itemBorderRadius();

    double iconSize() => lerp(iconStartSize, iconEndSize);

    double iconTopMargin(int index) =>
        lerp(
          iconStartMarginTop,
          iconEndMarginTop + index * (iconsVerticalSpacing + iconEndSize),
        ) +
        headerTopMargin();

    double iconLeftMargin(int index) =>
        lerp(index * (iconsHorizontalSpacing + iconStartSize), 0);

    double widthItemContainer() => lerp(iconStartSize, widthItem);

    //////////////////////////////////////////////////////////
    // Widget tree goes here.
    //////////////////////////////////////////////////////////
    return AnimatedBuilder(
      animation: controller,
      builder: (context, child) {
        return Positioned(
          height: height(),
          left: 0,
          right: 0,
          bottom: 0,
          child: GestureDetector(
            onTap: _toggle,
            onVerticalDragUpdate: _onVerticalDragUpdate,
            onVerticalDragEnd: _onVerticalDragEnd,
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: paddingContainer),
              decoration: const BoxDecoration(
                color: Color(0xFF162A49),
                borderRadius: BorderRadius.vertical(top: Radius.circular(32)),
              ),
              child: Stack(
                children: <Widget>[
                  const MenuIcon(),
                  SheetHeader(
                    fontSize: headerFontSize(),
                    topMargin: headerTopMargin(),
                  ),
                  ...events
                      .mapIndexed(
                        (index, element) => _buildItem(
                          element,
                          imageSize: iconSize(),
                          top: iconTopMargin(index),
                          left: iconLeftMargin(index),
                          imageLeftRadius: iconLeftBorderRadius(),
                          imageRightRadius: iconRightBorderRadius(),
                          alignment: Alignment(lerp(1, 0), 0),
                          isVisible:
                              controller.status == AnimationStatus.completed,
                          widthContainer: widthItemContainer(),
                          contentLeftRadius: contentLeftBorderRadius(),
                          contentRightRadius: contentRightBorderRadius(),
                          index: index,
                        ),
                      )
                      .toList(),
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}
