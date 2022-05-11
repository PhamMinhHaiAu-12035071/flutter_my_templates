import 'dart:io';

import 'package:dio/dio.dart';
import 'package:injectable/injectable.dart';

@module
abstract class DioModule {
  @injectable
  Dio get dio => Dio(
        BaseOptions(
          connectTimeout: 30000,
          receiveTimeout: 30000,
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
