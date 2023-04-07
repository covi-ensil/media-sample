import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Question from './components/Question';
import Topbanner from './components/Topbanner';
import Solution from './pages/Solution';
import Teacher from './pages/Teacher';
import Lecture from './pages/Lecture';

function App() {
    return (
        <BrowserRouter>
            <div className='flex justify-center mt-12 relative mb-4'>
                <img
                    src='https://covidemo.covi.co.kr/mockup/common/android.png'
                    alt='androidPNG'
                />
                <div className='top-24 w-[335px] absolute'>
                  <div className=' h-[580px] overflow-y-scroll scrollbar-w-2'>
                    <Topbanner />
                    <Question />
                    <hr className='w-full my-4 border-4' />
                    <Navbar />
                    <Switch>
                      <Route exact path="/">
                        <Teacher />
                      </Route>
                      <Route path="/solution">
                        <Solution />
                      </Route>
                      <Route path="/lecture">
                        <Lecture />
                      </Route>
                    </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;