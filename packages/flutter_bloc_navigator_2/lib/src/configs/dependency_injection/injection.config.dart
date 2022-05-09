// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// InjectableConfigGenerator
// **************************************************************************

import 'package:get_it/get_it.dart' as _i1;
import 'package:injectable/injectable.dart' as _i2;
import 'package:logger/logger.dart' as _i3;

import '../../app_bloc_observer.dart' as _i4;
import 'register_modules/logger_module.dart'
    as _i5; // ignore_for_file: unnecessary_lambdas

// ignore_for_file: lines_longer_than_80_chars
/// initializes the registration of provided dependencies inside of [GetIt]
_i1.GetIt $initGetIt(_i1.GetIt get,
    {String? environment, _i2.EnvironmentFilter? environmentFilter}) {
  final gh = _i2.GetItHelper(get, environment, environmentFilter);
  final loggerModule = _$LoggerModule();
  gh.singleton<_i3.Logger>(loggerModule.logger);
  gh.factory<_i4.AppBlocObserver>(
      () => _i4.AppBlocObserver(logger: get<_i3.Logger>()));
  return get;
}

class _$LoggerModule extends _i5.LoggerModule {}
