// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// InjectableConfigGenerator
// **************************************************************************

import 'package:dio/dio.dart' as _i3;
import 'package:get_it/get_it.dart' as _i1;
import 'package:injectable/injectable.dart' as _i2;
import 'package:logger/logger.dart' as _i8;

import '../../app_bloc_observer.dart' as _i9;
import '../../features/core/flavors/flavor_config.dart' as _i6;
import '../../features/core/flavors/impl/dev_flavor_config.dart' as _i7;
import '../../features/templates_ui/ticket_challenge/api/event_api.dart' as _i4;
import '../../features/templates_ui/ticket_challenge/api/impl/dev_event_api.dart'
    as _i5;
import '../../features/templates_ui/ticket_challenge/application/event_facade_service.dart'
    as _i14;
import '../../features/templates_ui/ticket_challenge/application/impl/dev_event_facade_service.dart'
    as _i15;
import '../../features/templates_ui/ticket_challenge/infrastructure/data_sources/event_remote_data_provider.dart'
    as _i10;
import '../../features/templates_ui/ticket_challenge/infrastructure/data_sources/impl/dev_event_remote_data_provider.dart'
    as _i11;
import '../../features/templates_ui/ticket_challenge/infrastructure/repositories/event_repository.dart'
    as _i12;
import '../../features/templates_ui/ticket_challenge/infrastructure/repositories/impl/dev_event_repository.dart'
    as _i13;
import 'register_modules/dio_module.dart' as _i16;
import 'register_modules/logger_module.dart' as _i17;

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
  gh.lazySingleton<_i3.Dio>(() => dioModule.dio);
  gh.singleton<_i4.EventAPI>(_i5.DevEventAPI(), registerFor: {_dev, _test});
  gh.singleton<_i6.FlavorConfig>(_i7.DevFlavorConfig(),
      registerFor: {_dev, _test});
  gh.singleton<_i8.Logger>(loggerModule.logger);
  gh.factory<_i9.AppBlocObserver>(
      () => _i9.AppBlocObserver(logger: get<_i8.Logger>()));
  gh.singleton<_i10.EventRemoteDataProvider>(
      _i11.DevEventRemoteDataProvider(
          config: get<_i6.FlavorConfig>(), dio: get<_i3.Dio>()),
      registerFor: {_dev, _test});
  gh.singleton<_i12.EventRepository>(
      _i13.DevEventRepository(
          eventRemoteDataProvider: get<_i10.EventRemoteDataProvider>()),
      registerFor: {_dev, _test});
  gh.singleton<_i14.EventFacadeService>(
      _i15.DevEventFacadeService(repository: get<_i12.EventRepository>()),
      registerFor: {_dev, _test});
  return get;
}

class _$DioModule extends _i16.DioModule {}

class _$LoggerModule extends _i17.LoggerModule {}
