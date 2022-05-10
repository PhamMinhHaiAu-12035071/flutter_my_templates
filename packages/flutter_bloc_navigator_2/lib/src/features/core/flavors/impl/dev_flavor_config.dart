import 'package:flutter_bloc_navigator_2/src/configs/env/env.dart';
import 'package:flutter_bloc_navigator_2/src/features/core/flavors/flavor_config.dart';
import 'package:injectable/injectable.dart';

@Environment(Env.dev)
@Environment(Env.test)
@Singleton(as: FlavorConfig)
class DevFlavorConfig implements FlavorConfig {
  @override
  String get baseUrl => 'reqres.in';
}
