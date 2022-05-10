import 'package:flutter_bloc_navigator_2/src/modules/core/flavors/impl/flavor_config.dart';
import 'package:injectable/injectable.dart';

@Singleton(as: FlavorConfig)
class DevFlavorConfig implements FlavorConfig {
  @override
  String get baseUrl => 'https://reqres.in/';
}
