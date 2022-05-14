import 'package:dartz/dartz.dart';
import 'package:dio/dio.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/infrastructure/models/event_model.dart';

abstract class EventRemoteDataProvider {
  Future<Dio> onMiddlewareFetchEvents();
  Future<Either<Exception, List<EventModel>>> fetchEvents();
  Future<List<EventModel>> onParserFetchEvents(dynamic json);
  Future<Either<Exception, EventModel>> getEvent(String id);
}
