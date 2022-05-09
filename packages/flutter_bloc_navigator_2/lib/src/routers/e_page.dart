import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc_navigator_2/src/shared/routes/transitions/page_transition/page_transition.dart';

typedef TransitionAnimationBuilder = Widget Function(
  BuildContext,
  Animation<double>,
  Animation<double>,
  Widget,
);

///Each Screen must extend this class and provide its functionality
abstract class EPage extends Page<dynamic> {
  const EPage({
    required this.args,
    this.transitionDuration = 400,
    this.reverseTransitionDuration = 400,
    this.animationBuilder,
  });

  final Map<String, dynamic> args;
  final int transitionDuration, reverseTransitionDuration; //milliseconds

  ///Give each individual screen the option to define a special entry animation
  final TransitionAnimationBuilder? animationBuilder;

  Widget build(BuildContext context);

  CupertinoPageRoute transitionCupertino() {
    return CupertinoPageRoute<dynamic>(
      settings: this,
      builder: build,
    );
  }

  MaterialPageRoute transitionMaterial() {
    return MaterialPageRoute<dynamic>(
      settings: this,
      builder: build,
    );
  }

  @override
  Route createRoute(BuildContext context) {
    return PageRouteBuilder<dynamic>(
      settings: this,
      transitionDuration: Duration(milliseconds: transitionDuration),
      reverseTransitionDuration:
          Duration(milliseconds: reverseTransitionDuration),
      transitionsBuilder: (
        context,
        animation,
        secondaryAnimation,
        child,
      ) =>
          animationBuilder?.call(
            context,
            animation,
            secondaryAnimation,
            child,
          ) ??
          fadeTransition(context, animation, secondaryAnimation, child),
      pageBuilder: (
        BuildContext context,
        Animation<double> animation,
        Animation<double> animation2,
      ) =>
          build(context),
    );
  }
}
