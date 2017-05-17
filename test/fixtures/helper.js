const fs = require('fs');
const path = require('path');

function readInputCss(name) {
  return new Promise(res => {
    fs.readFile(path.resolve(path.join(__dirname, 'css/input'), name), 'utf-8', (err, file) => {
      if (!err) res(file);
    });
  });
}

function readExpectedCss(name) {
  return new Promise(res => {
    fs.readFile(path.resolve(path.join(__dirname, 'css/expected'), name), 'utf-8', (err, file) => {
      if (!err) res(file);
    });
  });
}

function readCssFixture(name) {
  return Promise.all([readInputCss(name), readExpectedCss(name)])
    .then(arr => {
      return {
        input: arr[0],
        expected: arr[1],
      };
    });
}

module.exports = {
  readInputCss: readInputCss,
  readExpectedCss: readExpectedCss,
  readCssFixture: readCssFixture,
};
