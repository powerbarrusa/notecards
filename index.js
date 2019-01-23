const express = require('express')
const app = express()
const port = 3000

const env = 'development'
const config = require('./knexfile')[env]
const knex = require('knex')(config)

const sql = knex('notecards').toString()
console.log(sql)

app.get('/', (req, res, next) => {
  knex.select('*').from('test')
  // knex('methods') - secret shorthand
  .then((rows) => {
    res.send(rows)
  })
  .catch((err) => {
    next(err)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))