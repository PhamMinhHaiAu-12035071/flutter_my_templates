import 'package:flutter/cupertino.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/domain/entities/event_entity.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/presentation/exhibition_bottom_sheet/exhibition_bottom_sheet_controller.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/presentation/widgets/organisms/exhibition_bottom_sheet.dart';

class ExhibitionBottomSheetView extends StatelessWidget {
  const ExhibitionBottomSheetView(
    this.state, {
    Key? key,
    this.events,
  }) : super(key: key);

  final List<EventEntity>? events;
  final ExhibitionBottomSheetController state;

  @override
  Widget build(BuildContext context) {
    //////////////////////////////////////////////////////////
    // Widget tree goes here.
    //////////////////////////////////////////////////////////
    return ExhibitionBottomSheet(
      events: events,
      onToggle: state.toggle,
      onVerticalDragUpdate: state.onVerticalDragUpdate,
      onVerticalDragEnd: state.onVerticalDragEnd,
    );
  }
}
