import React, { useEffect, useState } from 'react';
import './offer.scss';
import { useTranslation } from 'react-i18next';
import PaginationOffer from '../pagination/PaginationOffer';

function Offer() {

    const [t] = useTranslation(["translation"]);
    const [isOffers, setisOffers] = useState([]);

    useEffect(() => {
        setisOffers((t("descriptionCategory.Offers", { returnObjects: true })));    
      }, [ t])

    return <>
        <h2>{t('descriptionCategory.titleOffer')}</h2>
        {/* <section className='offers'>
            {isOffers.map((el, index) => (
                <div className='offer' key={index}>
                    <img src={el.image} alt="photo" />
                    <div className='offer-text'>
                        <p>{el.category}</p>
                        <p className='title-offer'>{el.title}</p>
                        <p className='text-offer'>{el.description}</p>
                        <a href="#">{el.learn}</a>
                    </div>
                </div>
            ))}
        </section> */}
        <PaginationOffer isOffers={isOffers}/>       
    </>
}

export default Offer;