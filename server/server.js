const express = require('express')
const app = express()

app.use(express.json())

app.get('/api', (req, res) => {
  res.send('API ok !')
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})