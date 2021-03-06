import React from 'react';
import PropTypes from 'prop-types';
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
            <Typography variant="h6" id="modal-title">
              Text in a modal
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </div>
        </Modal>

        {/* {auth && (
          <div>
          <IconButton
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
          >
          <AccountCircle />
          </IconButton>
          <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
          }}
          transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
          }}
          open={open}
          onClose={this.handleClose}
          >
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          </Menu>
          </div>
            )} */}

      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default MenuAppBar;
