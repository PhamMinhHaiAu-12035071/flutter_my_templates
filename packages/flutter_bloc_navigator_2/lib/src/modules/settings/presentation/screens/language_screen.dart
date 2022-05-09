import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_bloc_navigator_2/src/localization/app_localization.dart';
import 'package:flutter_bloc_navigator_2/src/modules/settings/constants/languages.dart';
import 'package:flutter_bloc_navigator_2/src/modules/settings/presentation/widgets/list_languages/list_languages.dart';
import 'package:flutter_bloc_navigator_2/src/routers/business_logic/navigation_cubit.dart';
import 'package:flutter_bloc_navigator_2/src/routers/e_page.dart';
import 'package:flutter_bloc_navigator_2/src/shared/utilities/extensions/string_extension.dart';

class LanguageScreen extends EPage {
  const LanguageScreen({required Map<String, dynamic> args})
      : super(args: args);

  @override
  Widget build(BuildContext context) {
    return const LanguageView();
  }

  @override
  Route createRoute(BuildContext context) {
    return super.transitionCupertino();
  }
}

class LanguageView extends StatelessWidget {
  const LanguageView({Key? key}) : super(key: key);

  void _onBack(BuildContext context) {
    context.read<NavigationCubit>().pop();
  }

  @override
  Widget build(BuildContext context) {
    return _LanguageView(onBack: _onBack);
  }
}

class _LanguageView extends StatelessWidget {
  const _LanguageView({Key? key, this.onBack}) : super(key: key);

  final void Function(BuildContext)? onBack;

  @override
  Widget build(BuildContext context) {
    final titleLanguage =
        AppLocalization.of(context)?.languages.defaultTo('').toTitleCase();
    final textBack =
        AppLocalization.of(context)?.back.defaultTo('').capitalize();

    return Scaffold(
      appBar: AppBar(
        leadingWidth: 150,
        leading: Row(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            InkWell(
              borderRadius: BorderRadius.circular(8),
              splashFactory: InkRipple.splashFactory,
              splashColor: CupertinoColors.link.withOpacity(0.2),
              highlightColor: CupertinoColors.link.withOpacity(0.1),
              hoverColor: CupertinoColors.link.withOpacity(0.1),
              onTap: () => onBack?.call(context),
              child: Padding(
                padding: const EdgeInsets.all(8),
                child: Row(
                  children: <Widget>[
                    const Icon(
                      Icons.arrow_back_ios_rounded,
                      size: 24,
                      color: CupertinoColors.link,
                    ),
                    Text(
                      textBack!,
                      style: const TextStyle(color: CupertinoColors.link),
                    ),
                  ],
                ),
              ),
            )
          ],
        ),
        title: Text(titleLanguage!),
      ),
      body: Container(
        margin: const EdgeInsets.only(top: 12),
        child: Card(
          margin: const EdgeInsets.symmetric(horizontal: 12),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(10),
          ),
          clipBehavior: Clip.antiAlias,
          child: ListLanguages(languages: languages),
        ),
      ),
    );
  }
}
