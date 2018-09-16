import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import BackDrop from '../BackDrop/BackDrop';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      sideDrawerOpen: false
    };
    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
    this.backDropClickHandler = this.backDropClickHandler.bind(this);
  }

  drawerToggleClickHandler() {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  }

  backDropClickHandler() {
    this.setState({sideDrawerOpen: false});
  }
  
  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler}/>;
    }
    return (
      <div style={{height: 100 + '%'}}>
        <Navbar drawerToggleClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backDrop}
        
        <Route path='/' exact component={Content} />
        <Route path='/content' component={Content} />
                
        <Footer />    
        
      </div>
    );
  }
}

export default App;
