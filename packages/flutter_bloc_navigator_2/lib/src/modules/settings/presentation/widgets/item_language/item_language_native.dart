import 'package:flutter/material.dart';
import 'package:flutter_bloc_navigator_2/src/modules/settings/models/language.dart';

class ItemLanguage extends StatelessWidget {
  const ItemLanguage({
    Key? key,
    required this.language,
    this.onPressed,
  }) : super(key: key);

  final Language language;
  final VoidCallback? onPressed;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      title: Text(language.name),
      dense: false,
      trailing: const Icon(
        Icons.menu,
        size: 16,
      ),
    );
  }
}
