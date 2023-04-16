const Expense = require('../models/expenseModel')

const sendError = (err, res) => {
  res.status(400).json({
    status: 'fail',
    message: err.message,
  })
}

exports.createExpense = async (req, res) => {
  try {
    const expense = await Expense.create(req.body)

    res.status(201).json({
      status: 'success',
      data: {
        expense,
      },
    })
  } catch (err) {
    sendError(err, res)
  }
}

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find()

    res.status(200).json({
      status: 'success',
      results: expenses.length,
      data: {
        expenses,
      },
    })
  } catch (err) {
    sendError(err, res)
  }
}

exports.deleteExpense = async (req, res) => {
  const { id } = req.params

  try {
    const expense = await Expense.findByIdAndDelete(id)

    if (!expense) {
      res.status(404).json({
        status: 'fail',
        message: 'No expense found with that ID',
      })
    }

    res.status(204).json({
      status: 'success',
      data: null,
    })
  } catch (err) {
    sendError(err, res)
  }
}
