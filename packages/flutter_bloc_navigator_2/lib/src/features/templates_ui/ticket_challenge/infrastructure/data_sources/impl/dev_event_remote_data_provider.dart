import 'dart:io';

import 'package:dartz/dartz.dart';
import 'package:dio/dio.dart';
import 'package:flutter_bloc_navigator_2/src/configs/env/env.dart';
import 'package:flutter_bloc_navigator_2/src/features/core/data/apis/exceptions/unknown_exception.dart';
import 'package:flutter_bloc_navigator_2/src/features/core/flavors/flavor_config.dart';
import 'package:flutter_bloc_navigator_2/src/features/core/infrastructure/data_sources/middleware.dart';
import 'package:flutter_bloc_navigator_2/src/features/core/infrastructure/interceptors/common_interceptor.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/fake/fake.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/infrastructure/data_sources/event_remote_data_provider.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/infrastructure/json_parsers/event_parser.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/infrastructure/models/event_model.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/infrastructure/transformers/fetch_events_transformer.dart';
import 'package:injectable/injectable.dart';

@Environment(Env.dev)
@Environment(Env.test)
@Singleton(as: EventRemoteDataProvider)
class DevEventRemoteDataProvider
    with Middleware, EventParser
    implements EventRemoteDataProvider {
  DevEventRemoteDataProvider({
    required this.config,
    required this.dio,
  });

  final FlavorConfig config;
  final Dio dio;

  static const _apiPath = '/todos';
  static const _patchFetchEvents = '';

  @override
  Future<Either<Exception, List<EventModel>>> fetchEvents() async {
    final dioInstance = Dio(dio.options);

    await fakeFetchEvents(dioInstance);

    //////////////////////////////////////////////////////////
    // middleware in here
    //////////////////////////////////////////////////////////
    middleware(dioInstance, [CommonInterceptor()], FetchEventsTransformer());

    final url = '${config.baseUrl}$_apiPath$_patchFetchEvents';

    try {
      final response = await dioInstance.get<dynamic>(url);
      switch (response.statusCode) {
        case HttpStatus.ok:
          final data = await parseFetchAll(response.data);
          return Right(data);
        default:
          throw const UnknownException();
      }
    } on SocketException catch (_) {
      throw const UnknownException();
    }
  }

  @override
  Future<Either<Exception, EventModel>> getEvent(String id) {
    throw UnimplementedError();
  }
}
