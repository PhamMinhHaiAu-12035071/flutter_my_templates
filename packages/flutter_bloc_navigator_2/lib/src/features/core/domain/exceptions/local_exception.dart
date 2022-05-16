import 'package:flutter_bloc_navigator_2/src/features/core/domain/exceptions/app_exception.dart';

class LocalException implements AppException {
  @override
  String get message => 'Error occur local';
}
