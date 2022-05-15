import 'package:flutter/material.dart';
import 'package:flutter_bloc_navigator_2/src/features/themes/domain/entities/theme_entity.dart';
import 'package:flutter_bloc_navigator_2/src/features/themes/presentation/list_theme/list_theme_controller.dart';
import 'package:flutter_bloc_navigator_2/src/features/themes/presentation/widgets/atoms/item_theme/item_theme.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

class ListThemeView extends HookWidget {
  const ListThemeView(this.state, {Key? key, required this.themes})
      : super(key: key);

  final ListThemeController state;
  final List<ThemeEntity> themes;

  @override
  Widget build(BuildContext context) {
    //////////////////////////////////////////////////////////
    // Define variable
    //////////////////////////////////////////////////////////
    final index = useState(0);

    //////////////////////////////////////////////////////////
    // Handle event animation
    //////////////////////////////////////////////////////////
    void _onReorder(int oldIndex, int newIndex) {
      if (oldIndex < newIndex) {
        index.value -= 1;
      } else {
        index.value = newIndex;
      }
      final item = themes.removeAt(oldIndex);
      themes.insert(newIndex, item);
      state.onReorder(context, currentTheme: themes.first);
    }

    //////////////////////////////////////////////////////////
    // Widget tree goes here.
    //////////////////////////////////////////////////////////
    return ReorderableListView.builder(
      padding: EdgeInsets.zero,
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemCount: themes.length,
      itemBuilder: (BuildContext context, int index) {
        return Column(
          key: ValueKey(themes[index].id),
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            ItemTheme(name: themes[index].name, onPressed: () {}),
            if (index != themes.length - 1)
              const Divider(
                height: 1,
              ),
          ],
        );
      },
      onReorder: _onReorder,
    );
  }
}
