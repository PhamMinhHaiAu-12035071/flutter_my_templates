import 'package:flutter_bloc_navigator_2/src/configs/env/env.dart';
import 'package:flutter_bloc_navigator_2/src/features/core/infrastructure/json_parsers/json_parser.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/infrastructure/models/event_model.dart';
import 'package:injectable/injectable.dart';

//ignore_for_file: avoid_dynamic_calls

@Environment(Env.dev)
@Environment(Env.test)
@singleton
class EventParser extends JsonParser<EventModel> {
  @override
  Future<List<EventModel>> parseFetchAll(dynamic json) async {
    final arr = json['data']['events'] as List<dynamic>;
    final result = arr
        .map(
          (dynamic item) => EventModel.fromJson(item as Map<String, dynamic>),
        )
        .toList();
    return result;
  }

  @override
  Future<EventModel> parseFetchById(dynamic json) {
    throw UnimplementedError();
  }
}
