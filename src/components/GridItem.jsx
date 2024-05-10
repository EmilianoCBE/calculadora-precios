import { useState } from 'react';
import './GridItem.css';

export const GridItem = ({name, icon, price}) => {

  const [count, setCount] = useState(0)

  const handleSum = () => setCount(count + 1)
  const handleSubract = () => {
    if(count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <div className="gridItem-container">
        <div className="gridItem-card">
          <img src={icon} alt={name} />
          <p>{name}</p>
        </div>
        <div className="gridItem-count">
          <button className="gridItem-count-minus" onClick={handleSubract}>
            -
          </button>
          <div className="gridItem-count-display">
            {count}
          </div>
          <button className="gridItem-count-plus" onClick={handleSum}>
            +
          </button>
        </div>
      </div>
    </>
  )
}
