import React from 'react';

const Topbanner = () => {
    return (
        <div className='flex flex-col   text-black'>
            <div className='flex justify-center pb-2 text-sm font-semibold'>문제 풀이</div>
            <div className='flex flex-col px-4 py-2 mb-4 mr-1 bg-slate-200'>
                <div className=' font-bold'>콴다 프리미엄을 구독하면</div>
                <div>광고 없이 공부에만 집중할 수 있어요</div>
            </div>
        </div>
    );
};

export default Topbanner;
