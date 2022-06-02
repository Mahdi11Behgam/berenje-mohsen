// index.js
import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

// /** 
// index.js
app.post("/user", async (req, res) => {
  const result = await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.password,
    },
  })
  res.json(result)
})
// */
export default {
  path: '/api',
  handler: app
}
