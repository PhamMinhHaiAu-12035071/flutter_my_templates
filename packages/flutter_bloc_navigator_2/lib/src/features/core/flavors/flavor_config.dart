import 'package:flutter_bloc_navigator_2/src/common/configs/device_preview/device_preview_options.dart';
import 'package:flutter_bloc_navigator_2/src/common/configs/hive/restore_navigation_options.dart';
import 'package:flutter_bloc_navigator_2/src/common/configs/setting_device/setting_device_language_options.dart';

abstract class FlavorConfig
    implements
        DevicePreviewOptions,
        RestoreNavigationOptions,
        SettingDeviceLanguageOptions {
  String get title;
  String get baseUrl;
}
