import 'package:flutter_bloc_navigator_2/src/features/core/domain/exceptions/app_exception.dart';

class UnknownException implements AppException {
  const UnknownException();

  @override
  String get message => 'Unknown Error';
}
