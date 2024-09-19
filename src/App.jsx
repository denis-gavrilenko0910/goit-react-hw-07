// src/components/App/App.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './components/contactForm/ContactForm';
import SearchBox from './components/searchBox/SearchBox';
import ContactList from './components/contactList/ContactList';

import './App.css';
import { fetchContacts } from './redux/contactsOps';
import { selectError, selectLoading } from './redux/contactsSlice';

const App = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className="app">
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            {loading && <p>Loading...</p>}
            {error && <p>something went wrong {error}</p>}

            <ContactList />
        </div>
    );
};

export default App;
