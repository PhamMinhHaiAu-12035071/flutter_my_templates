import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_bloc_navigator_2/src/configs/dependency_injection/injection.dart';
import 'package:flutter_bloc_navigator_2/src/routers/business_logic/navigation_cubit.dart';
import 'package:flutter_bloc_navigator_2/src/routers/business_logic/navigation_stack.dart';
import 'package:flutter_bloc_navigator_2/src/routers/custom_route_observer.dart';
import 'package:flutter_bloc_navigator_2/src/routers/page_config.dart';
import 'package:logger/logger.dart';

class ERouterDelegate extends RouterDelegate<PageConfig>
    with
        ChangeNotifier,
        PopNavigatorRouterDelegateMixin<PageConfig>,
        WidgetsBindingObserver {
  ERouterDelegate({required NavigationCubit cubit}) : _cubit = cubit;

  final NavigationCubit _cubit;

  final heroC = HeroController();

  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(
      providers: [
        BlocProvider(create: (_) => _cubit),
        // BlocProvider(create: (_) => getIt<AuthenticationBloc>()),
      ],
      child: MultiBlocListener(
        listeners: [
          _listenForNavigation(),
          // _listenForAuth(),
        ],
        child: BlocBuilder<NavigationCubit, NavigationStack>(
          builder: (context, stack) {
            return Navigator(
              pages: stack.pages,
              key: navigatorKey,
              onPopPage: _onPopPage,
              observers: [CustomRouteObserver(), heroC],
            );
          },
        ),
      ),
    );
  }

  ///here we handle back buttons
  bool _onPopPage(Route<dynamic> route, dynamic result) {
    final didPop = route.didPop(result);
    if (!didPop) {
      return false;
    }
    if (_cubit.canPop()) {
      _cubit.pop();
      return true;
    } else {
      return false;
    }
  }

  BlocListener _listenForNavigation() {
    return BlocListener<NavigationCubit, NavigationStack>(
      listener: (_, state) {
        notifyListeners();
      },
    );
  }

  // BlocListener _listenForAuth() {
  //   return BlocListener<AuthenticationBloc, AuthenticationState>(
  //     listener: (_, state) {
  //       switch (state.status) {
  //         case AuthenticationStatus.unknown:
  //           break;
  //         case AuthenticationStatus.authenticated:
  //           _cubit.clearAndPush(Path.home);
  //           break;
  //         case AuthenticationStatus.unauthenticated:
  //           _cubit.clearAndPush(Path.login);
  //           break;
  //       }
  //       notifyListeners();
  //     },
  //   );
  // }

  @override
  Future<void> setNewRoutePath(PageConfig configuration) async {
    if (_cubit.isBackHistory(configuration) && _cubit.canPop()) {
      _cubit.pop();
    }

    if (configuration.path == Uri.parse('/')) {
      // skip default
      return;
    }
    getIt<Logger>().d('[setNewRoutePath]: $configuration');
    _cubit.push(configuration.route, configuration.args);
  }

  ///called by router when it detects it may have changed because of a rebuild
  ///necessary for backward and forward buttons to work properly
  @override
  PageConfig? get currentConfiguration => _cubit.state.last;

  @override
  final GlobalKey<NavigatorState> navigatorKey = GlobalKey<NavigatorState>();
}
