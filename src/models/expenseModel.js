const mongoose = require('mongoose')
const { mongoURI } = require('../utils/config')

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err)
  })

const expenseSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, 'An expense must have a description.'],
  },
  amount: {
    type: Number,
    required: [true, 'An expense must have an amount.'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

const Expense = mongoose.model('Expense', expenseSchema)

module.exports = Expense
