//JSON.stringify from scratch

const stringifyJSON = obj => {  

  if (obj === null) {
    return "null";
  } else if (obj === undefined) {
    return '';
  } else if (typeof obj === 'function') {
    return '';
  } else if (Array.isArray(obj)) {
    return stringifyArray(obj);
  } else if (typeof obj === 'object') {
    return stringifyObj(obj);
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else {
    return obj + '';
  }


}

const stringifyArray = arr => {
  let result = "["

  for(let i = 0; i < arr.length; i++) {
    if(i === 0) {
      result += stringifyJSON(arr[i]);
    } else {
      result = result + ',' + stringifyJSON(arr[i]);
    }
  }
  return result + "]";
}

const stringifyObj = obj => {
  let result = "{"
  let keys = Object.keys(obj)

  for(let i = 0; i < keys.length; i++) {

    if( typeof obj[keys[i]] !== 'function' && typeof obj[keys[i]] !== 'undefined' ) {
      result += stringifyJSON(keys[i]) + ":" + stringifyJSON(obj[keys[i]]);
      if(i !== keys.length - 1) {
        result += ','
      }             
    }

  }

  return result += '}'
}

















// var stringifyJSON = function(obj) {
//   //  
//   // conditional statements to handle each datatype 
//   // for non-primative data types need to handle arrays & objects
//   // will use recursion to handle these
//   var resultString = "";
  
  
 
//   if(obj == null){
//     return "null";
//   }
//   if(typeof(obj) === 'string'){
//     return '"'+ obj + '"';
//   }
//   if(typeof(obj) === 'number' || typeof(obj) === 'boolean'){
//     return "" + obj;
//   }
//   if(Array.isArray(obj)){
//     if(obj.length === 0){
//       return "[]";
//     }
//     obj.forEach(function(element, index){
//       if(index === 0){
//         resultString += stringifyJSON(element);
//       }else{
//         resultString += "," + stringifyJSON(element);
//       }
      
//     })
//   return "[" + resultString + "]";
//   }
//   if(obj instanceof Object){
//     for(var key in obj){
//       if(obj[key] === undefined || obj[key] instanceof Function){
//           continue;
//         }
//       if(Object.keys(obj)[0] === key){
//         resultString += stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
//       }else{
//         resultString += "," + stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
//       }
//     }
//     return "{" + resultString + "}";
//   }
  
// };
