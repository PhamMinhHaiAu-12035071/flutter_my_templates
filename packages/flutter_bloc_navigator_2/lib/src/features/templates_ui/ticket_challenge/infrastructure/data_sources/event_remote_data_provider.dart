import 'package:dartz/dartz.dart';
import 'package:flutter_bloc_navigator_2/src/features/core/domain/exceptions/app_exception.dart';
import 'package:flutter_bloc_navigator_2/src/features/core/infrastructure/data_sources/hook_method_fetch_all.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/infrastructure/models/event_model.dart';

abstract class EventRemoteDataProvider
    implements HookMethodFetchAll<List<EventModel>> {
  Future<Either<AppException, EventModel>> getEvent(String id);
}
