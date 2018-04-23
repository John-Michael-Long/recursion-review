// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //  
  // conditional statements to handle each datatype 
  // for non-primative data types need to handle arrays & objects
  // will use recursion to handle these
  var resultString = "";
  
  
 
  if(obj == null){
    return "null";
  }
  if(typeof(obj) === 'string'){
    return '"'+ obj + '"';
  }
  if(typeof(obj) === 'number' || typeof(obj) === 'boolean'){
    return "" + obj;
  }
  if(Array.isArray(obj)){
    if(obj.length === 0){
      return "[]";
    }
    obj.forEach(function(element, index){
      if(index === 0){
        resultString += stringifyJSON(element);
      }else{
        resultString += "," + stringifyJSON(element);
      }
      
    })
  return "[" + resultString + "]";
  }
  if(obj instanceof Object){
    for(var key in obj){
      if(obj[key] === undefined || obj[key] instanceof Function){
          continue;
        }
      if(Object.keys(obj)[0] === key){
        resultString += stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
      }else{
        resultString += "," + stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
      }
    }
    return "{" + resultString + "}";
  }
  
};
