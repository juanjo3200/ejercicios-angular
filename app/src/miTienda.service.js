(function (app) {
  'use strict';

  var StockService= function(articulos){
    var service = this;
    var catalogo = articulos;

      service.getCatalogo= function (){
        return service.catalogo;
      };
      service.comprar= function(indice){
        service.catalogo[indice].stock-=1;
      };
      service.checkStock= function(indice){
        return (service.catalogo[indice].stock>0);
      };
    }
  app.service("StockService", StockService);
})(angular.module('MiTienda'));
