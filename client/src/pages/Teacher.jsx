import React, { useEffect } from 'react';
import Video from '../components/Video';

const Teacher = ({
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
    }, [solutionStyle, setFirstLoading, initCoviSdk]);

    return (
        <>
            <div className='flex flex-col'>
                <div className='flex flex-col items-center pb-4'>
                    <div>Teacher Page</div>
                    <div>Teacher Page</div>
                    <div>Teacher Page</div>
                    <div>Teacher Page</div>
                    <div>Teacher Page</div>
                    <div>Teacher Page</div>
                    <div>Teacher Page</div>
                    <div>Teacher Page</div>
                    <div>Teacher Page</div>
                </div>
                <Video />
                <div className='flex flex-col items-center pt-4'>
                    <div>Teacher Page</div>
                    <div>Teacher Page</div>
                    <div>Teacher Page</div>
                    <div>Teacher Page</div>
                    <div>Teacher Page</div>
                    <div>Teacher Page</div>
                    <div className=' pb-[48rem]'>Teacher Page</div>
                </div>
            </div>
        </>
    );
};

export default Teacher;
