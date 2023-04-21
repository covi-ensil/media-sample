import React, { useEffect } from 'react';
import Video from '../components/Video';

const Lecture = ({
    initCoviSdk,
    solutionStyle,
    firstLoading,
    setFirstLoading,
}) => {
    useEffect(() => {
        // 첫 번째 로딩에서는 initCoviSdk가 실행되지 않고, 이후 solutionStyle이 바뀔 때마다 initCoviSdk 실행
        if (firstLoading) {
            initCoviSdk();
        }
        setFirstLoading(1);
        // console.log(firstLoading)
    }, [setFirstLoading, solutionStyle, initCoviSdk]);

    return (
        <>
            <div className='flex flex-col items-center'>
                <div>Lecture Page</div>
                <div>Lecture Page</div>
                <div>Lecture Page</div>
                <Video />
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
                <div>Lecture Page</div>
                <div className=' pb-[48rem]'>Lecture Page</div>
            </div>
        </>
    );
};

export default Lecture;
