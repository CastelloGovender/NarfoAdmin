import React, { Component } from 'react'
import TitleBar from 'components/TitleBar/TitleBar';
import UnderConstruction from 'views/UnderConstruction/UnderConstruction';
import Menu from 'components/Menu/Menu';
import './App.scss';
export default class App extends Component {

  getMenuItems = () => {
    return [
      {
        label: "One",
        view: <UnderConstruction label="One"/>
      },
      {
        label: "Two",
        view: <UnderConstruction label="Two"/>
      }
    ]
  }

  render() {
    const menuItems = this.getMenuItems()
    
    return (
      <div className="App">
        <TitleBar/>
        <div className="grow">
          <Menu menuItems={menuItems}/>
        </div>
      </div>
    )
  }
}
