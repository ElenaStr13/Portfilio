import './contactUs.scss';
import Button from '../button/Button';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
//import useOutsideClick from '../../hooks/useOutsideClick';

export const ContactUs = () => {

    // const { ref } = useOutsideClick(onClose);
    const [t] = useTranslation(["translation"]);
    const [forUser, setForUser] = useState(false);

    return (
        <section className='wrapper-contactus'>
            <h4 className='question-contact'>{t('description.contactUs.questionContact')}</h4>
            <h1>{t('description.contactUs.contact')}</h1>
            <Formik
                initialValues={{ email: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required this field, please enter your email';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                        errors.name = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        setForUser(true);
                        setSubmitting(false)
                    }, 400);
                }} >
                {({ values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit} className='emailUser'>
                        <div className='error'>{errors.email && touched.email && errors.email}</div>
                        <input
                            className={`normal-contactUs ${errors.email ? 'invalid' : ""}`}
                            onChange={(event) => handleChange(event)}
                            type="email"
                            name="email"
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder='Enter your mail' />
                        <Button color='black' type="submit" title="Send" disabled={isSubmitting} />
                    </form>
                )
                }
            </Formik>
            {forUser && <div className="for-user">
                Your email has been sent
            </div>}
        </section>
    )
}

export default ContactUs;