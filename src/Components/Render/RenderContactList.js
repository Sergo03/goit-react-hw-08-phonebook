import React from 'react';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux'
import * as operations from '../../redux/Contacts/operations'
import style from './Style.module.css'
import * as selectors from '../../redux/Contacts/contacts-selectors'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Render = ({ value, onDeleteContact }) => {

    return (
         <ul className={style.list_render}>
        {value.map((contact) => {
            return <li className={style.contact_item} key={contact.id}>{contact.name}: {contact.number} <Button type='button' className={style.btn_del} onClick={()=>onDeleteContact(contact.id) }variant="danger">delete</Button></li>
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