import 'package:flutter/material.dart';
import 'package:flutter_bloc_navigator_2/src/features/themes/constants/enums.dart';
import 'package:flutter_bloc_navigator_2/src/features/themes/domain/entities/theme_entity.dart';

class AppThemeConfig {
  factory AppThemeConfig.getAppThemeConfig(ThemeEntity theme) {
    switch (theme.code) {
      case SelectAppTheme.normal:
        return AppThemeConfig.normal();
      case SelectAppTheme.primary:
        return AppThemeConfig.primary();
    }
  }
  AppThemeConfig.normal()
      : _constructorType = SelectAppTheme.normal,
        light = ThemeData.light().copyWith(
          appBarTheme: AppBarTheme(
            foregroundColor: Colors.black,
            backgroundColor: ThemeData.light().scaffoldBackgroundColor,
          ),
        ),
        dark = ThemeData.dark();

  AppThemeConfig.primary()
      : _constructorType = SelectAppTheme.primary,
        light = ThemeData.light().copyWith(
          appBarTheme: const AppBarTheme(
            foregroundColor: Colors.black,
            backgroundColor: Colors.orange,
          ),
        ),
        dark = ThemeData.dark().copyWith(
          appBarTheme: const AppBarTheme(
            foregroundColor: Colors.white,
            backgroundColor: Colors.deepPurple,
          ),
        );

  final SelectAppTheme _constructorType;
  final ThemeData light;
  final ThemeData dark;

  @override
  String toString() {
    return '[AppThemeConfig]: $_constructorType';
  }
}
