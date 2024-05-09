import './Header.css'

export const Header = () => {
  return (
    <div className="header">
      <header> 
        <img src="/houseLogo.svg" alt="" />
        <ul>
          <li><a href="#">How we work</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Free Quote</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </header>
    </div>
  )
}