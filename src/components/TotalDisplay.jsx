import { TotalContext } from '../App';
import { useContext } from "react";
import './TotalDisplay.css'

export const TotalDisplay = () => {

  const {totalCountItem, totalMeters} = useContext(TotalContext)

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
          <p>{totalMeters}</p>
        </div>
        <div className='totalDisplay-card-item'>
          <h4>Subtotal</h4>
          <p>{totalCountItem}</p>
        </div>
        <div className='totalDisplay-card-item'>
          <h4>Tax</h4>
          <p>{totalCountItem}</p>
        </div>
        <div className='totalDisplay-card-item'>
          <h4>Total</h4>
          <p>{totalCountItem}</p>
        </div>
        <div className='totalDisplay-card-item'>
          <h4>Due today 50%</h4>
          <p>{totalCountItem}</p>
        </div>
      </div>
    </>
  )
}
