(function (app) {
  'use strict';
  var MiTiendaController= function($http){

    var ctrl =this;

    $http.get('./src/datos.json').then(function(res) {
      ctrl.catalogo = res.data;
    });
    ctrl.comprar= function(indice){
      ctrl.catalogo[indice].stock-=1;
    };
    ctrl.checkStock= function (indice) {
      return (ctrl.catalogo[indice].stock>0);
    }
  }
  MiTiendaController.$inject=["$http"];
  app.controller("MiTiendaController", MiTiendaController);
})(angular.module('MiTienda'));
