import {Component} from 'react'
import ConfigurationController from './components/ConfigurationController'
import ConfigurationContext from './context/ConfigurationContext'

import './App.css'
import Layout from './components/Layout'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  onChangeLeftContent = () => {
    // console.log(event.target.value)
    this.setState(prevState => ({showLeftNavbar: !prevState.showLeftNavbar}))
  }

  onChangeShowContent = () => {
    this.setState(prevState => ({showContent: !prevState.showContent}))
  }

  onChangeRightContent = () => {
    this.setState(prevState => ({
      showRightNavbar: !prevState.showRightNavbar,
    }))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <div className="app-container">
        <ConfigurationContext.Provider
          value={{
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent: this.onChangeShowContent,
            onToggleShowLeftNavbar: this.onChangeLeftContent,
            onToggleShowRightNavbar: this.onChangeRightContent,
          }}
        >
          <ConfigurationController />
          <Layout />
        </ConfigurationContext.Provider>
      </div>
    )
  }
}

export default App
