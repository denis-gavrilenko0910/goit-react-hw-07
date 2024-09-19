// src/components/ContactForm/ContactForm.jsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const validationSchema = Yup.object({
    name: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
    number: Yup.string()
        .matches(
            /^\d{3}-\d{2}-\d{2}$/,
            'Неправильний формат номера телефону. Введіть у форматі 123-45-67'
        )
        .min(7, 'Must be at least 7 characters')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
});

const ContactForm = () => {
    const dispatch = useDispatch();
    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                dispatch(addContact(values));
                resetForm();
            }}
        >
            <Form className={styles.form}>
                <label>
                    Name
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" component="div" />
                </label>
                <label>
                    Number
                    <Field name="number" type="text" />
                    <ErrorMessage name="number" component="div" />
                </label>
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;
