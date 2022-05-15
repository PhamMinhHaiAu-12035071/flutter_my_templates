import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_bloc_navigator_2/src/common/utilities/extensions/string_extension.dart';
import 'package:flutter_bloc_navigator_2/src/features/settings/constants/settings.dart';
import 'package:flutter_bloc_navigator_2/src/features/settings/presentation/widgets/group_list_settings/group_list_settings.dart';
import 'package:flutter_bloc_navigator_2/src/features/settings/presentation/widgets/list_settings/list_settings.dart';
import 'package:flutter_bloc_navigator_2/src/localization/app_localization.dart';
import 'package:flutter_bloc_navigator_2/src/routers/business_logic/navigation_cubit.dart';
import 'package:flutter_bloc_navigator_2/src/routers/constants/root_path.dart';
import 'package:flutter_bloc_navigator_2/src/routers/e_page.dart';

class SettingScreen extends EPage {
  const SettingScreen({required Map<String, dynamic> args}) : super(args: args);

  @override
  Widget build(BuildContext context) {
    return const SettingViewContainer();
  }
}

class SettingViewContainer extends StatelessWidget {
  const SettingViewContainer({Key? key}) : super(key: key);

  void _onBack() {}

  void _onPressCommonSetting(BuildContext context, {required int index}) {
    switch (index) {
      case 0:
        context.read<NavigationCubit>().push(RootPath.settingThemes);
        break;
      case 1:
        context.read<NavigationCubit>().push(RootPath.settingLanguages);
        break;
    }
  }

  void _onPressTemplateSetting(BuildContext context, {required int index}) {
    switch (index) {
      case 0:
        context.read<NavigationCubit>().push(RootPath.templateTicketUI);
        break;
    }
  }

  @override
  Widget build(BuildContext context) {
    return _SettingView(
      onBack: _onBack,
      onPressCommonSetting: _onPressCommonSetting,
      onPressTemplateSetting: _onPressTemplateSetting,
    );
  }
}

class _SettingView extends StatelessWidget {
  const _SettingView({
    Key? key,
    this.onBack,
    this.onPressCommonSetting,
    this.onPressTemplateSetting,
  }) : super(key: key);

  final VoidCallback? onBack;
  final void Function(BuildContext, {required int index})? onPressCommonSetting;
  final void Function(BuildContext, {required int index})?
      onPressTemplateSetting;

  @override
  Widget build(BuildContext context) {
    final titleSetting =
        AppLocalization.of(context)?.settings.defaultTo('').toTitleCase();
    return Scaffold(
      appBar: AppBar(
        title: Text(titleSetting!),
      ),
      body: Column(
        children: <Widget>[
          GroupListSettings(
            title: 'Commons',
            child: ListSettings(
              settings: settings,
              onPressed: onPressCommonSetting,
            ),
          ),
          GroupListSettings(
            title: 'Template UI/UX',
            child: ListSettings(
              settings: templateSettings,
              onPressed: onPressTemplateSetting,
            ),
          ),
        ],
      ),
    );
  }
}
