import React from 'react'
import { useParams } from 'react-router-dom'

const Invoice = () => {

    const {invoiceId} = useParams()

    console.log(invoiceId)

  return (
    <>
    <div>Invoice</div>
    <p>Invoice id is {invoiceId} </p>
    </>
  )
}

export default Invoice