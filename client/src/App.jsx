import Navbar from './components/Navbar';
import Question from './components/Question';
import Topbanner from './components/Topbanner';

function App() {
    return (
        <>
            <div className='flex justify-center mt-12 relative'>
                <img
                    src='https://covidemo.covi.co.kr/mockup/common/android.png'
                    alt='androidPNG'
                />
                <div className='top-24 w-[325px] absolute'>
                    <Topbanner />
                    <Question />
                    <Navbar />
                </div>
            </div>
        </>
    );
}

export default App;
