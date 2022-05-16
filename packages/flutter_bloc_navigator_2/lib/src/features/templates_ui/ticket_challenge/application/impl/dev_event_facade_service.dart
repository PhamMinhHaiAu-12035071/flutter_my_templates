import 'package:dartz/dartz.dart';
import 'package:flutter_bloc_navigator_2/src/common/configs/env/env.dart';
import 'package:flutter_bloc_navigator_2/src/features/core/domain/exceptions/app_exception.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/application/event_facade_service.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/domain/entities/event_entity.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/infrastructure/repositories/event_repository.dart';
import 'package:injectable/injectable.dart';

@Environment(Env.dev)
@Environment(Env.test)
@Singleton(as: EventFacadeService)
class DevEventFacadeService implements EventFacadeService {
  const DevEventFacadeService({required this.repository});

  final EventRepository repository;

  @override
  Future<Either<AppException, List<EventEntity>>> fetchEvents() {
    return repository.fetchEvents();
  }

  @override
  Future<Either<AppException, EventEntity>> getEvent(EventID id) {
    return repository.getEvent(id);
  }
}
