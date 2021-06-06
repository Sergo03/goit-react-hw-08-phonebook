import React, { Component } from 'react';
import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import Render from '../Render/RenderContactList';
import { connect } from 'react-redux'
import * as operations from '../../redux/Contacts/operations'
import * as selectors from '../../redux/Contacts/contacts-selectors';


class Contacts extends Component{
  
  
  componentDidMount() {
    this.props.fetchContacts()
}
    render() {
        return (
            <div>
                {this.props.error && <h1>{this.props.error}</h1>}
                {this.props.isLoadingContacts && <h1>Loading...</h1>}
                <h1>Phonebook</h1>
                <Form onSubmit={this.submitForm} />
                <h2>Contacts</h2>
                <Filter />
                <Render />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoadingContacts: selectors.getIsLoadingContacts(state),
    error: selectors.getError(state), 
});
const mapDispatchToProps = dispatch => ({
  fetchContacts:()=>dispatch(operations.fetchContact())
})


export default connect(mapStateToProps,mapDispatchToProps)(Contacts);