import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_bloc_navigator_2/src/features/settings/presentation/widgets/item_theme/item_theme.dart';
import 'package:flutter_bloc_navigator_2/src/features/themes/business_logic/theme_bloc.dart';
import 'package:flutter_bloc_navigator_2/src/features/themes/models/theme.dart'
    as theme_model;

class ListThemes extends StatelessWidget {
  const ListThemes({Key? key, required this.themes}) : super(key: key);

  final List<theme_model.Theme> themes;

  void _onReorder(
    BuildContext context, {
    required theme_model.Theme currentTheme,
  }) {
    context.read<ThemeBloc>().add(
          ThemeChangedEvent(theme: currentTheme),
        );
  }

  @override
  Widget build(BuildContext context) {
    return _ListThemes(themes: themes, onReorder: _onReorder);
  }
}

class _ListThemes extends StatefulWidget {
  const _ListThemes({Key? key, required this.themes, this.onReorder})
      : super(key: key);

  final List<theme_model.Theme> themes;
  final void Function(BuildContext, {required theme_model.Theme currentTheme})?
      onReorder;

  @override
  State<_ListThemes> createState() => _ListThemesState();
}

class _ListThemesState extends State<_ListThemes> {
  @override
  Widget build(BuildContext context) {
    return ReorderableListView.builder(
      padding: EdgeInsets.zero,
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemCount: widget.themes.length,
      itemBuilder: (BuildContext context, int index) {
        return Column(
          key: ValueKey('theme$index'),
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            ItemTheme(theme: widget.themes[index], onPressed: () {}),
            if (index != widget.themes.length - 1)
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
          final item = widget.themes.removeAt(oldIndex);
          widget.themes.insert(newIndex, item);
          widget.onReorder?.call(context, currentTheme: widget.themes.first);
        });
      },
    );
  }
}
