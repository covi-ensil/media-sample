import React, {useEffect} from 'react';
import Video from '../components/Video';


const Lecture = ({initCoviSdk, solutionStyle}) => {
    useEffect(()=> {
        initCoviSdk()
    }, [solutionStyle, initCoviSdk])
    
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
