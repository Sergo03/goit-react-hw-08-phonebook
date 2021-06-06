import React from 'react';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux'
import * as operations from '../../redux/Contacts/operations'
import style from './Style.module.css'
import * as selectors from '../../redux/Contacts/contacts-selectors'

const Render = ({ value, onDeleteContact }) => {

    return (
         <ul>
        {value.map((contact) => {
            return <li className={style.contact_item} key={contact.id}>{contact.name}: {contact.number} <button type='button' className={style.btn_del} onClick={()=>onDeleteContact(contact.id) }>delete</button></li>
          })}
        </ul>
    )
}

Render.propTypes = {
  value: PropsTypes.array.isRequired,
  onDeleteContact:PropsTypes.func.isRequired
}

const mapStateToProps = (state) => ({
   value:selectors.getVisibalContacts(state)
})


const mapDispatchToProps = dispatch => ({
  onDeleteContact:(id)=>dispatch(operations.deleteContact(id))
})


export default connect(mapStateToProps,mapDispatchToProps)(Render);