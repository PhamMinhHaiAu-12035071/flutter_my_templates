import 'package:equatable/equatable.dart';

class Language extends Equatable {
  const Language({required this.name, required this.languageCode});

  final String name;
  final String languageCode;

  @override
  List<Object?> get props => [name, languageCode];
}
