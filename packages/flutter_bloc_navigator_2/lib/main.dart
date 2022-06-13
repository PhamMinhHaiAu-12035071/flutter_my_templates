import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_bloc_navigator_2/src/common/configs/dependency_injection/injection.dart';
import 'package:flutter_bloc_navigator_2/src/common/configs/env/env.dart';
import 'package:flutter_bloc_navigator_2/src/common/widgets/app_bloc_observer/app_bloc_observer.dart';
import 'package:flutter_bloc_navigator_2/src/common/widgets/visibility_device_preview/visibility_device_preview.dart';
import 'package:flutter_bloc_navigator_2/src/features/core/flavors/flavor_config.dart';
import 'package:flutter_web_plugins/url_strategy.dart';

Future<void> main({
  String environment = Env.dev,
}) async {
  WidgetsFlutterBinding.ensureInitialized();
  usePathUrlStrategy();
  await configureDependencies(environment: environment);
  BlocOverrides.runZoned(
    () {
      final enabled = getIt<FlavorConfig>().enabledDevicePreview;
      runApp(
        VisibilityDevicePreview(
          enabled: enabled,
        ),
      );
    },
    blocObserver: getIt<AppBlocObserver>(),
  );
}
