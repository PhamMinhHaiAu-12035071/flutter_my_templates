import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_bloc_navigator_2/src/app.dart';
import 'package:flutter_bloc_navigator_2/src/app_bloc_observer.dart';
import 'package:flutter_bloc_navigator_2/src/configs/dependency_injection/injection.dart';
import 'package:flutter_bloc_navigator_2/src/configs/env/env.dart';
import 'package:flutter_web_plugins/url_strategy.dart';

Future<void> main({
  String environment = Env.dev,
}) async {
  WidgetsFlutterBinding.ensureInitialized();
  usePathUrlStrategy();
  await configureDependencies(environment: environment);
  BlocOverrides.runZoned(
    () => runApp(
      const MyApp(),
    ),
    blocObserver: getIt<AppBlocObserver>(),
  );
}
