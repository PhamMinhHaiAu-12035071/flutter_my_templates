# Table of Contents
* [1. Guide used](#1-guide-used)
* [2. Create template with feature](#2-create-template-with-feature)

## 1. Guide used

- **Step 1**: Download file install [flutter](https://docs.flutter.dev/get-started/install)
- **Step 2**: Create folder **bin** in root project
- **Step 3**: Copy file zip in folder **bin**
- **Step 4**: Unzip file zip
- **Step 5**: Change name variable **FLUTTER_ZIP** with new path from file zip in path "./scripts/src/replace_template_skeleton.ts"
- **Step 6**: Open terminal and run command
    ```shell
    cd scripts && npm run install && npm run start
    ```
- **Step 7**: Create template with command line
    ```shell
    <rootPath>/bin/flutter/bin/flutter create -t skeleton flutter_demo -i swift -a java
    ```

## 2. Create template with feature

- Support multiple language (device or manual)
- Support multiple theme (include light and dark theme)
- Support device_preview
- Support responsive layout
- Support restore navigation when kill app
- Split [atomics design](https://itnext.io/atomic-design-with-flutter-11f6fcb62017)
- [Domain Driven Design Flutter Architecture](https://github.com/mhadaily/flutter-architecture-ddd)
