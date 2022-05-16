import 'package:flutter_bloc_navigator_2/src/common/configs/env/env.dart';
import 'package:flutter_bloc_navigator_2/src/features/core/flavors/flavor_config.dart';
import 'package:injectable/injectable.dart';

@Environment(Env.dev)
@Environment(Env.test)
@Singleton(as: FlavorConfig)
class DevFlavorConfig implements FlavorConfig {
  @override
  String get baseUrl => 'https://jsonplaceholder.typicode.com';

  @override
  String get title => 'Flutter Bloc Navigator 2 Template DDD';
}
