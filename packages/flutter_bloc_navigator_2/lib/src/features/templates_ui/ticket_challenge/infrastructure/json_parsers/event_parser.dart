import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/infrastructure/models/event_model.dart';

//ignore_for_file: avoid_dynamic_calls

mixin EventParser on Object {
  Future<List<EventModel>> parseFetchAll(dynamic json) async {
    final arr = json as List<dynamic>;
    final result = arr
        .map(
          (dynamic item) => EventModel.fromJson(item as Map<String, dynamic>),
        )
        .toList();
    return result;
  }

  Future<EventModel> parseFetchById(dynamic json) {
    throw UnimplementedError();
  }
}
