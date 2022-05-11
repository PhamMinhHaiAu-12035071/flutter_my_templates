import 'dart:io';

import 'package:dartz/dartz.dart';
import 'package:dio/dio.dart';
import 'package:flutter_bloc_navigator_2/src/configs/env/env.dart';
import 'package:flutter_bloc_navigator_2/src/features/core/data/apis/exceptions/unknown_exception.dart';
import 'package:flutter_bloc_navigator_2/src/features/core/flavors/flavor_config.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/fake/fake.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/infrastructure/data_sources/event_remote_data_provider.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/infrastructure/json_parsers/event_parser.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/infrastructure/models/event_model.dart';
import 'package:injectable/injectable.dart';

@Environment(Env.dev)
@Environment(Env.test)
@Singleton(as: EventRemoteDataProvider)
class DevEventRemoteDataProvider implements EventRemoteDataProvider {
  DevEventRemoteDataProvider({
    required this.config,
    required this.dio,
    required this.parser,
  });

  final FlavorConfig config;
  final Dio dio;
  final EventParser parser;

  static const _apiPath = '/events';
  static const _patchFetchEvents = '';

  @override
  Future<Either<Exception, List<EventModel>>> fetchEvents() async {
    await fakeFetchEvents(dio);
    return _getData<List<EventModel>>(
      url: '${config.baseUrl}$_apiPath$_patchFetchEvents',
      builder: parser.parseFetchAll,
    );
  }

  @override
  Future<Either<Exception, EventModel>> getEvent(String id) {
    throw UnimplementedError();
  }

  Future<Either<Exception, T>> _getData<T>({
    required String url,
    required Future<T> Function(dynamic data) builder,
  }) async {
    try {
      final response = await dio.get<dynamic>(url);
      switch (response.statusCode) {
        case HttpStatus.ok:
          final data = await builder(response.data);
          return Right(data);
        default:
          throw const UnknownException();
      }
    } on SocketException catch (_) {
      throw const UnknownException();
    }
  }
}
