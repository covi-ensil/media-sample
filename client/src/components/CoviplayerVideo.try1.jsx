import React, { useEffect, useState, useRef } from 'react';
import useScript from '../utils/useScript.js'
const { initCoviSdk, CoviIndex} = window;

const CoviplayerVideo = () => {
    // const [loading1, error1] = useScript("https://cnp-file.covi.co.kr/player/js/coviplayer.js")
    // const [loading2, error2] = useScript("https://cnp-file.covi.co.kr/integration_sample/publisher_prod.js")
    const [loading1, error1] = useScript("https://cnp-file.dev.covi.co.kr/player/js/coviplayer.js")
    const [loading2, error2] = useScript("https://cnp-file.dev.covi.co.kr/integration_sample/publisher_dev.js")

    // if(loading1 && loading2){
        
    // }
    return (
        <>
            <div className='w-[350px] md:w-[500px] mx-auto'>
                <div className='covi'></div>
                <div className=' flex justify-end gap-2'>
                    <button
                        className='w-24 text-sm'
                        onClick={() => window.location.reload()}
                    >
                        다른 광고 재생
                    </button>
                </div>
            </div>
            <div className='ensil'></div>
        </>
    );
};

export default CoviplayerVideo;
