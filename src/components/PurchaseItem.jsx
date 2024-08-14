import { useState } from "react"

const PurchaseItem = () => {
  const [message, setMessage]=useState("")
  const handlePurchase=(e)=>{
    e.preventDefault()
    setMessage("You have purchased this item")
  }
  return (
    <div>
      <form onSubmit={handlePurchase}>
        <input
        type="text"
        placeholder="Name"
        />
        <input
        type="text"
        placeholder="Email"
        />
        <input
        type="number"
        placeholder="Credit card number"
        />
      </form>
      <button type="submiit">Purchase</button>
      {message && <p>{message}</p>}
    </div>
  )
}

export default PurchaseItem