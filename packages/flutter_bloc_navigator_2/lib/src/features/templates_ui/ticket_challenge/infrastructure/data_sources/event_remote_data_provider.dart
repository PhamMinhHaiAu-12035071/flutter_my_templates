import 'package:dartz/dartz.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/infrastructure/models/event_model.dart';

abstract class EventRemoteDataProvider {
  Future<Either<Exception, List<EventModel>>> fetchEvents();
  Future<Either<Exception, EventModel>> getEvent(String id);
}
