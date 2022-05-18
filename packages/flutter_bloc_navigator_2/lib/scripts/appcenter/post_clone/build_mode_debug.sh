#!/usr/bin/env bash


flutter build apk --debug --build-number "$APPCENTER_BUILD_ID"

# copy the APK where AppCenter will find it
mkdir -p android/app/build/outputs/apk/;
mv build/app/outputs/flutter-apk/app-debug.apk "$_"