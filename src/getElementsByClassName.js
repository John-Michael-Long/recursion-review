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
  // var classlist = node.classList;

  var iterateNode = function(node) {
    
    node = node || document.body;
    var classList = node.classList;
    
    if (node === className){
      result.push(node);
    }
    
    classList.forEach(function(elem){
      
    });
    // if has child node 
    // forEach --> recursion
    if (node.childNodes) {
      
      
    } 
  };
  iterateNode(document.body)
  return result;//return result
};
