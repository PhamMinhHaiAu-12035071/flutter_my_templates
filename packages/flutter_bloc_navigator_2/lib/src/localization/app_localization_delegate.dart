import 'package:flutter/cupertino.dart';
import 'package:flutter_bloc_navigator_2/src/localization/app_localization.dart';
import 'package:flutter_bloc_navigator_2/src/localization/locale_support.dart';

class AppLocalizationDelegate extends LocalizationsDelegate<AppLocalization> {
  const AppLocalizationDelegate();
  @override
  bool isSupported(Locale locale) => LocaleSupport.locales.contains(
        locale.languageCode,
      );

  @override
  Future<AppLocalization> load(Locale locale) => AppLocalization.load(locale);

  @override
  bool shouldReload(LocalizationsDelegate<AppLocalization> old) => false;
}
