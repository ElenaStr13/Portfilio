import './category.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Scrollbar } from 'swiper';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';

function Category() {

  const [t] = useTranslation(["translation"]);

  return (<>

    <div className='swiper-wrapper'>
      <Swiper
        modules={[Pagination, Scrollbar]}      
        spaceBetween={10}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}>
        <SwiperSlide>
          <div className='wrapper-category'>
            <div className='front-category'>
              <img src='./image/category/all-townhous.webp' alt="user" className='image-project' />
              <span className='category-title'>{t('descriptionCategory.categoryes.categoryOne')}</span>
            </div>
            <div className='back-category'>
              <p className='back-title-category'>{t('descriptionCategory.categoryes.backTitle')}</p>
              <p className='category-description'>{t('descriptionCategory.categoryes.backDescription')}</p>
              <a href='#' className='a-card'>{t('descriptionCategory.categoryes.learn')}</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='wrapper-category'>
            <div className='front-category'>
              <img src='./image/category/all-villa.webp' alt="user" className='image-project' />
              <span className='category-title'>{t('descriptionCategory.categoryes.categoryTwo')}</span>
            </div>
            <div className='back-category'>
              <p className='back-title-category'>{t('descriptionCategory.categoryes.backTitle')}</p>
              <p className='category-description'>{t('descriptionCategory.categoryes.backDescription')}</p>
              <a href='#' className='a-card'>{t('descriptionCategory.categoryes.learn')}</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='wrapper-category'>
            <div className='front-category'>
              <img src='./image/category/all-comercial.webp' alt="user" className='image-project' />
              <span className='category-title'>{t('descriptionCategory.categoryes.categoryThree')}</span>
            </div>
            <div className='back-category'>
              <p className='back-title-category'>{t('descriptionCategory.categoryes.backTitle')}</p>
              <p className='category-description'>{t('descriptionCategory.categoryes.backDescription')}</p>
              <a href='#' className='a-card'>{t('descriptionCategory.categoryes.learn')}</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='wrapper-category'>
            <div className='front-category'>
              <img src='./image/category/all-villa.webp' alt="user" className='image-project' />
              <span className='category-title'>{t('descriptionCategory.categoryes.categoryOne')}</span>
            </div>
            <div className='back-category'>
              <p className='back-title-category'>{t('descriptionCategory.categoryes.backTitle')}</p>
              <p className='category-description'>{t('descriptionCategory.categoryes.backDescription')}</p>
              <a href='#' className='a-card'>{t('descriptionCategory.categoryes.learn')}</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='wrapper-category'>
            <div className='front-category'>
              <img src='./image/category/all-townhous.webp' alt="user" className='image-project' />
              <span className='category-title'>{t('descriptionCategory.categoryes.categoryTwo', {returnObjects: true})}</span>
            </div>
            <div className='back-category'>
              <p className='back-title-category'>{t('descriptionCategory.categoryes.backTitle', {returnObjects: true})}</p>
              <p className='category-description'>{t('descriptionCategory.categoryes.backDescription', {returnObjects: true})}</p>
              <a href='#' className='a-card'>{t('descriptionCategory.categoryes.learn', {returnObjects: true})}</a>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div >
  </>
  );
}

export default Category;

