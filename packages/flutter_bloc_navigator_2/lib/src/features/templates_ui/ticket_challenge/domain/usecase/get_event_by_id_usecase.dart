import 'package:flutter_bloc_navigator_2/src/features/core/domain/usecase/use_case.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/domain/entities/event_entity.dart';

abstract class GetEventByIdUseCase implements UseCase<EventEntity, String> {}
