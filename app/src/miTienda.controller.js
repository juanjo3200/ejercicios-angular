(function (app) {
  'use strict';
  var MiTiendaController= function($http, StockService){

    var ctrl =this;
    var articulos = "";
    $http.get('./src/datos.json').then(function(res) {
      articulos = res.data;
    });
    var tienda = new StockService(articulos);
    ctrl.catalogo = tienda.getCatalogo();
    ctrl.comprar= function(indice){
      tienda.comprar(indice);
    };
    ctrl.checkStock= function (indice) {
      return tienda.checkStock(indice);
    }
  }
  MiTiendaController.$inject=["$http","StockService"];
  app.controller("MiTiendaController", MiTiendaController);
})(angular.module('MiTienda'));
