import 'dart:io';

import 'package:dio/dio.dart';
import 'package:injectable/injectable.dart';

@module
abstract class DioModule {
  @lazySingleton
  Dio get dio => Dio(
        BaseOptions(
          connectTimeout: 5000,
          receiveTimeout: 5000,
          headers: <String, dynamic>{
            HttpHeaders.contentTypeHeader: 'application/json; charset=UTF-8',
            HttpHeaders.acceptHeader: '*/*',
            HttpHeaders.cacheControlHeader: 'no-cache',
          },
          validateStatus: (status) {
            return status! < 500;
          },
        ),
      );
}
