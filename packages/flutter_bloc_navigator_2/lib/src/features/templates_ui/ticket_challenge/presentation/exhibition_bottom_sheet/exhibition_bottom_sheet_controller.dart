import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_bloc_navigator_2/src/configs/dependency_injection/injection.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/presentation/exhibition_bottom_sheet/exhibition_bottom_sheet_view.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/presentation/pages/bloc/event_bloc.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:logger/logger.dart';

class ExhibitionBottomSheetController extends HookWidget {
  const ExhibitionBottomSheetController({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<EventBloc, EventState>(
      buildWhen: (previous, current) => previous != current,
      builder: (_, state) {
        if (state is EventInitial) {
          return ExhibitionBottomSheetView(this);
        } else if (state is EventLoadSuccessful) {
          return ExhibitionBottomSheetView(this, events: state.events);
        } else if (state is EventLoadFailed) {
          return ExhibitionBottomSheetView(this);
        }
        return ExhibitionBottomSheetView(this);
      },
    );
  }

  //////////////////////////////////////////////////////////
  // UI binding event handlers, init code, etc goes here
  //////////////////////////////////////////////////////////

  void toggle() {
    getIt<Logger>().d('put logic in here when have event toggle');
  }

  void onVerticalDragUpdate() {
    getIt<Logger>().d('put logic in here when have event onDragUpdate');
  }

  void onVerticalDragEnd() {
    getIt<Logger>().d('put logic in here when have event onDragEnd');
  }
}
