const React = require('react')
const ReactDOMServer = require('react-dom/server')
const assert = require('node:assert')
const App = require('../App').default

describe('App', function () {
  it('renders HTML', function() {
    const html = ReactDOMServer.renderToString(<App />)
    assert.match(html, /Hello Express &amp; React!/)
  })
})
