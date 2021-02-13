require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { connect } = require('./src/db')
const userRouter = require('./src/routes/user')
const teamRouter = require('./src/routes/team')
const leagueRouter = require('./src/routes/league')

const port = process.env.PORT || 8000
const app = express()
connect()

app.use(express.json())
app.use(cors())

app.use('/users', userRouter)
app.use('/teams', teamRouter)
app.use('leagues', leagueRouter)

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
