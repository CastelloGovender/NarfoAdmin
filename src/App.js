import React, { Component } from 'react'
import {NavBar, Menu} from 'components';
import UnderConstruction from 'views/UnderConstruction/UnderConstruction';
import MyProfile from 'views/MyProfile/MyProfile';
import { Activities, Courses, Docs, Endorsements, Logout, Profile, Reminder, Sales, Status} from 'assets/svg'
import './App.scss';

export default class App extends Component {

  getMenuItems = () => {
    return [
      {
        label: "My profile",
        icon: Profile,
        view: <MyProfile/>
      },
      {
        label: "Sale commission",
        icon: Sales,
        view: <UnderConstruction label="Sale commission"/>
      },
      {
        label: "Activities",
        icon: Activities,
        view: <UnderConstruction label="Activities"/>
      },
      {
        label: "Endorsements",
        icon: Endorsements,
        view: <UnderConstruction label="Endorsements"/>
      },
      {
        label: "License reminder",
        icon: Reminder,
        view: <UnderConstruction label="License reminder"/>
      },
      {
        label: "Documents",
        icon: Docs,
        view: <UnderConstruction label="Documents"/>
      },
      {
        label: "Courses",
        icon: Courses,
        view: <UnderConstruction label="Courses"/>
      },
      {
        label: "Dedicated status",
        icon: Status,
        view: <UnderConstruction label="Dedicated status"/>
      },
      {
        label: "Logout",
        icon: Logout,
        view: <UnderConstruction label="Logout"/>
      }
    ]
  }

  getNavItems = () => {
    return [
      {
        label: "Home"
      },
      {
        label: "Firearm owners"
      },
      {
        label: "Hunting"
      },
      {
        label: "Sports shooting"
      },
      {
        label: "Dedicated status"
      },
    ]
  }

  render() {
    const navItems = this.getNavItems()
    const menuItems = this.getMenuItems()
    
    return (
      <div className="App">
        <NavBar items={navItems}/>
        <div className="main grow">
          <Menu menuItems={menuItems}/>
        </div>
      </div>
    )
  }
}
