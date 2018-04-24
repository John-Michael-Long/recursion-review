// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  // does document.body exist
  // if node = className, return node
  // iterate through the node.children
  var result = [];

  var iterateNode = function(node) {
    
    var classlist = node.classList;
    
    if (node.className && node.className.includes(className)) {
      result.push(node);
    }

    if (node.childNodes) {   

      for (var i = 0; i < node.childNodes.length; i++) {
        if (node.childNodes[i]) {

          iterateNode(node.childNodes[i]);
        }
      }
    
    }
  };
  iterateNode(document.body);
 
  return result;
};
