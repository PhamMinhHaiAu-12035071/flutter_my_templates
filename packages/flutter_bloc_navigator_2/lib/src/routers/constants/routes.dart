import 'package:flutter_bloc_navigator_2/src/modules/not_found/presentation/not_found_screen.dart';
import 'package:flutter_bloc_navigator_2/src/modules/settings/presentation/screens/language_screen.dart';
import 'package:flutter_bloc_navigator_2/src/modules/settings/presentation/screens/setting_screen.dart';
import 'package:flutter_bloc_navigator_2/src/modules/settings/presentation/screens/theme_screen.dart';
import 'package:flutter_bloc_navigator_2/src/modules/templates_ui/ticket_challenge/presentation/screens/ticket_challenge_screen.dart';
import 'package:flutter_bloc_navigator_2/src/routers/constants/root_path.dart';
import 'package:flutter_bloc_navigator_2/src/routers/e_page.dart';
import 'package:flutter_bloc_navigator_2/src/routers/page_config.dart';

Map<String, EPage Function(Map<String, dynamic>)> _routes = {
  RootPath.settings: (args) => SettingScreen(args: args),
  RootPath.settingLanguages: (args) => LanguageScreen(args: args),
  RootPath.settingThemes: (args) => ThemeScreen(args: args),

  /// Define template ui/ux
  RootPath.templateTicketUI: (args) => TicketChallengeScreen(args: args),
};

EPage getEPage(PageConfig config) {
  final p = _routes[config.route]?.call(config.args) ??
      NotFoundScreen(args: config.args);
  return p;
}
