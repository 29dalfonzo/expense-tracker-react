import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'


export const Balance = () => {
  const {transactions} = useContext(GlobalContext)
    const total = transactions.reduce((acc,curr) => acc + curr.amount,0).toFixed(2)

  return (
    <>
      <h2>Balance</h2>
      <h3>$ {total}</h3>
    </>
  )
}
