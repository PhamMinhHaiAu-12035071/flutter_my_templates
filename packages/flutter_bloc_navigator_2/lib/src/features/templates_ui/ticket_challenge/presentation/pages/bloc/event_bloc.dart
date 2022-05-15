import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/application/event_facade_service.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/domain/entities/event.dart';

part 'event_event.dart';
part 'event_state.dart';

class EventBloc extends Bloc<EventEvent, EventState> {
  EventBloc({required EventFacadeService eventFacadeService})
      : super(const EventInitial()) {
    _eventFacadeService = eventFacadeService;
    on<EventFetchedData>(_fetchData);
  }

  late final EventFacadeService _eventFacadeService;

  Future<void> _fetchData(
    EventFetchedData event,
    Emitter<EventState> emit,
  ) async {
    emit(const EventLoading());
    final result = await _eventFacadeService.fetchEvents();
    result.fold(
      (Exception e) => emit(EventLoadFailed(message: e.toString())),
      (List<Event> events) => emit(EventLoadSuccessful(events: events)),
    );
  }
}
