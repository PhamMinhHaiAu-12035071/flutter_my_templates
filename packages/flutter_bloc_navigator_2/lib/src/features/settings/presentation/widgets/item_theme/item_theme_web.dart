import 'package:flutter/material.dart';
import 'package:flutter_bloc_navigator_2/src/features/themes/models/theme.dart'
    as theme_model;

class ItemTheme extends StatelessWidget {
  const ItemTheme({
    Key? key,
    required this.theme,
    this.onPressed,
  }) : super(key: key);

  final theme_model.Theme theme;
  final VoidCallback? onPressed;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      title: Text(theme.name),
      dense: false,
    );
  }
}
