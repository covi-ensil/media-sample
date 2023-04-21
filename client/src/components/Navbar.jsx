// import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({solutionStyle, setSolutionStyle}) => {
    
    // console.log(solutionStyle)

    return (
        <div className='flex flex-col items-center pl-2 pb-4'>
            <div className='flex gap-4 text-sm'>
                <Link to='/' className=' rounded-2xl border bg-gray-200 p-2 hover:bg-black hover:text-white hover:rounded-2xl' onClick={(e) => setSolutionStyle(e.target.textContent)}>
                    콴다 선생님
                </Link>
                <Link to='/solution' className=' rounded-2xl border bg-gray-200 p-2 hover:bg-black hover:text-white hover:rounded-2xl'>
                    일반 풀이
                </Link>
                <Link to='/lecture' className=' rounded-2xl border bg-gray-200 p-2 hover:bg-black hover:text-white hover:rounded-2xl' onClick={(e) => setSolutionStyle(e.target.textContent)}>
                    동영상 강의
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
