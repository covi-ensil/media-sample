import React, { useEffect, useRef } from 'react';
import CoviplayerVideo from '../components/CoviplayerVideo';
import SdkonlyVideo from '../components/SdkonlyVideo';

const Teacher = ({
    initCoviSdk,
    solutionStyle,
    firstLoading,
    setFirstLoading,
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

    // const coviRef = useRef(null);

    // console.log(coviRef)

    // console.log(coviRef)

    // console.log(coviRef.current)

    // const clickButton = () => {
    //     console.log(coviRef.current)
    // }

    return (
        <>
            <div className='flex flex-col'>
                <div className='flex flex-col items-center pb-4'>
                    <div>Teacher Page</div>
                    <div>Teacher Page</div>
                    {/* <button onClick={clickButton}>console useRef</button> */}
                    <div>Teacher Page</div>
                    <div>Teacher Page</div>
                    <div className='covi' ref={coviRef}></div>
                    <div>Teacher Page</div>
                    <div>Teacher Page</div>
                    {/* <button onClick={handleMoveDiv}>move to lecture</button> */}
                    <div>Teacher Page</div>
                    <div>Teacher Page</div>
                    <div>Teacher Page</div>
                </div>
                {/* <CoviplayerVideo initCoviSdk={initCoviSdk} /> */}
                {/* <div className='covi'></div> */}
                <div className='flex flex-col items-center pt-4'>
                    <div>Teacher Page</div>
                    <div>Teacher Page</div>
                    <div>Teacher Page</div>
                    <div id='nextCoviplayer'></div>
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
