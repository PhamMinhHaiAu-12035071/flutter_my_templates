import 'package:dartz/dartz.dart';
import 'package:flutter_bloc_navigator_2/src/configs/env/env.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/domain/entities/event.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/infrastructure/data_sources/event_remote_data_provider.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/infrastructure/repositories/event_repository.dart';
import 'package:injectable/injectable.dart';

@Environment(Env.dev)
@Environment(Env.test)
@Singleton(as: EventRepository)
class DevEventRepository implements EventRepository {
  const DevEventRepository({required this.eventRemoteDataProvider});

  final EventRemoteDataProvider eventRemoteDataProvider;

  @override
  Future<Either<Exception, List<Event>>> fetchEvents() async {
    return eventRemoteDataProvider.fetchEvents();
  }

  @override
  Future<Either<Exception, Event>> getEvent(EventID id) {
    return eventRemoteDataProvider.getEvent(id);
  }
}
