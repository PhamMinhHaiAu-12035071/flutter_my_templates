import 'dart:io';

import 'package:dartz/dartz.dart';
import 'package:dio/dio.dart';
import 'package:flutter_bloc_navigator_2/src/configs/env/env.dart';
import 'package:flutter_bloc_navigator_2/src/features/core/data/apis/exceptions/unknown_exception.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/infrastructure/apis/event_api.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/infrastructure/data_sources/event_remote_data_provider.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/infrastructure/models/event_model.dart';
import 'package:injectable/injectable.dart';

@Environment(Env.dev)
@Environment(Env.test)
@Singleton(as: EventRemoteDataProvider)
class DevEventRemoteDataProvider implements EventRemoteDataProvider {
  const DevEventRemoteDataProvider({required this.api, required this.dio});

  final EventAPI api;
  final Dio dio;

  @override
  Future<Either<Exception, List<EventModel>>> fetchEvents() => _getData(
        uri: api.events(),
        builder: (dynamic responseData) => [],
      );

  @override
  Future<Either<Exception, EventModel>> getEvent(String id) {
    throw UnimplementedError();
  }

  Future<Either<Exception, T>> _getData<T>({
    required Uri uri,
    required T Function(dynamic data) builder,
  }) async {
    try {
      final response = await dio.getUri<T>(uri);
      switch (response.statusCode) {
        case HttpStatus.ok:
          return Right(builder(response.data));
        default:
          throw const UnknownException();
      }
    } on SocketException catch (_) {
      throw const UnknownException();
    }
  }
}
