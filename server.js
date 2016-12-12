var express = require('express')
  , logger = require('morgan')
  , app = express()
  , template = require('jade').compileFile(__dirname + '/source/templates/homepage.jade')

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res, next) {
  try {
    template = require('jade').compileFile(__dirname + '/source/templates/homepage.jade')
    var html = template({ title: 'Daniel Koo' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.get('/contact', function (req, res, next) {
  try {
    template = require('jade').compileFile(__dirname + '/source/templates/contactinfo.jade')
    var html = template({ title: 'Conatct Me' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})



app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})
