const contentful = require('contentful')

const client = contentful.createClient({
  space: 'jd4luwtpe1x4',
  accessToken: 'I_0N5uuNPqrTxdeA18UPXEeJbXwg9S-a2WGtbuCcOFY'
})

module.exports = client