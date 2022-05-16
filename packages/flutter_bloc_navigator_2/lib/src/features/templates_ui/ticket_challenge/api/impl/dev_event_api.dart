import 'package:dartz/dartz.dart';
import 'package:flutter_bloc_navigator_2/src/common/configs/env/env.dart';
import 'package:flutter_bloc_navigator_2/src/features/core/domain/exceptions/app_exception.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/api/event_api.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/domain/entities/event_entity.dart';
import 'package:injectable/injectable.dart';

@Environment(Env.dev)
@Environment(Env.test)
@Singleton(as: EventAPI)
class DevEventAPI implements EventAPI {
  @override
  Future<Either<AppException, List<EventEntity>>> fetchEvents() {
    throw UnimplementedError();
  }

  @override
  Future<Either<AppException, EventEntity>> getEvent(EventID id) {
    throw UnimplementedError();
  }
}
