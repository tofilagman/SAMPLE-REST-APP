const expressJSDocSwagger = require('express-jsdoc-swagger');

const options = {
  info: {
    version: '1.0.0',
    title: 'Sample API for Gen AI',
    license: {
      name: 'MIT',
    },
  }, 
  baseDir: __dirname, 
  filesPattern: './**/*.js',
  swaggerUIPath: '/api-docs', 
  exposeSwaggerUI: true
};

module.exports = (app) => {
  expressJSDocSwagger(app)(options);
}