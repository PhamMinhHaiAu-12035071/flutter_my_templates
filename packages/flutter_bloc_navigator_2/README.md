
# Table of Contents
* [1. Getting Started](#1-getting-started)
* [2. Feature](#2-feature)
* [3. Project structure](#3-project-structure)
* [4. Assets and images](#4-assets-and-images)
* [5. Localization and internationalization](#5-localization-and-internationalization)
* [6. Create new screen](#6-create-new-screen)
* [7. Install](#7-install)
* [8. Generate code](#8-generate-code)
* [9. Help](#9-help)
* [10. Run on macOS](#10-run-on-macos)

## 1. Getting Started

This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://flutter.dev/docs/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://flutter.dev/docs/cookbook)
For help getting started with Flutter, view our
[online documentation](https://flutter.dev/docs), which offers tutorials,
samples, guidance on mobile development, and a full API reference.

## 2. Feature

- Support multiple language (device or manual)
- Support multiple theme (include light and dark theme)
- Split [atomics design](https://itnext.io/atomic-design-with-flutter-11f6fcb62017) 


## 3. Project structure


    .    
    ├── lib                                              # The directory project
    |   ├── src                                          # The directory project app
    |   |   ├── configs                                  # The directory contains all common configs
    |   |   |   ├── dependency_injection                 # The directory contains all configs DI
    |   |   |   ├── flavors                              # The directory contains all setup flavor variables for all environments (dev, stg, prod)
    |   |   ├── gen                                      # The directory generate file images, fonts, colors...
    ├── analysis_options.yaml                            # The file setting lint code
    ├── Makefile                                         # The file contains all commands useful
    └── README.md                                        # Documents


## 4. Assets and images

- Used package [flutter_gen](https://pub.dev/packages/flutter_gen)

## 5. Localization and internationalization

- **Step 1**: Define strings that need to be translated

  - Open file **app_localization.dart** and write code in **TODO(username): Define strings that need to be translated.**

- **Step 2**: Run command to generate arb files **intl_messages.arb**

    ```shell
    make generate-template-l10n
    ```
  
- **Step 3**: Add new language in file **"lib/src/localization/locale_support.dart"** with variables **locales**
 
  - Please reference link [languageCode](http://www.lingoes.net/en/translator/langcode.htm)

- **Step 3**: Create file languages mapping with variables **locales** in the folder "lib/src/localization/arb_files/"
 
  - Example: locales = ["en", "vi"] -> create 2 file **intl_en.arb** and **intl_vi.arb**
  - Copy content file intl_messages.arb and pastes 2 files above
  - Insert key **"@@locale"** corresponding to each file,
      - Insert "@@locale": "en" -> file intl_en.arb
      - Insert "@@locale": "vi" -> file intl_vi.arb

- **Step 4**: Run command which converts those JSON maps into .dart files.
  
  ```bash
  make generate-from-arb
  ```
  or if you have added new files please add the path in the command **generate-from-arb**
  - Example: 
  ```shell
      flutter pub run intl_translation:generate_from_arb
    --output-dir=lib/src/localization/dart_files
    --no-use-deferred-loading lib/src/localization/app_localization.dart
    lib/src/localization/arb_files/intl_en.arb
    lib/src/localization/arb_files/intl_it.arb
    lib/src/localization/arb_files/intl_es.arb
    ... add new path
  ```

- **Step 5**: Guide Used

  ```dart
  Text(AppLocalization.of(context)?.settings ?? ''),
  ```
  
## 6. Create new screen

- **Step 1**: add new path in file **lib/src/routers/constants/root_path.dart**

  ```dart
  abstract class RootPath {
    static const settings = '/settings';
    static const settingLanguages = '/settings/languages'; /// <- add new path
  }
  ```
  
- **Step 2**: create new screen

  ```dart
  import 'package:flutter/cupertino.dart';
  import 'package:flutter/material.dart';
  import 'package:flutter_bloc_navigator_2/src/localization/app_localization.dart';
  import 'package:flutter_bloc_navigator_2/src/routers/e_page.dart';
  
  class LanguageScreen extends EPage {
    const LanguageScreen({required Map<String, dynamic> args})
        : super(args: args);
  
    @override
    Widget build(BuildContext context) {
      return const LanguageView();
    }
  }
  
  class LanguageView extends StatelessWidget {
    const LanguageView({Key? key}) : super(key: key);
  
    @override
    Widget build(BuildContext context) {
      return Scaffold(
        appBar: AppBar(
          leading: Row(
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
              InkWell(
                borderRadius: BorderRadius.circular(8),
                splashFactory: InkRipple.splashFactory,
                splashColor: CupertinoColors.link.withOpacity(0.2),
                highlightColor: CupertinoColors.link.withOpacity(0.1),
                hoverColor: CupertinoColors.link.withOpacity(0.1),
                onTap: () {},
                child: const Padding(
                  padding: EdgeInsets.all(8),
                  child: Text(
                    'Back',
                    style: TextStyle(color: CupertinoColors.link),
                  ),
                ),
              )
            ],
          ),
          title: Text(AppLocalization.of(context)?.settings ?? ''),
        ),
        body: Container(),
      );
    }
  }
  ```
- **Step 3**: create new route in file **lib/src/routers/constants/routes.dart**

  ```dart
  Map<String, EPage Function(Map<String, dynamic>)> _routes = {
    RootPath.settings: (args) => SettingScreen(args: args),
    RootPath.settingLanguages: (args) => LanguageScreen(args: args), /// <- add new route
  };
  ```
  
## 7. Install

```shell
  make install
```

## 8. Generate code

```shell
  make rebuild
```

## 9. Help

```shell
  make help
```

## 10. Run on macOS

macOS needs you to request a specific entitlement in order to access the network. 
To do that open **macos/Runner/DebugProfile.entitlements** and add the following key-value pair.

```
  <key>com.apple.security.network.client</key>
  <true/>
```
Then do the same thing in **macos/Runner/Release.entitlements.**

You can read more about this in the [Desktop support for Flutter documentation.](https://flutter.dev/multi-platform/desktop#setting-up-entitlements)

Start project on macOS with command 

```shell
  make macos
```

