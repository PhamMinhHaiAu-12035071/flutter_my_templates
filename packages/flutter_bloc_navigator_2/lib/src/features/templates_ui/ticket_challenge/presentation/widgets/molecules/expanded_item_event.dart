import 'package:flutter/material.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/domain/entities/event_entity.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/presentation/widgets/atoms/date_ticket.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/presentation/widgets/atoms/image_rounded.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/presentation/widgets/atoms/location_ticket.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/presentation/widgets/atoms/title_ticket.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

class ExpandedItemEvent extends HookWidget {
  const ExpandedItemEvent({
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
  final EventEntity event;
  final Alignment alignment;
  final bool isVisible;
  final double widthContainer;
  final double contentLeftRadius;
  final double contentRightRadius;
  final int index;

  //////////////////////////////////////////////////////////
  // UI event handlers, init code, etc goes here
  //////////////////////////////////////////////////////////

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
    useValueChanged<bool, bool>(isVisible, (_, __) {
      if (isVisible) {
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

    double widthContainerExpected() =>
        isVisible ? widthContainer - imageSize : 0;
    Duration getDurationContainer() =>
        isVisible ? containerDuration : zeroDuration;

    //////////////////////////////////////////////////////////
    // Widget tree goes here.
    //////////////////////////////////////////////////////////
    return Positioned(
      height: imageSize,
      top: top,
      left: left,
      child: SizedBox(
        width: widthContainer,
        height: imageSize,
        child: Row(
          children: <Widget>[
            ImageRounded(
              size: imageSize,
              leftRadius: imageLeftRadius,
              rightRadius: imageRightRadius,
              link: event.link,
              alignment: alignment,
            ),
            AnimatedContainer(
              width: widthContainerExpected(),
              height: imageSize,
              duration: getDurationContainer(),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.horizontal(
                  left: Radius.circular(contentLeftRadius),
                  right: Radius.circular(contentRightRadius),
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
                            child: TitleTicket(title: event.title),
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
                              index: index,
                              date: event.date,
                            ),
                          ),
                        ),
                      ),
                      const Spacer(),
                      FadeTransition(
                        opacity: fadeOffset,
                        child: LocationTicket(location: event.location),
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
