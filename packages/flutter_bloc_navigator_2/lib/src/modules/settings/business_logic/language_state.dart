part of 'language_bloc.dart';

class LanguageState extends Equatable {
  const LanguageState({
    this.currentLanguage = const Language(
      name: 'English',
      languageCode: 'en',
    ),
  });

  final Language currentLanguage;

  @override
  List<Object?> get props => [currentLanguage];

  LanguageState copyWith({Language? currentLanguage}) => LanguageState(
        currentLanguage: currentLanguage ?? this.currentLanguage,
      );
}
