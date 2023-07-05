import React, { useEffect, useState, useRef } from 'react';
import useScript from '../utils/useScript.js';
// const { initCoviSdk, CoviIndex} = window;

const CoviplayerVideo = ({ initCoviSdk }) => {
    // const [loading1, error1] = useScript("https://cnp-file.dev.covi.co.kr/player/js/coviplayer.js")
    // const [loading2, error2] = useScript("https://cnp-file.dev.covi.co.kr/integration_sample/publisher_dev.js")

    // if(loading1 && loading2){

    // }

    // useEffect(() => {
    //     // Load external JavaScript files or perform any necessary initialization
    //     const coviTag = document.querySelector('.covi')
    //     const script1 = document.createElement('script');
    //     script1.async = true;
    //     script1.src = '//cnp-file.dev.covi.co.kr/player/js/coviplayer.js';
    //     coviTag.appendChild(script1);

    //     const script2 = document.createElement('script');
    //     script2.async = true;
    //     script2.src = '//cnp-file.dev.covi.co.kr/integration_sample/publisher_dev.js';
    //     coviTag.appendChild(script2);

    //     return () => {
    //       // Cleanup any resources or event listeners if necessary
    //     //   coviTag.removeChild(script1);
    //     //   coviTag.removeChild(script2);
    //     };
    //   }, []);

    // console.log(1);
    return (
        <>
            <div className='w-[350px] md:w-[500px] mx-auto'>
                <div className=''>
                    <div className='covi'></div>
                    <div className=' flex justify-end gap-2'>
                        {/* <button
                        className='w-24 text-sm'
                        onClick={() => initCoviSdk(0)}
                    >
                        다른 광고 재생
                    </button> */}
                    </div>
                </div>
            </div>
            <div className='ensil'></div>
        </>
    );
};

export default CoviplayerVideo;
