import 'package:equatable/equatable.dart';

class Setting extends Equatable {
  const Setting({required this.image, required this.name});

  final String image;
  final String name;

  @override
  List<Object?> get props => [image, name];
}
