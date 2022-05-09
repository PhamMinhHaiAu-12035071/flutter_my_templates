import 'package:flutter/material.dart';
import 'package:flutter_bloc_navigator_2/src/modules/templates_ui/ticket_challenge/presentation/widgets/exhibition_bottom_sheet.dart';
import 'package:flutter_bloc_navigator_2/src/routers/e_page.dart';

class TicketChallengeScreen extends EPage {
  const TicketChallengeScreen({required Map<String, dynamic> args})
      : super(args: args);

  @override
  Widget build(BuildContext context) {
    return const TicketChallengeView();
  }
}

class TicketChallengeView extends StatelessWidget {
  const TicketChallengeView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        //<-- main stack
        children: const <Widget>[
          ExhibitionBottomSheet(),
        ],
      ),
    );
  }
}
