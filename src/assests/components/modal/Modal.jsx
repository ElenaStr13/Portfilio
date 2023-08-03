import './modal.scss';
import Button from '../button/Button';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import useOutsideClick from '../../hooks/useOutsideClick';

export const Modal = ({ onClose, isOpen }) => {

    const { ref } = useOutsideClick(onClose);
    const [t] = useTranslation(["translation"]);

    return (<>
        <Formik
            initialValues={{ name: '', phone: '' }}
            validate={values => {
                const errors = {};
                if (!values.name || values.name.length < 2) {
                    errors.name = 'Required it must be more 2 characters';
                } else if (/[0-9]/.test(values.name)) {
                    errors.name = 'Invalid name, please, enter you name';
                }
                if (!values.phone || values.phone.length < 11) {
                    errors.phone = 'Required or it must be more 11 numbers';
                } else if (!/[0-9]{11,}/.test(values.phone)) {
                    errors.password = 'phone inavalid, it must have only numbers';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
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

                <div ref={ref} className={isOpen ? 'wrapperForm opened' : 'wrapperForm closed'}>
                    <form onSubmit={handleSubmit} className='informationUser'>
                        <h3>{t('descriptionModal.title')}</h3>
                        <p>{t('descriptionModal.feedback')}</p>
                        <input
                            className={`normal ${errors.name ? 'invalid' : ""}`}
                            onChange={(event) => handleChange(event)}
                            type="name"
                            name='name'
                            onBlur={handleBlur}
                            value={values.name}
                            placeholder='Name' />
                        <div className='error'>{errors.name && touched.name && errors.name}</div>

                        <input
                            className={`normal ${errors.name ? 'invalid' : ""}`}
                            onChange={(event) => handleChange(event)}
                            type="phone"
                            name="phone"
                            onBlur={handleBlur}
                            value={values.phone}
                            placeholder='Phone' />
                        <div className='error'>{errors.phone && touched.phone && errors.phone}</div>
                        <Button type="submit" title="Send" disabled={isSubmitting} color="send" />
                    </form>
                    <label htmlFor="checkbox" className='checkbox'>x</label>
                    <input onClick={onClose} type="checkbox" id='checkbox' />
                </div>
            )
            }
        </Formik>
    </>)
}

export default Modal;
