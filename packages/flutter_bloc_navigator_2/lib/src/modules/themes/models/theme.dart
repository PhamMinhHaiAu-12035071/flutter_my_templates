import 'package:equatable/equatable.dart';
import 'package:flutter_bloc_navigator_2/src/modules/themes/constants/enums.dart';

class Theme extends Equatable {
  const Theme({required this.name, required this.code});

  final String name;
  final SelectAppTheme code;

  @override
  List<Object?> get props => [name, code];
}
