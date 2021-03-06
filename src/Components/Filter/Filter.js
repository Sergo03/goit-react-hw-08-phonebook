import React from 'react';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux'
import * as actions from '../../redux/Contacts/action'
import * as selectors from '../../redux/Contacts/contacts-selectors'


const Filter = ({ value, onChange }) => {
  return (
    <label className='label}'> Find contacts by name
      <input type="text" value={value} onChange={onChange} className='input' />
    </label>
            
  )
}

Filter.propTypes = {
  onChange: PropsTypes.func.isRequired
}
    
const mapStateToProps = state => ({
  value: selectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange:(e)=>dispatch(actions.changeFilter(e.currentTarget.value))
})




export default connect(mapStateToProps,mapDispatchToProps)(Filter);