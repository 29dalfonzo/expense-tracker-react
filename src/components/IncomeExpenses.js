import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext)

  const Income = transactions.filter(transaction => transaction.amount > 0).reduce((acc,curr) => acc + curr.amount,0).toFixed(2)
  const Expense = transactions.filter(transaction => transaction.amount < 0).reduce((acc,curr) => acc + curr.amount,0).toFixed(2)


  return (
    <>
    <div>
      <h4>Income</h4>
      <p className="money plus">$ {Income}</p>
    </div>
    <div>
      <h4>Expenses</h4>
      <p className="money minus">$ {Expense}</p>
    </div>
    </>
  )
}
