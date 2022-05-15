import 'package:flutter/cupertino.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_bloc_navigator_2/src/features/settings/constants/settings.dart';
import 'package:flutter_bloc_navigator_2/src/features/settings/presentation/list_setting_template/list_setting_template_view.dart';
import 'package:flutter_bloc_navigator_2/src/routers/business_logic/navigation_cubit.dart';
import 'package:flutter_bloc_navigator_2/src/routers/constants/root_path.dart';

class ListSettingTemplateController extends StatelessWidget {
  const ListSettingTemplateController({Key? key}) : super(key: key);

  void onPress(BuildContext context, {required int index}) {
    switch (index) {
      case 0:
        context.read<NavigationCubit>().push(RootPath.templateTicketUI);
        break;
    }
  }

  @override
  Widget build(BuildContext context) {
    return ListSettingTemplateView(this, settings: templateSettings);
  }
}
