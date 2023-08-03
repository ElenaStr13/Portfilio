import './ownerFounder.scss';
import CardOwner from '../cardOwner/CardOwner';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Scrollbar } from 'swiper';
import 'swiper/css/pagination';


function OwnerFounder() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('./OwnerFounder.json')
            .then(function (response) {
               // console.log(response);
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    }, []);
    return (<>

        <div className='swiper-wrapper-owner'>
            <Swiper
                modules={[Pagination, Scrollbar]}
                style={{ maxWidth: '1400px', color:'#FCD54C'}}
                //spaceBetween={6}
                //slidesPerView={2}               
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints=  {{
                    320: {
                        width: 320,
                        slidesPerView: 1,
                        spaceBetween: 6                        
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2,
                        spaceBetween: 6                        
                    },
                    1900: {
                        width: 1900,
                        slidesPerView: 2,
                        spaceBetween: 6                       
                    }}

                }>
                {data.map((item, index) => <SwiperSlide key={index+item.id}><CardOwner  item={item} /></SwiperSlide>
                )}
            </Swiper>
        </div>
    </>
    )
}

export default OwnerFounder;