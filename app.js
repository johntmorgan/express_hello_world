const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
      resolve('Success')
    } else {
      reject('Failed')
    }
  });

  p.then((message) => {
    console.log("This is in the then " + message)
  }).catch((message) => {
    console.log("This is in the catch " + message)
  })

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})