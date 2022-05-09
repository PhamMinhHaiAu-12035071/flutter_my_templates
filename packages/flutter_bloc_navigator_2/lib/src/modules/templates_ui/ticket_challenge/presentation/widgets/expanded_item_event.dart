import 'package:flutter/material.dart';
import 'package:flutter_bloc_navigator_2/src/modules/templates_ui/ticket_challenge/models/event.dart';
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
  final Event event;
  final Alignment alignment;
  final bool isVisible;
  final double widthContainer;
  final double contentLeftRadius;
  final double contentRightRadius;
  final int index;

  @override
  Widget build(BuildContext context) {
    /// defined content animation
    final fadeContentAnimation = useAnimationController(
      duration: const Duration(milliseconds: 350),
      reverseDuration: Duration.zero,
    );

    /// defined title animation
    final fadeAnimation = useAnimationController(
      duration: const Duration(milliseconds: 550),
      reverseDuration: Duration.zero,
    );
    final fadeOffset = CurvedAnimation(
      parent: fadeAnimation,
      curve: const Interval(0.5, 1),
    );

    final slideAnimation = useAnimationController(
      duration: const Duration(milliseconds: 750),
      reverseDuration: Duration.zero,
    );
    final offsetAnimationTitle = Tween<Offset>(
      begin: const Offset(0, 3),
      end: Offset.zero,
    ).animate(
      CurvedAnimation(
        parent: slideAnimation,
        curve: Curves.easeOutCirc,
      ),
    );

    final fadeOffsetDate = CurvedAnimation(
      parent: fadeAnimation,
      curve: const Interval(0.35, 1),
    );
    final slideAnimationDate = useAnimationController(
      duration: const Duration(milliseconds: 950),
      reverseDuration: Duration.zero,
    );
    final offsetAnimationDate = Tween<Offset>(
      begin: const Offset(0, 5),
      end: Offset.zero,
    ).animate(
      CurvedAnimation(
        parent: slideAnimationDate,
        curve: Curves.easeOutCirc,
      ),
    );

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

    return Positioned(
      height: imageSize,
      top: top,
      left: left,
      child: SizedBox(
        width: widthContainer,
        height: imageSize,
        child: Row(
          children: <Widget>[
            SizedBox(
              width: imageSize,
              height: imageSize,
              child: ClipRRect(
                borderRadius: BorderRadius.horizontal(
                  left: Radius.circular(imageLeftRadius),
                  right: Radius.circular(imageRightRadius),
                ),
                child: Image.network(
                  event.link,
                  fit: BoxFit.cover,
                  alignment: alignment,
                ),
              ),
            ),
            Expanded(
              child: AnimatedContainer(
                width: isVisible ? widthContainer - imageSize : 0,
                height: imageSize,
                duration: isVisible
                    ? const Duration(milliseconds: 850)
                    : Duration.zero,
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
                              child: Text(
                                event.title,
                                maxLines: 2,
                                style: const TextStyle(
                                  fontSize: 16,
                                  color: Colors.black,
                                ),
                              ),
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
                              child: Row(
                                children: <Widget>[
                                  Text(
                                    '$index ticket',
                                    style: TextStyle(
                                      fontWeight: FontWeight.w500,
                                      fontSize: 12,
                                      color: Colors.grey.shade600,
                                    ),
                                  ),
                                  const SizedBox(width: 8),
                                  Text(
                                    event.date,
                                    style: const TextStyle(
                                      fontWeight: FontWeight.w300,
                                      fontSize: 12,
                                      color: Colors.grey,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                        const Spacer(),
                        FadeTransition(
                          opacity: fadeOffset,
                          child: Row(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: <Widget>[
                              Icon(
                                Icons.place,
                                color: Colors.grey.shade400,
                                size: 16,
                              ),
                              Text(
                                event.location,
                                style: TextStyle(
                                  color: Colors.grey.shade400,
                                  fontSize: 13,
                                ),
                              )
                            ],
                          ),
                        ),
                      ],
                    ),
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
