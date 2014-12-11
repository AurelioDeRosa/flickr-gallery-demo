(function(document, window) {
   'use strict';

   function buildUrl(url, parameters){
      var queryString = '';

      for(var key in parameters) {
         if (parameters.hasOwnProperty(key)) {
            queryString += encodeURIComponent(key) + '=' + encodeURIComponent(parameters[key]) + '&';
         }
      }

      if (queryString.lastIndexOf('&') === queryString.length - 1){
         queryString = queryString.substring(0, queryString.length - 1);
      }

      return url + '?' + queryString;
   }

   function extend(object) {
      for(var i = 1; i < arguments.length; i++) {
          for(var key in arguments[i]) {
             if (arguments[i].hasOwnProperty(key)) {
                object[key] = arguments[i][key];
             }
          }
      }

      return object;
   }

   window.Utility = {
      buildUrl: buildUrl,
      extend: extend
   };
})(document, window);