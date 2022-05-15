import 'package:dartz/dartz.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/domain/entities/event_entity.dart';

abstract class EventAPI {
  Future<Either<Exception, List<EventEntity>>> fetchEvents();

  Future<Either<Exception, EventEntity>> getEvent(EventID id);
}
