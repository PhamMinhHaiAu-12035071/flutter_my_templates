import 'package:flutter/cupertino.dart';
import 'package:flutter_bloc_navigator_2/src/features/settings/domain/entities/setting_entity.dart';
import 'package:flutter_bloc_navigator_2/src/features/settings/presentation/list_setting/list_settings.dart';
import 'package:flutter_bloc_navigator_2/src/features/settings/presentation/list_setting_template/list_setting_template_controller.dart';
import 'package:flutter_bloc_navigator_2/src/features/settings/presentation/widgets/molecules/group_list_settings.dart';

class ListSettingTemplateView extends StatelessWidget {
  const ListSettingTemplateView(this.state, {Key? key, required this.settings})
      : super(key: key);

  final ListSettingTemplateController state;
  final List<SettingEntity> settings;
  @override
  Widget build(BuildContext context) {
    return GroupListSettings(
      title: 'Template UI/UX',
      child: ListSettings(
        settings: settings,
        onPressed: state.onPress,
      ),
    );
  }
}
