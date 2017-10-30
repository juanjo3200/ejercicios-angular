(function (app) {
  'use strict';
  var MiTiendaController= function(StockFactory){

    var ctrl =this;
    StockFactory.getCatalogo().then(function(res) {
      ctrl.catalogo = res.data;
    });
    ctrl.comprar=StockFactory.comprar;
    ctrl.checkStock= StockFactory.checkStock;
    ctrl.stockClass= StockFactory.stockClass;
    ctrl.labelStock= StockFactory.labelStock;
    ctrl.stockMssg= StockFactory.stockMssg;
    ctrl.aplicarDescuento = StockFactory.aplicarDescuento;
  }
  MiTiendaController.$inject=["StockFactory"];
  app.controller("MiTiendaController", MiTiendaController);
})(angular.module('MiTienda'));
