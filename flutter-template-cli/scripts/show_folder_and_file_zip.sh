#!/usr/bin/env bash

for ARGUMENT in "$@"
do
    KEY=$(echo "$ARGUMENT" | cut -f1 -d=)

    KEY_LENGTH=${#KEY}
    VALUE="${ARGUMENT:$KEY_LENGTH+1}"
    export "$KEY"="$VALUE"
done

NAME_FOLDER="$NAME*"
NAME_FILE_ZIP="$NAME*.zip"
# shellcheck disable=SC2086
RESULT_FIND_FOLDER=$(find $ABSOLUTE_PATH -type d \( ! -regex '.*/\..*' \) -name "$NAME_FOLDER" -maxdepth 1 -mindepth 1)
# shellcheck disable=SC2086
RESULT_FIND_FILE_ZIP=$(find $ABSOLUTE_PATH -type f -name "$NAME_FILE_ZIP" -maxdepth 1 -mindepth 1)
MERGED_RESULT="$RESULT_FIND_FOLDER$UUID$RESULT_FIND_FILE_ZIP"

echo "$MERGED_RESULT"
