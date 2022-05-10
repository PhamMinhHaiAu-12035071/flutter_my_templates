import 'package:dartz/dartz.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/domain/entities/event.dart';

abstract class EventInterface {
  Future<Either<Exception, List<Event>>> fetchEvents();
  Future<Either<Exception, Event>> getEvent(EventID id);
}
