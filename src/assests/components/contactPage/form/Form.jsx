import Button from '../../button/Button';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import "./form.scss";
import { Formik, Field } from 'formik';

function Form() {

    const [t] = useTranslation(["translation"]);
    const [forSend, setForSend] = useState(false);

    return <div className='form'>
        <div>{t('descriptionContact.formTitleOne')}</div>
        <div className='feedback-title'>{t('descriptionContact.formTitleTwo')}</div>

        <Formik
            initialValues={{ name: '', email: '', subject: '', message: '' }}
            validate={values => {
                const errors = {};
                if (!values.name || values.name.length < 2) {
                    errors.name = 'Required name';
                } else if (/[0-9]/.test(values.name)) {
                    errors.name = 'Invalid name, please, enter you name';
                }
                if (!values.email) {
                    errors.email = 'Required email';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }
                if (!values.message) {
                    errors.message = 'Required message';
                } else if (
                     !/[0-9A-Z,. :;!?]{10,}/i.test(values.message)
                ) {
                    errors.message = 'message is short, it must be more than 10 characters';
                } else if (!values.message) {

                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    setForSend(true);
                    setSubmitting(false)
                }, 400);
            }}                >
            {({ values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit} >                    
                    
                    <div className="inputs"> 
                    <div>
                    {/* <label htmlFor="name" >{errors.name && touched.name && errors.name}</label> */}
                        <input type="name" className={`inputAll ${errors.name ? 'invalid-contact' : ""}`}
                            name="name"
                            id="name" onBlur={handleBlur}
                            value={values.name}
                            placeholder='Name'
                            onChange={(event) => {
                                handleChange(event)
                            }}
                        />
                        <p className='error-contact'>{errors.name && touched.name && errors.name}</p>
                        </div>                   
                        
                        <div>
                        {/* <label htmlFor="email">{errors.email && touched.email && errors.email}</label> */}
                        <input type="email" className={`inputAll ${errors.email ? 'invalid-contact' : ""}`}
                            name="email"
                            id="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder='Email *' />
                             <p className='error-contact'>{errors.email && touched.email && errors.email}</p>
                            
                            </div>                        
                      <div>
                      {/* <label htmlFor="subject"> </label> */}
                        <input type="text" 
                            name="subject"
                            id="subject"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.subject}
                            placeholder='Subject' />
                      </div>                
                  </div>
                    <Field className="textarea"
                    type="textarea"
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        placeholder='Message *'
                    ></Field>
                    <p className='error-contact textarea-contact'>{errors.message && touched.message && errors.message}</p>
                    {/* {errors.message && touched.message && errors.message} */}
                    <Button
                        title='SUBMIT'
                        color="yellow"
                        type="submit"
                        disabled={isSubmitting}>
                    </Button>
                    {/* <p>{errors.name && touched.name && errors.name}</p> */}
                    {/* <p>{errors.email && touched.email && errors.email}</p> */}                    
                    {/* <Button color="black" type="submit" disabled={isSubmitting}>Create Account</Button> */}
                </form>
            )
            }
        </Formik>
        {forSend && <div className="for-send">
                Your data has been sent
            </div>}
    </div>
}

export default Form;