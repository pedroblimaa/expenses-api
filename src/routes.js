const express = require('express')
const router = express.Router()
const expenseController = require('./controllers/expenseController')

router.route('/').post(expenseController.createExpense).get(expenseController.getExpenses)
router.route('/:id').delete(expenseController.deleteExpense)

module.exports = router
