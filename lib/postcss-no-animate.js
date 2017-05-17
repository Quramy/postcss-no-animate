const postcss = require('postcss');
// const valueParser = require('postcss-value-parser');

function walk(node) {
  if (node.type === 'decl') {
    if (node.prop === 'transition-duration' || node.prop === 'transition-delay') {
      node.value = '0';
    } else if (node.prop === 'transition') {
      // const parsedValue = valueParser(node.value);
      node.cloneAfter({ prop: 'transition-delay', value: '0' });
      node.cloneAfter({ prop: 'transition-duration', value: '0' });
    } else if (node.prop === 'animation-iteration-count') {
      node.value = '1';
    } else if (node.prop === 'animation-delay' || node.prop === 'animation-duration') {
      node.value = '0';
    } else if (node.prop === 'animation') {
      node.cloneAfter({ prop: 'animation-delay', value: '0' });
      node.cloneAfter({ prop: 'animation-duration', value: '0' });
      node.cloneAfter({ prop: 'animation-iteration-count', value: '1' });
    }
  }
  if (!node.nodes || !node.nodes.length) {
    return;
  }
  node.nodes.forEach(childNode => walk(childNode));
}

function noAnimate(options) {
  return (root, result) => {
    walk(root);
  };
}

module.exports = postcss.plugin('postcss-no-animate', noAnimate);
