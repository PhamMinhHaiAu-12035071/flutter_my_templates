import 'package:dio/dio.dart';
import 'package:injectable/injectable.dart';

@module
abstract class DioModule {
  @Named('BaseUrl')
  String get baseURL => 'https://reqres.in/';

  @lazySingleton
  Dio dio(@Named('BaseUrl') String baseUrl) => Dio(
        BaseOptions(
          baseUrl: baseUrl,
          connectTimeout: 5000,
          receiveTimeout: 5000,
        ),
      );
}
