import React, { Component } from 'react';
import Contact from './Contact';

let contacts = [
    {
        id: 1,
        name: 'Darth Vader',
        phoneNumber: '+373672369741',
        image: '../img/darth.gif'
    },
    {
        id: 2,
        name: 'Alf',
        phoneNumber: '+373602369741',
        image: '../img/alf.gif'
    },
    {
        id: 3,
        name: 'Ninja',
        phoneNumber: '+373782369741',
        image: '../img/ninja.gif'
    },
    {
        id: 4,
        name: 'Chewbacca',
        phoneNumber: '+373682369741',
        image: '../img/chewbacca.gif'
    },
    {
        id: 5,
        name: 'Homer',
        phoneNumber: '+373795369741',
        image: '../img/homer.gif'
    }
]
class ContactList extends Component {
constructor(props){
    super(props);
    this.state = { displayedContacts: contacts};
}

handleSearch = event => {
    let searchQuery = event.target.value.toLowerCase();

    let displayedContacts = contacts.filter(item => {
        let searchValue = item.name.toLowerCase()+item.phoneNumber;

        return searchValue.indexOf(searchQuery) !== -1;
    });

    this.setState({displayedContacts: displayedContacts});
}

render() {
    return (
    <div className="contacts">
        <div className="search-container">
            <input className="search-field" type="text" placeholder="Search" onChange={this.handleSearch} />
        </div>
        <ul className="contact-list">
            {this.state.displayedContacts.map( item =>{
                return (
                    <Contact 
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        phoneNumber={item.phoneNumber}
                    />
                )
            })}
        </ul>
    </div>
    );
}
}
export default ContactList;