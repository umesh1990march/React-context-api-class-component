// Write your code h
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeShowContent = () => {
        onToggleShowContent()
      }

      const onChangeShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <>
          <div className="header">
            <h1>Layout</h1>
            <div>
              <input
                type="checkbox"
                id="left-content"
                checked={showContent}
                value={showContent}
                onChange={onChangeShowContent}
              />
              <label htmlFor="left-content">Content</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="center-content"
                checked={showLeftNavbar}
                value={showLeftNavbar}
                onChange={onChangeShowLeftNavbar}
              />
              <label htmlFor="center-content">Left Navbar</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="right-content"
                checked={showRightNavbar}
                value={showRightNavbar}
                onChange={onChangeShowRightNavbar}
              />
              <label htmlFor="right-content">Right Navbar</label>
            </div>
          </div>
        </>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
