var express = require('express')
  , logger = require('morgan')
  , app = express()
  , template = require('jade').compileFile(__dirname + '/source/templates/homepage.jade')
  , $ = require('jQuery')

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))
app.use('/source/img', express.static(__dirname + "/source/img"));

app.get('/', function (req, res, next) {
  try {
    $(function(){
      $("#command").typed({
        strings: ["cat lab_readme.txt"],
        typeSpeed: 10,
        callback: function(){ foo(); }
      });

      function foo(){ console.log("Callback");
      $(".readme").delay(300).show(0); }

    });
    template = require('jade').compileFile(__dirname + '/source/templates/homepage.jade')
    var html = template({ title: 'Daniel Koo' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.get('/project', function (req, res, next) {
  try {
    template = require('jade').compileFile(__dirname + '/source/templates/projectinfo.jade')
    var html = template({ title: 'Projects' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})

//Using this for a terminal animation

