import 'package:flutter_bloc_navigator_2/src/features/not_found/presentation/not_found_screen.dart';
import 'package:flutter_bloc_navigator_2/src/features/settings/presentation/screens/language_screen.dart';
import 'package:flutter_bloc_navigator_2/src/features/settings/presentation/screens/setting_screen.dart';
import 'package:flutter_bloc_navigator_2/src/features/templates_ui/ticket_challenge/presentation/pages/ticket_challenge_page.dart';
import 'package:flutter_bloc_navigator_2/src/features/themes/presentation/pages/theme_page.dart';
import 'package:flutter_bloc_navigator_2/src/routers/constants/root_path.dart';
import 'package:flutter_bloc_navigator_2/src/routers/e_page.dart';
import 'package:flutter_bloc_navigator_2/src/routers/page_config.dart';

Map<String, EPage Function(Map<String, dynamic>)> _routes = {
  RootPath.settings: (args) => SettingScreen(args: args),
  RootPath.settingLanguages: (args) => LanguageScreen(args: args),
  RootPath.settingThemes: (args) => ThemePage(args: args),

  /// Define template ui/ux
  RootPath.templateTicketUI: (args) => TicketChallengePage(args: args),
};

EPage getEPage(PageConfig config) {
  final p = _routes[config.route]?.call(config.args) ??
      NotFoundScreen(args: config.args);
  return p;
}
