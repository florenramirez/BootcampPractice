var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ

  if(matchFunc(startEl)){
    resultSet.push(startEl);
  }

  for (var i=0; i < startEl.children.length;i++){
    var collect = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet =resultSet.concat (collect);

  }
  return resultSet;
  
};
 
// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0]=== '#') return 'id';
  if (selector[0]==='.') return 'class';
  if (selector[0] !== '.' && selector.includes('.')) return 'tag.class';
  if (selector[0] !== '#' && selector[0] !== '.') return 'tag';
}

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function (el){
      return '#'+ el.id === selector;
    }
    
  } else if (selectorType === "class") {
    matchFunction = function (el){
      for (var i=0; i < el.classList.length; i++){
        if ('.' + el.classList[i] ===selector){
          return true;
        }
      }
      return false;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = function (el){
      var tagClass = selector.split('.');
      var tag = tagClass[0];
      var clase = tagClass[1];
      return matchFunctionMaker(tag)(el) && matchFunctionMaker('.'+clase)(el);

    }
        
  } else if (selectorType === "tag") {
    matchFunction = function (el){
      return el.tagName === selector.toUpperCase();
    } 
   
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
