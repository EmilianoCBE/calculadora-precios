import { TotalContext } from '../App';
import { useContext } from "react";
import './TotalDisplay.css'

export const TotalDisplay = () => {

  const {totalCountItem, totalMeters} = useContext(TotalContext)

  const subtotal = totalMeters * 200

  const tax = subtotal * 0.16

  const total = subtotal + tax

  const totalDueToday = total * 0.5

  return (
    <>
      <h2>Summary</h2>
      <div className='totalDisplay-card'>
        <div className='totalDisplay-card-item'>
          <h4>Total items</h4>
          <p>{totalCountItem}</p>
        </div>
        <div className='totalDisplay-card-item'>
          <h4>Total m2</h4>
          <p>{totalMeters.toFixed(2)}</p>
        </div>
        <div className='totalDisplay-card-item'>
          <h4>Subtotal</h4>
          <p>$ {subtotal.toFixed(2)}</p>
        </div>
        <div className='totalDisplay-card-item'>
          <h4>Tax</h4>
          <p>$ {tax.toFixed(2)}</p>
        </div>
        <div className='totalDisplay-card-item'>
          <h4>Total</h4>
          <p>$ {total.toFixed(2)}</p>
        </div>
        <div className='totalDisplay-card-item'>
          <h4>Due today 50%</h4>
          <p>$ {totalDueToday.toFixed(2)}</p>
        </div>
      </div>
    </>
  )
}
