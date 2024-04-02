import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './SkillsList.css'
import { Navigation } from 'swiper/modules';


export default function SkillsList({skills}){
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {skills.map(({name,skills,id,classname}) =>(
                <SwiperSlide key={id}>
                    <div className="swiper-card">
                        <h3 className={classname}>{name}</h3>
                        {skills.map(skill =>(<p>{skill}</p>))}
                    </div>   
                </SwiperSlide>
            ))}

        </Swiper>
        // <ul>
        //     {skills.map(({name,skills,id}) =>(
        //         <li key={id}>
        //             <h3>{name}</h3>
        //             {skills.map(skill =>(<p>{skill}</p>))}   
        //         </li>
        //     ))}

        // </ul>
    )
}