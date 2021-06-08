import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import {connect} from 'react-redux'
import * as operations from '../../redux/Contacts/operations'
import * as selectors from '../../redux/Contacts/contacts-selectors'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Style.module.css'




class Form extends Component{
  state = {
    name: '',
    number: ''
  }
    
  handleinput = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value })
  };
      
  handleSubmit = (e) => {
    e.preventDefault();
    const isIncludeName = !!this.props.value.find(contact => contact.name === this.state.name)
    isIncludeName && alert(`${this.state.name} is already in contacts`)
    !isIncludeName && this.props.onSubmit(this.state)
 
    
    this.reset();
  }
  
  
  reset = () => {
    this.setState({ name: '', number: '' })
  }
  
  render() {
    
    return (
      <form onSubmit={this.handleSubmit} className='from_contact'>
        
        <label className={style.label_name}> Name
          <input
            className={style.input_name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleinput}
            value={this.state.name}
          />
        </label> 
        <label className={style.label_number}>Number
          <input
            className='input_tel'
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleinput}
            value={this.state.number}
          />
        </label>
         
        <Button type="submit" variant="success" className={style.input_btn}>Add contact</Button>
      </form>
      

    )
  }

}

Form.propTypes = {
  onSubmit: PropsTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  value: selectors.getItems(state)
})

const mapDispatchToProps = dispatch => ({
  onSubmit: (data) => dispatch(operations.addContact(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Form);