import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter_bloc_navigator_2/src/modules/settings/models/language.dart';

part 'language_event.dart';
part 'language_state.dart';

class LanguageBloc extends Bloc<LanguageEvent, LanguageState> {
  LanguageBloc() : super(const LanguageState()) {
    on<LanguageChangedEvent>(_onChanged);
  }

  void _onChanged(LanguageChangedEvent event, Emitter<LanguageState> emit) {
    emit(state.copyWith(currentLanguage: event.currentLanguage));
  }
}
