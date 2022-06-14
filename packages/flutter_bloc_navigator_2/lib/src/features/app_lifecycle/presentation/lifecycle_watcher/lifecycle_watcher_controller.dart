import 'package:flutter/widgets.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_bloc_navigator_2/src/common/configs/dependency_injection/injection.dart';
import 'package:flutter_bloc_navigator_2/src/features/app_lifecycle/presentation/lifecycle_watcher/bloc/app_lifecycle_bloc.dart';
import 'package:flutter_bloc_navigator_2/src/features/app_lifecycle/presentation/lifecycle_watcher/lifecycle_watcher_view.dart';
import 'package:flutter_bloc_navigator_2/src/features/core/flavors/flavor_config.dart';
import 'package:flutter_bloc_navigator_2/src/features/languages/constants/languages.dart';
import 'package:flutter_bloc_navigator_2/src/features/languages/presentation/pages/bloc/language_bloc.dart';
import 'package:is_first_run/is_first_run.dart';
import 'package:logger/logger.dart';

class LifecycleWatcherController extends StatefulWidget {
  const LifecycleWatcherController({Key? key, required this.child})
      : super(
          key: key,
        );

  final Widget child;

  @override
  State<LifecycleWatcherController> createState() => _LifecycleWatcherState();
}

class _LifecycleWatcherState extends State<LifecycleWatcherController>
    with WidgetsBindingObserver {
  @override
  void initState() {
    super.initState();
    IsFirstRun.isFirstRun().then<bool>((value) {
      _initialEventLifeCycle();
      _initialEventSettingLanguage();
      return value;
    });
    WidgetsBinding.instance.addObserver(this);
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  void _initialEventLifeCycle() {
    context.read<AppLifecycleBloc>().add(
          const AppLifecycleChangedToPlayedOriginal(),
        );
  }

  void _initialEventSettingLanguage() {
    getIt<Logger>().d('[initial language from setting]');
    final localeNameFromSettingLanguage = WidgetsBinding.instance.window.locale;
    _handleSettingLanguageChanged(localeNameFromSettingLanguage);
  }

  void _handleAppNotFocused() {
    getIt<Logger>().d('Event app is not focused');
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    switch (state) {
      case AppLifecycleState.inactive:
        _handleAppNotFocused();
        break;
      case AppLifecycleState.paused:
        context.read<AppLifecycleBloc>().add(
              const AppLifecycleChangedToBackground(),
            );
        break;
      case AppLifecycleState.resumed:
        context.read<AppLifecycleBloc>().add(
              const AppLifecycleChangedToForeground(),
            );
        break;
      case AppLifecycleState.detached:
        context.read<AppLifecycleBloc>().add(
              const AppLifecycleChangedToKilled(),
            );
        break;
    }
  }

  void _handleSettingLanguageChanged(Locale? locale) {
    final enabledSettingLanguage = getIt<FlavorConfig>().enabledSettingLanguage;
    if (enabledSettingLanguage == true) {
      if (locale != null) {
        final findIndex = languages.indexWhere((element) {
          final index = element.languageCode.indexWhere((code) {
            return code == locale.languageCode;
          });

          return index != -1;
        });
        if (findIndex != -1) {
          context.read<LanguageBloc>().add(
                LanguageChangedEvent(currentLanguage: languages[findIndex]),
              );
        }
      }
    }
  }

  @override
  void didChangeLocales(List<Locale>? locales) {
    getIt<Logger>().d('[didChangeLocales]: $locales');
    final first = locales?.first;
    _handleSettingLanguageChanged(first);
  }

  @override
  Widget build(BuildContext context) {
    return LifecycleWatcherView(child: widget.child);
  }
}
