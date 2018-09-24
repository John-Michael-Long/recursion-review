// getElementsByClassName from scratch:

const getElementsByClassName = (className, node = document.body) => {

  let result = [];

  if (node.className && node.className.includes(className)) {
    result.push(node);
  }

  node.childNodes.forEach( node => {
    result = result.concat(getElementsByClassName(className, node));
  })

  return result;
};