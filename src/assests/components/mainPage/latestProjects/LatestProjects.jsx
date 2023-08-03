import './latestProjects.scss';
//import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import { Pagination, Scrollbar } from 'swiper';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';

function LatestProjects() {

  const [t] = useTranslation(["translation"]);

 return (<>
    <div className='menu-latest-projects'>
      <span className='title-latest'>{t('description.latestProjects.titleLatest')}</span>
      <nav>
        <p>{t('description.latestProjects.navAll')}</p>
        <p>{t('description.latestProjects.building')}</p>
        <p>{t('description.latestProjects.interior')}</p>
        <span>{t('description.latestProjects.viewAll')}</span>
      </nav>
    </div>
    <div className='swiper-wrapper'>
      <Swiper
        modules={[Pagination, Scrollbar]}
        style={{ width: '1720px'}}
        spaceBetween={10}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        //onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}       
        breakpoints=  {{
          300: {
              width: 300,
              slidesPerView: 2,
              spaceBetween: 6,
              // grid: {
              //   rows: 2,
              // }
               slidesPerColumn: 2                        
          },
          767: {
              width: 767,
              slidesPerView: 4,
              spaceBetween: 6                        
          },
          1900: {
              width: 1900,
              slidesPerView: 4,
              spaceBetween: 6                       
          }}

      }>
      
        {t("description.latestProject", { returnObjects: true }).map((el, index) => (
           <SwiperSlide key={index+el.back}>
        <div className='wrapper-card' >
            <div className='front-project'>
                <img src={el.image} alt="user" className='image-project' />
                <span className='front-title'>{el.front}</span>
            </div>
            <div className='back-project'>
                <p className='back-title-project'>{el.back}</p>
                <p className='back-description'>{el.description}</p>
                <a href='#' className='a-card'>{el.seeProject}</a>
            </div>
        </div>
        </SwiperSlide>
 ))}   
    </Swiper>
    </div >
  </>
  );
}

export default LatestProjects;
