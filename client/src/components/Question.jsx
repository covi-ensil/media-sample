import React from 'react';

const Question = () => {
    return (
        <div>
            <span className='mb-2'>문제</span>
            <div className='flex flex-col'>
                <div className='mt-[2px] mb-2 px-4 bg-gray-200'>
                    <div className=' bg-black'>
                        <img
                            src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FSGe6L%2FbtqwbzLAJul%2Fe6hcNAYx2gYtb5Gwzt79X1%2Fimg.png'
                            alt='noImg'
                            className=' h-[300px]'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;
