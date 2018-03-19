/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${divergent}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ir a una nueva dirección URL en una nueva ventana
         // (sustituya "_blank" por el atributo de destino correspondiente)
         window.open("http://www.amazon.com/dp/0062024027/ref=cm_sw_su_dp?tag=epicreads-20", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${insurgent}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ir a una nueva dirección URL en una nueva ventana
         // (sustituya "_blank" por el atributo de destino correspondiente)
         window.open("http://www.amazon.com/dp/0062024043/ref=cm_sw_su_dp?tag=epicreads-20", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${allegiant}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ir a una nueva dirección URL en una nueva ventana
         // (sustituya "_blank" por el atributo de destino correspondiente)
         window.open("http://www.amazon.com/dp/006202406X/ref=cm_sw_su_dp?tag=epicreads-20", "_blank");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         // introducir código aquí
         sym.play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pack3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ir a una nueva dirección URL en una nueva ventana
         // (sustituya "_blank" por el atributo de destino correspondiente)
         window.open("http://www.amazon.com/Divergent-Complete-Box-Veronica-Roth/dp/0062278789/ref=sr_1_1?s=books&ie=UTF8&qid=1421821205&sr=1-1&keywords=divergent+trilogy&pebp=1421821208858&peasin=62278789", "_blank");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "booksedge");