// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="center-container">
              <h1>Left Navbar Menu</h1>
              <ul>
                <li>
                  <p>Item1</p>
                </li>
                <li>
                  <p>Item1</p>
                </li>

                <li>
                  <p>Item1</p>
                </li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="left-container">
              <h1>Content</h1>
              <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
            </div>
          )}

          {showRightNavbar && (
            <div className="right-container">
              <h1>Right Navbar</h1>
              <p>Ad 1</p>
              <p>Ad 2</p>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
