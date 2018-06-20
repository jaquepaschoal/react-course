'use strict'

const ReactDOMServer = require('react-dom/server');
const Title = require('./title');
const React = require('react');
const $ = require('whacko'); // jquery para funcionar no node

const TitleComponent = ReactDOMServer.renderToStaticMarkup(
  React.createElement(Title)
);

console.log($(TitleComponent).get(0).tagName);