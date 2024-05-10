import { TotalContext } from '../App';
import { useContext } from "react";
import './ClearButton.css'

export const ClearButton = () => {

  const {setTotalMeters, setTotalCountItem} = useContext(TotalContext)

  const handleClear = () => {
    setTotalMeters(0)
    setTotalCountItem(0)
  }

  return (
    <div className="clearButton-button">
      <button onClick={handleClear}>
        Clear
      </button>
    </div>
  )
}
