import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_bloc_navigator_2/src/configs/dependency_injection/injection.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/application/event_facade_service.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/presentation/pages/bloc/event_bloc.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/presentation/widgets/templates/ticket_challenge_template.dart';
import 'package:flutter_bloc_navigator_2/src/routers/e_page.dart';

class TicketChallengePage extends EPage {
  const TicketChallengePage({required Map<String, dynamic> args})
      : super(args: args);

  @override
  Widget build(BuildContext context) {
    return const TicketChallengeScreenController();
  }
}

class TicketChallengeScreenController extends StatelessWidget {
  const TicketChallengeScreenController({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BlocProvider<EventBloc>(
      create: (BuildContext context) => EventBloc(
        eventFacadeService: getIt<EventFacadeService>(),
      )..add(
          const EventFetchedData(),
        ),
      child: const TicketChallengeScreenView(),
    );
  }
}

class TicketChallengeScreenView extends StatelessWidget {
  const TicketChallengeScreenView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const TicketChallengeTemplate();
  }
}
