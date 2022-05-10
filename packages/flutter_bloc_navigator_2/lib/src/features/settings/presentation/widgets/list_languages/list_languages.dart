import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_bloc_navigator_2/src/features/settings/business_logic/language_bloc.dart';
import 'package:flutter_bloc_navigator_2/src/features/settings/models/language.dart';
import 'package:flutter_bloc_navigator_2/src/features/settings/presentation/widgets/item_language/item_language.dart';

class ListLanguages extends StatelessWidget {
  const ListLanguages({Key? key, required this.languages}) : super(key: key);

  final List<Language> languages;

  void _onReorder(BuildContext context, {required Language currentLanguage}) {
    context.read<LanguageBloc>().add(
          LanguageChangedEvent(currentLanguage: currentLanguage),
        );
  }

  @override
  Widget build(BuildContext context) {
    return _ListLanguages(
      languages: languages,
      onReorder: _onReorder,
    );
  }
}

class _ListLanguages extends StatefulWidget {
  const _ListLanguages({
    Key? key,
    required this.languages,
    this.onReorder,
  }) : super(key: key);

  final List<Language> languages;
  final void Function(BuildContext, {required Language currentLanguage})?
      onReorder;

  @override
  State<_ListLanguages> createState() => _ListLanguageState();
}

class _ListLanguageState extends State<_ListLanguages> {
  @override
  Widget build(BuildContext context) {
    return ReorderableListView.builder(
      padding: EdgeInsets.zero,
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemCount: widget.languages.length,
      itemBuilder: (BuildContext context, int index) {
        return Column(
          key: ValueKey('language$index'),
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            ItemLanguage(language: widget.languages[index], onPressed: () {}),
            if (index != widget.languages.length - 1)
              const Divider(
                height: 1,
              ),
          ],
        );
      },
      onReorder: (int oldIndex, int newIndex) {
        setState(() {
          if (oldIndex < newIndex) {
            newIndex -= 1;
          }
          final item = widget.languages.removeAt(oldIndex);
          widget.languages.insert(newIndex, item);
          widget.onReorder
              ?.call(context, currentLanguage: widget.languages.first);
        });
      },
    );
  }
}
