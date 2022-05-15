import 'package:dartz/dartz.dart';
import 'package:flutter_bloc_navigator_2/src/common/configs/env/env.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/api/event_api.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/domain/entities/event.dart';
import 'package:injectable/injectable.dart';

@Environment(Env.dev)
@Environment(Env.test)
@Singleton(as: EventAPI)
class DevEventAPI implements EventAPI {
  @override
  Future<Either<Exception, List<Event>>> fetchEvents() {
    throw UnimplementedError();
  }

  @override
  Future<Either<Exception, Event>> getEvent(EventID id) {
    throw UnimplementedError();
  }
}
