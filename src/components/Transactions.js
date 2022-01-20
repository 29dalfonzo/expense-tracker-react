import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Transactions = () => {

  const {transactions, deleteTransaction} = useContext(GlobalContext)


  return (
    <>
    <h2>History</h2>
    <ul className="list">
      {transactions.map(transaction => (
        <li key={transaction.id}>
          {transaction.text}
          <span>
            {transaction.amount < 0 ? '-' : '+'}
            {Math.abs(transaction.amount)}
          </span>
          <button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>
            x
          </button>
        </li>
      ))}

    </ul>
      
    </>
  )
}
