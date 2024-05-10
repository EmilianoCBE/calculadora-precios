import { useState, useContext } from 'react';
import './GridItem.css';
import { TotalContext } from '../App';

export const GridItem = ({name, icon}) => {

  const [count, setCount] = useState(0)
  const [totalCountItem, setTotalCountItem] = useContext(TotalContext)

  const handleSum = () => {
    setCount(count + 1)
    setTotalCountItem(totalCountItem + 1)
  }

  const handleSubract = () => {
    if(count > 0) {
      setCount(count - 1)
    }
    if(totalCountItem > 0) {
      setTotalCountItem(totalCountItem - 1)
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
