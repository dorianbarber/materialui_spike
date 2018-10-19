import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Modal from '@material-ui/core/Modal';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {AccountCircle, Search} from '@material-ui/icons/';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

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
    const {classes} = this.props;

    return (
      <div className='classes.root'>
        <AppBar position="static">
          <Toolbar>
            <Typography className='classes.grow' variant='h6' color='inherit' >
              Life
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
          <div className='classes.paper'>
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

export default withStyles(styles)(MenuAppBar);
