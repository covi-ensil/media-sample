import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
const {coviplayer} = window

const Navbar = ({ solutionStyle, setSolutionStyle, coviRef, handleMoveDiv }) => {
    // console.log(solutionStyle)
    // console.log(document.querySelector('.covi'))
    // const myTag = document.querySelector('.covi')
    // useEffect(() => {
    //     const timer = setTimeout(() => console.log(myTag), 2000);
    //   }, []);
    // console.log(myTag)

    const consoleTag = () => {
        const coviTag = document.querySelector('.covi') || document.querySelector('.change')
        console.log(coviTag)
    }

    const clickButton = () => {
        console.log(coviRef.current)

    }

    // console.log(coviTag)

    // const handleCoviTag = () => {
        
    // }

    // console.log(coviplayer)

    return (
        <div className='flex flex-col items-center pl-2 pb-4'>
            <div className='flex gap-4 text-sm'>
                <div>
                    <Link
                        to='/'
                        className=' rounded-2xl border bg-gray-200 p-2 hover:bg-black hover:text-white hover:rounded-2xl'
                        onClick={(e) => setSolutionStyle(e.target.textContent)}
                    >
                        콴다 선생님
                    </Link>
                </div>
                <div>
                    <Link
                        to='/solution'
                        className=' rounded-2xl border bg-gray-200 p-2 hover:bg-black hover:text-white hover:rounded-2xl'
                    >
                        일반 풀이
                    </Link>
                </div>
                <div onClick={clickButton}>
                    <Link
                        to='/lecture'
                        className=' rounded-2xl border bg-gray-200 p-2 hover:bg-black hover:text-white hover:rounded-2xl'
                        onClick={(e) => setSolutionStyle(e.target.textContent)}
                    >
                        동영상 강의
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
