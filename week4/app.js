const redux = require('redux');

let tommy = {
    id: 1,
    name: "BatMan",
    phone: "555-555-5555",
    email: "imbatman@aol.com"
}

let amy = {
    id: 2,
    name: 'SuperMan',
    phone: '555-555-1234',
    email: 'clarkkent@aol.com'
}

//reducers
let contacts = (prevContacts = [], action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [...prevContacts, action.contact];
        case 'REMOVE_CONTACT':
            let contacts = [...prevContacts];
            return contacts.filter((contact)=>{
                return contact.id !== action.id;
            });
        case 'EDIT_CONTACT':
            let editedContacts = [...prevContacts];
            return editedContacts.map(contact => {
                if (contact.id === action.id) {
                    return action.contact;
                } else {
                    return contact;
                }
            })
        default:
            return prevContacts;
    }
}

//store

let store = redux.createStore(redux.combineReducers({ contacts }));

//subscribe
store.subscribe(() => {
    console.log(store.getState());
})

//actions with type and payload
let addContact = (contact) => {
    return {
        type: 'ADD_CONTACT',
        contact
    }
}

let removeContact = (id) => {
    return {
        type: 'REMOVE_CONTACT',
        id
    }
}

let editContact = (id, contact) => {
    return {
        type: 'EDIT_CONTACT',
        id,
        contact
    }
}

//dispatch
store.dispatch(addContact(tommy));
store.dispatch(removeContact(2));
store.dispatch(editContact(1, 
    {
    id: 1, 
    name: 'Spiderman', 
    phone: 'NA', 
    email: 'NA'
}));
store.dispatch(addContact(amy));