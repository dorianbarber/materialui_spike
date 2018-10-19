import React, { Component } from 'react';
import {AppBar, Toolbar, IconButton} from '@material-ui/core/';
import {AccountCircle} from '@material-ui/icons/';
import { withStyles } from '@material-ui/core/styles';
import MenuBar from './components/menubar.js';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <MenuBar />
      </div>
    );
  }
}

export default App;
