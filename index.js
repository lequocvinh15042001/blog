const express = require('express') //import bằng thư viện require
const app = express() //instance của dependence
const port = 3000 // cổng

app.get('/', (req, res) => { //phương thức GET
    res.send("Hello Vinh")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
