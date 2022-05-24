import 'package:flutter_bloc_navigator_2/src/common/configs/device_preview/device_preview_options.dart';

abstract class FlavorConfig implements DevicePreviewOptions {
  String get title;
  String get baseUrl;
}
