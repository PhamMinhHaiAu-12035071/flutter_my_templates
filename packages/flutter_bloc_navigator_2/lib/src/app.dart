import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_bloc_navigator_2/src/localization/app_localization_setup.dart';
import 'package:flutter_bloc_navigator_2/src/modules/settings/business_logic/language_bloc.dart';
import 'package:flutter_bloc_navigator_2/src/modules/themes/business_logic/theme_bloc.dart';
import 'package:flutter_bloc_navigator_2/src/routers/business_logic/navigation_cubit.dart';
import 'package:flutter_bloc_navigator_2/src/routers/constants/root_path.dart';
import 'package:flutter_bloc_navigator_2/src/routers/e_route_information_parser.dart';
import 'package:flutter_bloc_navigator_2/src/routers/e_router_delegate.dart';
import 'package:flutter_bloc_navigator_2/src/routers/page_config.dart';

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  ERouteInformationParser get routeInformationParser =>
      ERouteInformationParser();

  ERouterDelegate get routerDelegate => ERouterDelegate(
        cubit: NavigationCubit([PageConfig(location: RootPath.settings)]),
      );

  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(
      providers: [
        BlocProvider<ThemeBloc>(create: (_) => ThemeBloc()),
        BlocProvider<LanguageBloc>(create: (_) => LanguageBloc()),
      ],
      child: BlocBuilder<ThemeBloc, ThemeState>(
        buildWhen: (previous, current) =>
            previous.appThemeConfig != current.appThemeConfig,
        builder: (_, state) {
          final appThemeConfig = state.appThemeConfig;
          return BlocBuilder<LanguageBloc, LanguageState>(
            buildWhen: (previous, current) =>
                previous.currentLanguage != current.currentLanguage,
            builder: (_, state) {
              final locale = Locale.fromSubtags(
                languageCode: state.currentLanguage.languageCode,
              );
              return MaterialApp.router(
                title: 'Flutter Demo',
                theme: appThemeConfig.light,
                darkTheme: appThemeConfig.dark,
                routeInformationParser: routeInformationParser,
                routerDelegate: routerDelegate,
                localizationsDelegates:
                    AppLocalizationSetup.localizationsDelegates,
                supportedLocales: AppLocalizationSetup.supportedLocales,
                localeResolutionCallback:
                    AppLocalizationSetup.localeResolutionCallback,
                locale: locale,
              );
            },
          );
        },
      ),
    );
  }
}
