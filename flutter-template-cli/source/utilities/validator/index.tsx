import Validator from 'fastest-validator';

export const v = new Validator({
  useNewCustomCheckerFunction: true, // using new version
  messages: {
    // Register our new error message text
    pathNotExists: "The '{field}' field must be an path exists.\n(Example: ~/Desktop, ~/Downloads)",
    extensionNotSupported:
      "The '{field}' field only supports extensions {expected}.\n(Example: ~/Desktop/flutter.zip, ~/Downloads/flutter.zip)",
  },
});

export const checkPathFileExtension = (pathFile: string, extension: string): boolean => {
  const lengthExtension = extension.length;
  const lastExtensionCharacter = pathFile.slice(pathFile.length - lengthExtension);
  return lastExtensionCharacter === extension;
};
