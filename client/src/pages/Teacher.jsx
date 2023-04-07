import React, {useRef, useEffect} from 'react';
import Video from '../components/Video';

const Teacher = () => {

    // const mediaSample = useRef(null)

    // useEffect(() => {
    //     const mediaGlobalVariable = mediaSample.current.mediaGlobalVariable
    //     console.log(mediaGlobalVariable)
    // }, [])

    return (
        <>
        <div className='flex flex-col items-center'>

            <div>Teacher Page</div>
            <div>Teacher Page</div>
            <div>Teacher Page</div>
            <Video />
            <div>Teacher Page</div>
            <div>Teacher Page</div>
            <div>Teacher Page</div>
        </div>
        </>
    );
};

export default Teacher;
