import 'package:flutter/widgets.dart';
import 'package:flutter_bloc_navigator_2/src/features/core/domain/entities/entity.dart';

@immutable
abstract class Model extends Entity {
  const Model(String itemId) : super(itemId);
}
