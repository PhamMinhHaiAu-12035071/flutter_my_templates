import 'package:dartz/dartz.dart';
import 'package:flutter_bloc_navigator_2/src/common/configs/env/env.dart';
import 'package:flutter_bloc_navigator_2/src/features/core/domain/exceptions/app_exception.dart';
import 'package:flutter_bloc_navigator_2/src/features/core/domain/usecase/use_case.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/domain/entities/event_entity.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/domain/usecase/fetch_events_usecase.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/infrastructure/repositories/event_repository.dart';
import 'package:injectable/injectable.dart';

@Environment(Env.dev)
@Environment(Env.test)
@Singleton(as: FetchEventsUseCase)
class DevFetchEventsUseCase implements FetchEventsUseCase {
  const DevFetchEventsUseCase({required this.repository});

  final EventRepository repository;

  @override
  Future<Either<AppException, List<EventEntity>>> call(NoParams params) async {
    return repository.fetchEvents();
  }
}
