import 'package:flutter_bloc_navigator_2/src/common/configs/device_preview/device_preview_options.dart';
import 'package:flutter_bloc_navigator_2/src/common/configs/hive/restore_navigation_options.dart';

abstract class FlavorConfig
    implements DevicePreviewOptions, RestoreNavigationOptions {
  String get title;
  String get baseUrl;
}
