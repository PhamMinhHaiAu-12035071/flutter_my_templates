import 'package:flutter/material.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/models/event.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/presentation/widgets/atoms/date_ticket.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/presentation/widgets/atoms/image_rounded.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/presentation/widgets/atoms/location_ticket.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/presentation/widgets/atoms/title_ticket.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

class ExpandedItemEventController extends HookWidget {
  const ExpandedItemEventController({
    Key? key,
    required this.imageSize,
    required this.top,
    required this.left,
    required this.imageLeftRadius,
    required this.imageRightRadius,
    required this.event,
    required this.alignment,
    required this.isVisible,
    required this.widthContainer,
    required this.contentLeftRadius,
    required this.contentRightRadius,
    required this.index,
  }) : super(key: key);

  final double imageSize;
  final double top;
  final double left;
  final double imageLeftRadius;
  final double imageRightRadius;
  final Event event;
  final Alignment alignment;
  final bool isVisible;
  final double widthContainer;
  final double contentLeftRadius;
  final double contentRightRadius;
  final int index;

  @override
  Widget build(BuildContext context) {
    return _ExpandedItemEventView(this);
  }

  //////////////////////////////////////////////////////////
  // UI event handlers, init code, etc goes here
  //////////////////////////////////////////////////////////
}

class _ExpandedItemEventView extends HookWidget {
  const _ExpandedItemEventView(
    this.state, {
    Key? key,
  }) : super(key: key);

  final ExpandedItemEventController state;

  @override
  Widget build(BuildContext context) {
    //////////////////////////////////////////////////////////
    // Define variable
    //////////////////////////////////////////////////////////
    const zeroDuration = Duration.zero;
    const containerDurationMilliseconds = 250;
    const delayShowContentWhenContainerShow = 350;
    const contentDurationMilliseconds =
        containerDurationMilliseconds + delayShowContentWhenContainerShow;
    const dataDurationMilliseconds = contentDurationMilliseconds * 2;
    const dataSlideDurationMilliseconds = dataDurationMilliseconds + 250;
    const dateSlideDurationMilliseconds = dataSlideDurationMilliseconds + 250;

    const containerDuration =
        Duration(milliseconds: containerDurationMilliseconds);
    const contentDuration = Duration(milliseconds: contentDurationMilliseconds);
    const fadeDuration = Duration(milliseconds: dataDurationMilliseconds);
    const slideDuration = Duration(milliseconds: dataSlideDurationMilliseconds);
    const slideDurationDate = Duration(
      milliseconds: dateSlideDurationMilliseconds,
    );
    const curve = Curves.easeOutCirc;

    final fadeContentAnimation = useAnimationController(
      duration: contentDuration,
      reverseDuration: Duration.zero,
    );

    final fadeAnimation = useAnimationController(
      duration: fadeDuration,
      reverseDuration: zeroDuration,
    );
    final fadeOffset = CurvedAnimation(
      parent: fadeAnimation,
      curve: const Interval(0.5, 1),
    );

    final slideAnimation = useAnimationController(
      duration: slideDuration,
      reverseDuration: zeroDuration,
    );
    final offsetAnimationTitle = Tween<Offset>(
      begin: const Offset(0, 3),
      end: Offset.zero,
    ).animate(
      CurvedAnimation(
        parent: slideAnimation,
        curve: curve,
      ),
    );

    final fadeOffsetDate = CurvedAnimation(
      parent: fadeAnimation,
      curve: const Interval(0.35, 1),
    );
    final slideAnimationDate = useAnimationController(
      duration: slideDurationDate,
      reverseDuration: zeroDuration,
    );
    final offsetAnimationDate = Tween<Offset>(
      begin: const Offset(0, 5),
      end: Offset.zero,
    ).animate(
      CurvedAnimation(
        parent: slideAnimationDate,
        curve: curve,
      ),
    );

    //////////////////////////////////////////////////////////
    // Handle event animation
    //////////////////////////////////////////////////////////
    useValueChanged<bool, bool>(state.isVisible, (_, __) {
      if (state.isVisible) {
        fadeContentAnimation.forward();
        slideAnimation.forward();
        slideAnimationDate.forward();
        fadeAnimation.forward();
      } else {
        fadeAnimation.reverse();
        slideAnimation.reverse();
        slideAnimationDate.reverse();
        fadeContentAnimation.reverse();
      }
      return null;
    });

    double widthContainer() =>
        state.isVisible ? state.widthContainer - state.imageSize : 0;
    Duration getDurationContainer() =>
        state.isVisible ? containerDuration : zeroDuration;

    //////////////////////////////////////////////////////////
    // Widget tree goes here.
    //////////////////////////////////////////////////////////
    return Positioned(
      height: state.imageSize,
      top: state.top,
      left: state.left,
      child: SizedBox(
        width: state.widthContainer,
        height: state.imageSize,
        child: Row(
          children: <Widget>[
            ImageRounded(
              size: state.imageSize,
              leftRadius: state.imageLeftRadius,
              rightRadius: state.imageRightRadius,
              link: state.event.link,
              alignment: state.alignment,
            ),
            AnimatedContainer(
              width: widthContainer(),
              height: state.imageSize,
              duration: getDurationContainer(),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.horizontal(
                  left: Radius.circular(state.contentLeftRadius),
                  right: Radius.circular(state.contentRightRadius),
                ),
                color: Colors.white,
              ),
              child: FadeTransition(
                opacity: fadeContentAnimation,
                child: Padding(
                  padding: const EdgeInsets.all(8),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      Padding(
                        padding: const EdgeInsets.only(left: 4),
                        child: FadeTransition(
                          opacity: fadeOffset,
                          child: SlideTransition(
                            position: offsetAnimationTitle,
                            child: TitleTicket(title: state.event.title),
                          ),
                        ),
                      ),
                      const SizedBox(height: 8),
                      Padding(
                        padding: const EdgeInsets.only(left: 4),
                        child: FadeTransition(
                          opacity: fadeOffsetDate,
                          child: SlideTransition(
                            position: offsetAnimationDate,
                            child: DateTicket(
                              index: state.index,
                              date: state.event.date,
                            ),
                          ),
                        ),
                      ),
                      const Spacer(),
                      FadeTransition(
                        opacity: fadeOffset,
                        child: LocationTicket(location: state.event.location),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
