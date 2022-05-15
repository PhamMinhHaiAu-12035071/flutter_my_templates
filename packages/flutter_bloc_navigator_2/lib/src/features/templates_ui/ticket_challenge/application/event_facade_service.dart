import 'package:dartz/dartz.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/domain/entities/event_entity.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/domain/interfaces/event_interface.dart';

abstract class EventFacadeService implements EventInterface {
  @override
  Future<Either<Exception, List<EventEntity>>> fetchEvents();

  @override
  Future<Either<Exception, EventEntity>> getEvent(EventID id);
}
