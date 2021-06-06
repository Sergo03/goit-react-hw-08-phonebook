import React from 'react';
import { connect } from 'react-redux';
import * as authSelectors from '../../redux/Auth/auth-selectors'
import * as authOperations from '../../redux/Auth/auth-operations'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ name, onLogout }) => (
  <div style={styles.container}>
    <span style={styles.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  name:authSelectors.getUserName(state)
})

const mapDispatchToProps =  {
  onLogout:authOperations.logout
}

export default connect(mapStateToProps,mapDispatchToProps)(UserMenu);