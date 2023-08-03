import './questions.scss';
//import { useEffect, useState } from 'react';
//import axios from 'axios';
import { useTranslation } from 'react-i18next';

function Questions() {
    // const [data, setData] = useState([]);
     const [t] = useTranslation(["translation"]);

    // useEffect(() => {
    //     axios.get('./Questions.json')
    //         .then(function (response) {
    //             console.log(response);
    //             setData(response.data);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    //         .finally(function () {
    //         });
    // }, []);
    return (<>
        <div className='title-question'>FAQ</div>
        {/* {data.map((item, index) => */}

        <div className='accordion'>

            <section>
                <input type="checkbox" className="accordion__checkbox" id="accordion-heading-1" />
                <label className="accordion__heading" htmlFor="accordion-heading-1">{t('description.questions.ownTitle')}</label>
                <div className="accordion__content">
                    <p>{t('description.questions.ownText')}</p>                    
                </div>
            </section>

            <section>
                <input type="checkbox" className="accordion__checkbox" id="accordion-heading-2" />
                <label className="accordion__heading" htmlFor="accordion-heading-2">{t('description.questions.twoTitle')}</label>
                <div className="accordion__content">
                    <p>{t('description.questions.twoText')}</p>
                </div>
            </section>

            <section>
                <input type="checkbox" className="accordion__checkbox" id="accordion-heading-3" />
                <label className="accordion__heading" htmlFor="accordion-heading-3">{t('description.questions.threeTitle')}</label>
                <div className="accordion__content">
                    <p>{t('description.questions.threeText')}</p>
                </div>
            </section>

            <section>
                <input type="checkbox" className="accordion__checkbox" id="accordion-heading-4" />
                <label className="accordion__heading" htmlFor="accordion-heading-4">{t('description.questions.fourTitle')}</label>
                <div className="accordion__content">
                    <p>{t('description.questions.fourText')}</p>
                </div>
            </section>

            <section className='lastNews'>
                <input type="checkbox" className="accordion__checkbox" id="accordion-heading-5" />
                <label className="accordion__heading" htmlFor="accordion-heading-5">{t('description.questions.fifeTitle')}</label>
                <div className="accordion__content">
                    <p>{t('description.questions.fifeText')}</p>
                </div>
            </section>

        </div>
        {/* )} */}
    </>)
}

export default Questions;

