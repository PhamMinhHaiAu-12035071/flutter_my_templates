import 'package:flutter/cupertino.dart';
import 'package:flutter_bloc_navigator_2/src/localization/app_localization_delegate.dart';
import 'package:flutter_localizations/flutter_localizations.dart';

class AppLocalizationSetup {
  static const Iterable<Locale> supportedLocales = [
    Locale.fromSubtags(languageCode: 'en'),
    Locale.fromSubtags(languageCode: 'en_US'),
    Locale.fromSubtags(languageCode: 'vi'),
    Locale.fromSubtags(languageCode: 'vi_VN'),
  ];

  static const Iterable<LocalizationsDelegate<dynamic>> localizationsDelegates =
      [
    AppLocalizationDelegate(),
    GlobalMaterialLocalizations.delegate,
    GlobalCupertinoLocalizations.delegate,
    GlobalWidgetsLocalizations.delegate,
  ];

  static Locale? localeResolutionCallback(
    Locale? locale,
    Iterable<Locale> supportedLocales,
  ) {
    for (final supportedLocale in supportedLocales) {
      if (supportedLocale.languageCode == locale!.languageCode &&
          supportedLocale.countryCode == locale.countryCode) {
        return supportedLocale;
      }
    }
    return supportedLocales.first;
  }
}
