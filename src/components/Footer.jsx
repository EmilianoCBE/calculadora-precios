import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
      <footer>
        <div className='footer-column'>
          <img src="/houseLogo.svg" alt="" />
          <p>It is a long established fact that a reader will be distracted by the readable content of a page whenters.</p>
          <ul className='footer-social'>
            <li><img src="/twitter.svg" alt="Twitter Logo" /></li>
            <li><img src="/facebook.svg" alt="Facebook Logo" /></li>
            <li><img src="/instagram.svg" alt="Instagram Logo" /></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>About us</h3>
          <ul>
            <li>About</li>
            <li>Privacy & Policy</li>
            <li>Terms & Conditions</li>
            <li>Faq</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Navigate</h3>
          <ul>
            <li>How We Work</li>
            <li>Services</li>
            <li>Faq</li>
            <li>Contact</li>
            <li>Free Quote</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact us</h3>
          <ul className='footer-contact'>
            <li>Ricardo Margain 444</li>
            <li>Call: +52 81 1234 5678</li>
            <li>Email: info@challenge.com</li>
            <li>
              <img src="/whatsapp.svg" alt="" />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
