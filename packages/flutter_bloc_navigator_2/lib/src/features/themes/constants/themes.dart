import 'package:flutter_bloc_navigator_2/src/features/themes/constants/enums.dart';
import 'package:flutter_bloc_navigator_2/src/features/themes/domain/entities/theme_entity.dart';

final themes = <ThemeEntity>[
  const ThemeEntity(id: '0', name: 'Normal', code: SelectAppTheme.normal),
  const ThemeEntity(id: '1', name: 'Primary', code: SelectAppTheme.primary),
];
