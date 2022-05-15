import 'package:flutter/cupertino.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_bloc_navigator_2/src/features/languages/constants/languages.dart';
import 'package:flutter_bloc_navigator_2/src/features/languages/domain/entities/language_entity.dart';
import 'package:flutter_bloc_navigator_2/src/features/languages/presentation/list_languages/list_language_view.dart';
import 'package:flutter_bloc_navigator_2/src/features/languages/presentation/pages/bloc/language_bloc.dart';

class ListLanguageController extends StatelessWidget {
  const ListLanguageController({Key? key}) : super(key: key);

  void onReorder(
    BuildContext context, {
    required LanguageEntity currentLanguage,
  }) {
    context.read<LanguageBloc>().add(
          LanguageChangedEvent(currentLanguage: currentLanguage),
        );
  }

  @override
  Widget build(BuildContext context) {
    return ListLanguageView(this, languages: languages);
  }
}
