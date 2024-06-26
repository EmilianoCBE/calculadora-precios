import { ClearButton } from './ClearButton'
import './Content.css'
import { GridContainer } from './GridContainer'
import { TotalDisplay } from './TotalDisplay'

export const Content = () => {
  return (
    <main className='main-container'>
      <div className='content-container'>
        <h1>What items to store?</h1>
        <h4>Select which items you wish to store before moving to your new home. We’ll keep ’em safe!</h4>
        <GridContainer />
        <ClearButton />
        <TotalDisplay />
      </div>
    </main>
  )
}
