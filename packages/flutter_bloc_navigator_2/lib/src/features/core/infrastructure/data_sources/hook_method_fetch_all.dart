import 'package:dartz/dartz.dart';
import 'package:dio/dio.dart';

abstract class HookMethodFetchAll<T> {
  Future<Dio> onMiddlewareFetchAll();
  Future<Either<Exception, T>> fetchAll();
  Future<T> onParserFetchAll(dynamic json);
}
