import 'dart:math' as math;
import 'dart:ui';

import 'package:collection/collection.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter_bloc_navigator_2/src/modules/templates_ui/ticket_challenge/constants/events.dart';
import 'package:flutter_bloc_navigator_2/src/modules/templates_ui/ticket_challenge/models/event.dart';
import 'package:flutter_bloc_navigator_2/src/modules/templates_ui/ticket_challenge/presentation/widgets/expanded_item_event.dart';
import 'package:flutter_bloc_navigator_2/src/modules/templates_ui/ticket_challenge/presentation/widgets/menu_icon.dart';
import 'package:flutter_bloc_navigator_2/src/modules/templates_ui/ticket_challenge/presentation/widgets/sheet_header.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

const double minHeight = 120;
const double paddingContainer = 32;
const double iconStartSize = 44;
const double iconEndSize = 120;
const double iconStartMarginTop = 36;
const double iconEndMarginTop = 80;
const double iconsVerticalSpacing = 24;
const double iconsHorizontalSpacing = 16;

class ExhibitionBottomSheet extends HookWidget {
  const ExhibitionBottomSheet({
    Key? key,
    this.duration = const Duration(
      milliseconds: 600,
    ),
  }) : super(key: key);

  final Duration duration;

  void _toggle(AnimationController controller) {
    final isOpen = controller.status == AnimationStatus.completed;
    controller.fling(velocity: isOpen ? -2 : 2);
  }

  void _onVerticalDragUpdate(
    DragUpdateDetails details, {
    required AnimationController controller,
    required double maxHeight,
  }) {
    controller.value -= details.primaryDelta! / maxHeight;
  }

  void _onVerticalDragEnd(
    DragEndDetails details, {
    required AnimationController controller,
    required double maxHeight,
  }) {
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
    return ExpandedItemEvent(
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
    /// initial animation
    final controller = useAnimationController(duration: duration);
    final maxHeight = MediaQuery.of(context).size.height;
    final paddingTop = MediaQuery.of(context).padding.top;
    final widthItem =
        MediaQuery.of(context).size.width - (paddingContainer * 2);

    double lerp(double min, double max) =>
        lerpDouble(min, max, controller.value)!;

    double height() => lerp(minHeight, maxHeight);

    double headerTopMargin() => lerp(20, 20 + paddingTop);

    double headerFontSize() => lerp(14, 24);

    double itemBorderRadius() => lerp(8, 24);

    double iconLeftBorderRadius() => itemBorderRadius();
    double iconRightBorderRadius() {
      if (controller.value == 1) {
        return 0;
      }
      return lerp(8, 24);
    }

    double contentLeftBorderRadius() => lerp(8, 0);
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

    return AnimatedBuilder(
      animation: controller,
      builder: (context, child) {
        return Positioned(
          height: height(),
          left: 0,
          right: 0,
          bottom: 0,
          child: GestureDetector(
            onTap: () => _toggle(controller),
            onVerticalDragUpdate: (DragUpdateDetails details) =>
                _onVerticalDragUpdate(
              details,
              controller: controller,
              maxHeight: maxHeight,
            ),
            onVerticalDragEnd: (DragEndDetails details) => _onVerticalDragEnd(
              details,
              controller: controller,
              maxHeight: maxHeight,
            ),
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
