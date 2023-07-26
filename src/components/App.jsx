

import { ContactForm } from './СontactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';

export const App = () => {
   return (
    <section className={css.content}>
      <div className={css.content__container}>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
        </div>
      <ToastContainer position='top-center'/>
    </section>
  );
};
