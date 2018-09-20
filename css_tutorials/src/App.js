import React, { Component } from 'react';
// import Grid from './components/Grid/Grid';
// import Grid from './components/Grid_Auto_Fit_Min_Max/Grid';
// import Grid from './components/Grid_Implicit_Rows/Grid';
// import Grid from './components/Grid_Images/Grid';
// import Grid from './components/Grid_Named_Lines/Grid';
// import Grid from './components/Grid_Justify_Align_Content/Grid';
// import Grid from './components/Grid_Justify_Align_Items/Grid';
// import Grid from './components/Grid_Auto_Fit_VS_Auto_Fill/Grid';
// import Grid from './components/Grid_Article_Layout/Grid';
// import Grid from './components/Grid_Flexbox/Grid';

// import Flexbox from './components/Flexbox/Flexbox';
// import Flexbox from './components/Flexbox_Navbar/Flexbox';
import Flexbox from './components/Flexbox_Layout_Images/Flexbox';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Grid /> */}
        <Flexbox />
      </div>
    );
  }
}

export default App;
