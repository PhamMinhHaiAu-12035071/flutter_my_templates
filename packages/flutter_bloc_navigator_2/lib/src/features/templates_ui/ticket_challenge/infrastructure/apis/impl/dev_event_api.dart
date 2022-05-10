import 'package:flutter_bloc_navigator_2/src/configs/env/env.dart';
import 'package:flutter_bloc_navigator_2/src/features/core/flavors/flavor_config.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/infrastructure/apis/event_api.dart';
import 'package:injectable/injectable.dart';

@Environment(Env.dev)
@Environment(Env.test)
@Singleton(as: EventAPI)
class DevEventAPI implements EventAPI {
  const DevEventAPI({required this.config});

  final FlavorConfig config;

  String get _apiPath => '/api/unknown';

  @override
  Uri events() => _buildUri(endpoint: '', parametersBuilder: () => null);

  Uri _buildUri({
    required String endpoint,
    required Map<String, dynamic>? Function() parametersBuilder,
  }) {
    return Uri.https(
      config.baseUrl,
      '$_apiPath$endpoint',
      parametersBuilder(),
    );
  }
}
