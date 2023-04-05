import React from 'react';

const Navbar = () => {
    return (
        <div className='flex'>
            <div className='flex gap-5'>
                <div className=' p-2 hover:bg-black hover:text-white hover:rounded-xl'>
                    <span>콴다 선생님</span>
                </div>
                <div className=' p-2 hover:bg-black hover:text-white hover:rounded-xl'>
                    <span>일반 풀이</span>
                </div>
                <div className=' p-2 hover:bg-black hover:text-white hover:rounded-xl'>
                    <span>동영상</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
