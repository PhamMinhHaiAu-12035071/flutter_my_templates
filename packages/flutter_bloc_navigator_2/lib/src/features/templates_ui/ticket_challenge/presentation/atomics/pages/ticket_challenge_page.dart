import 'package:flutter/material.dart';
import 'package:flutter_bloc_navigator_2/src/configs/dependency_injection/injection.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/application/event_facade_service.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/presentation/atomics/templates/ticket_challenge_template.dart';
import 'package:flutter_bloc_navigator_2/src/routers/e_page.dart';

class TicketChallengePage extends EPage {
  const TicketChallengePage({required Map<String, dynamic> args})
      : super(args: args);

  @override
  Widget build(BuildContext context) {
    getIt<EventFacadeService>()
        .fetchEvents()
        .then((response) => print('show response: $response'));
    return const TicketChallengeTemplate();
  }
}
