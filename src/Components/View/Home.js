import React from 'react';
import { connect } from 'react-redux';
import * as authSelectors from '../../redux/Auth/auth-selectors'


const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomeView = ({name,isAuthenticated}) => (
  <div style={styles.container}>
    
    {isAuthenticated?<h1 style={styles.title}>
      Hello, {name} 
      
    </h1>:<h1 style={styles.title}>Please login</h1>}
    
  </div>
);
const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
  isAuthenticated: authSelectors.getIsAuthenticated(state),
})


export default connect(mapStateToProps)(HomeView) ;