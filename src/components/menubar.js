import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Modal from '@material-ui/core/Modal';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {AccountCircle, Search} from '@material-ui/icons/';

const styles = {
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
};

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
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant='h6' color='inherit' class={classes.grow}>
            </Typography>
            <IconButton className={classes.menuButton} color='inherit' aria-label='search'>
              <Search onClick={this.handleSearchOpen}/>
            </IconButton>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Modal
          open={this.state.searchOpen}
          onClose={this.handleSearchClose}
        >
          <Typography variant="h6" id="modal-title">
            Text in a modal
          </Typography>
          <Typography variant="subtitle1" id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
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
