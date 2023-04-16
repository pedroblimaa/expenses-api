const express = require('express')
const cors = require('cors')
const app = express()
const expenseRoutes = require('./src/routes')

app.use(express.json())
app.use('/api/v1/expenses',  cors(), expenseRoutes)

const port = 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

module.exports = app
