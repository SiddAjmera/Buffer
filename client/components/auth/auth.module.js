'use strict';

angular.module('bufferApp.auth', [
  'bufferApp.constants',
  'bufferApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
