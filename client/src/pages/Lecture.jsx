import React, { useEffect } from 'react';
import CoviplayerVideo from '../components/CoviplayerVideo';
import SdkonlyVideo from '../components/SdkonlyVideo';

const Lecture = ({
    initCoviSdk,
    solutionStyle,
    firstLoading,
    setFirstLoading,
    coviTag,
    coviRef,
    handleMoveDiv,
}) => {
    // useEffect(() => {
    //     // 첫 번째 로딩에서는 initCoviSdk가 실행되지 않고, 이후 solutionStyle이 바뀔 때마다 initCoviSdk 실행
    //     if (firstLoading) {
    //         window.location.reload()
    //     }
    //     setFirstLoading(1);
    //     // console.log(firstLoading)
    // }, [solutionStyle, setFirstLoading]);

    let lectureRef = coviRef.current
    const el = document.getElementById('nextCoviplayer')
    el.appendChild(lectureRef,coviRef. el)

    useEffect(() => {
        const target = document.getElementById('nextCoviplayer')
        console.log(el)
        target.appendChild(el)
        initCoviSdk()
    }, [el, initCoviSdk]);
    

    return (
        <>
            <div className='flex flex-col items-center'>
                <div>Lecture Page</div>
                <div>Lecture Page</div>
                <div>Lecture Page</div>
                <div>Lecture Page</div>
                <div id='nextCoviplayer'></div>
                <div>Lecture Page</div>
                <div>Lecture Page</div>
                <div>Lecture Page</div>
                <div>Lecture Page</div>
                <div>Lecture Page</div>
                <div>Lecture Page</div>
                <div>Lecture Page</div>
                <div>Lecture Page</div>
                <div>Lecture Page</div>
                <div>Lecture Page</div>
                <div>Lecture Page</div>
                <div>Lecture Page</div>
                <div>Lecture Page</div>
                <div className=' pb-[48rem]'>Lecture Page</div>
            </div>
        </>
    );
};

export default Lecture;
