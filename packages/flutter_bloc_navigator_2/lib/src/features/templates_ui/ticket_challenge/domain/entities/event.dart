import 'package:equatable/equatable.dart';

/// The EventID is an important concept in our domain
/// so it deserves a type of its own
typedef EventID = String;

class Event extends Equatable {
  const Event({
    required this.id,
    required this.link,
    required this.title,
    required this.date,
    required this.location,
  });

  final EventID id;
  final String link;
  final String title;
  final String date;
  final String location;

  @override
  List<Object?> get props => [id];
}
