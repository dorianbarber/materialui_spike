import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Modal from '@material-ui/core/Modal';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {AccountCircle, Search} from '@material-ui/icons/';
import '../style/menubar.css';

class MenuAppBar extends React.Component {
  state = {
    searchOpen: false,
    profileOpen: false
  };

  handleSearchOpen = () => {
    this.setState({ searchOpen: true });
  };

  handleSearchClose = () => {
    this.setState({ searchOpen: false });
  };

  render() {
    return (
      <div className='root'>
        <AppBar position="static">
          <Toolbar>
            <Typography className='grow' variant='h6' color='inherit' >
            </Typography>
            <IconButton color='inherit' aria-label='search'>
              <Search onClick={this.handleSearchOpen}/>
            </IconButton>
            <IconButton color="inherit" aria-label="Menu">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Modal
          open={this.state.searchOpen}
          onClose={this.handleSearchClose}
        >
          <div className='paper'>
          </div>
        </Modal>
      </div>
    );
  }
}

export default MenuAppBar;
