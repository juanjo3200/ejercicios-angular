(function (app) {

  function factory($http){
     return {
         getCatalogo : function(){
            return  $http.get('./src/datos.json');
         },
         comprar : function(articulo){
           articulo.stock-=1;
         },
         checkStock : function(articulo){
           return (articulo.stock>0);
         }
         ,
         labelStock: function(articulo){
           if (articulo.stock>15) {
             return "label label-success";
            } else {
              if (articulo.stock>0) {
                return "label label-warning";
              } else {
                return "label label-danger";
              }
            }
          },
          stockMssg: function (articulo) {
            if (articulo.stock>15) {
              return "nº unidades para 15 o más unidades";
             } else {
               if (articulo.stock>0) {
                 return "nº unidades para menos de 15 unidades";
               } else {
                 return "Sin Stock";
               }
             }
          },
          aplicarDescuento: function(articulo){
            var precio = articulo.precio;
            if(typeof articulo.descuento != "undefined" && articulo.descuento>0){
              precio= precio- (articulo.descuento*precio)/100;
            }
            return precio;
          }
     };
 }
 factory.$inject=['$http'];
 app.factory('StockFactory',factory);


})(angular.module('MiTienda'));
