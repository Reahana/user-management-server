const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com' },
    { id: 2, name: 'Sabnoon', email: 'sabnoon@gmail.com' },
    { id: 3, name: 'Sabila', email: 'sabila@gmail.com' },
]

app.get('/', (req, res) => {
  res.send('User Management server is running')
})
app.get('/users', (req, res) =>{
    res.send(users);
})

app.listen(port, () => {
  console.log(`User Management server listening on port ${port}`)
})