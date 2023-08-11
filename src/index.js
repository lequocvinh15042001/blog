const express = require('express') //import bằng thư viện require
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars').engine
// import { engine } from 'express-handlebars'
const app = express() //instance của dependence
const port = 3000; // cổng

//cấu hình file tĩnh img
app.use(express.static(path.join(__dirname, 'resources/public')))

//dùng middleware
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//HTTP logger
app.use(morgan('combined'))

//template engine

app.engine('hbs', handlebars({
  extname: '.hbs' //sửa lại đuôi .handlebars --> .hbs
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

//
app.get('/', (req, res) => { //phương thức GET
  res.render('home');
})

app.get('/news', (req, res) => { //phương thức GET
  console.log(req.query.q)
  res.render('news');
})

app.post('/search', (req, res) => { //phương thức POST
  console.log(req.body)
  res.send('');
})

app.get('/search', (req, res) => { //phương thức GET
  console.log(req.query.q)
  res.render('search');
})


//template engines (handlebars): Dùng để tách file,
// viết file code gọn gàng, không viết dưới dạng string --> Express Handlebars
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
