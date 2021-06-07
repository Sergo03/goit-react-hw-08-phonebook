import React from 'react';
import { connect } from 'react-redux';
import * as authSelectors from '../../redux/Auth/auth-selectors'
import * as authOperations from '../../redux/Auth/auth-operations'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ name, onLogout }) => (
  <div style={styles.container}>
    <span style={styles.name}>Welcome, {name}</span>
    <Button type="button" variant="dark" onClick={onLogout}>
      Logout
    </Button>
  </div>
);

const mapStateToProps = (state) => ({
  name:authSelectors.getUserName(state)
})

const mapDispatchToProps =  {
  onLogout:authOperations.logout
}

export default connect(mapStateToProps,mapDispatchToProps)(UserMenu);