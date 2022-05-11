// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// InjectableConfigGenerator
// **************************************************************************

import 'package:dio/dio.dart' as _i3;
import 'package:get_it/get_it.dart' as _i1;
import 'package:injectable/injectable.dart' as _i2;
import 'package:logger/logger.dart' as _i7;

import '../../app_bloc_observer.dart' as _i8;
import '../../features/core/flavors/flavor_config.dart' as _i5;
import '../../features/core/flavors/impl/dev_flavor_config.dart' as _i6;
import '../../features/templates_ui/ticket_challenge/application/event_facade_service.dart'
    as _i13;
import '../../features/templates_ui/ticket_challenge/application/impl/dev_event_facade_service.dart'
    as _i14;
import '../../features/templates_ui/ticket_challenge/infrastructure/data_sources/event_remote_data_provider.dart'
    as _i9;
import '../../features/templates_ui/ticket_challenge/infrastructure/data_sources/impl/dev_event_remote_data_provider.dart'
    as _i10;
import '../../features/templates_ui/ticket_challenge/infrastructure/json_parsers/event_parser.dart'
    as _i4;
import '../../features/templates_ui/ticket_challenge/infrastructure/repositories/event_repository.dart'
    as _i11;
import '../../features/templates_ui/ticket_challenge/infrastructure/repositories/impl/dev_event_repository.dart'
    as _i12;
import 'register_modules/dio_module.dart' as _i15;
import 'register_modules/logger_module.dart' as _i16;

const String _dev = 'dev';
const String _test = 'test';
// ignore_for_file: unnecessary_lambdas
// ignore_for_file: lines_longer_than_80_chars
/// initializes the registration of provided dependencies inside of [GetIt]
_i1.GetIt $initGetIt(_i1.GetIt get,
    {String? environment, _i2.EnvironmentFilter? environmentFilter}) {
  final gh = _i2.GetItHelper(get, environment, environmentFilter);
  final dioModule = _$DioModule();
  final loggerModule = _$LoggerModule();
  gh.factory<_i3.Dio>(() => dioModule.dio);
  gh.singleton<_i4.EventParser>(_i4.EventParser(), registerFor: {_dev, _test});
  gh.singleton<_i5.FlavorConfig>(_i6.DevFlavorConfig(),
      registerFor: {_dev, _test});
  gh.singleton<_i7.Logger>(loggerModule.logger);
  gh.factory<_i8.AppBlocObserver>(
      () => _i8.AppBlocObserver(logger: get<_i7.Logger>()));
  gh.singleton<_i9.EventRemoteDataProvider>(
      _i10.DevEventRemoteDataProvider(
          config: get<_i5.FlavorConfig>(),
          dio: get<_i3.Dio>(),
          parser: get<_i4.EventParser>()),
      registerFor: {_dev, _test});
  gh.singleton<_i11.EventRepository>(
      _i12.DevEventRepository(
          eventRemoteDataProvider: get<_i9.EventRemoteDataProvider>()),
      registerFor: {_dev, _test});
  gh.singleton<_i13.EventFacadeService>(
      _i14.DevEventFacadeService(repository: get<_i11.EventRepository>()),
      registerFor: {_dev, _test});
  return get;
}

class _$DioModule extends _i15.DioModule {}

class _$LoggerModule extends _i16.LoggerModule {}
