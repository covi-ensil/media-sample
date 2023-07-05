import { useState } from 'react';
import { useRef } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Question from './components/Question';
import Topbanner from './components/Topbanner';
import Solution from './pages/Solution';
import Teacher from './pages/Teacher';
import Lecture from './pages/Lecture';
const {initCoviSdk} = window

function App() {
  const [solutionStyle, setSolutionStyle] = useState('콴다 선생님')
  const [firstLoading, setFirstLoading] = useState(0)
  
  // const [coviTag, setCoviTag] = useState(null)

  const coviRef = useRef(null);

  const handleMoveDiv = () => {
    const target = document.getElementById('nextCoviplayer');
    console.log(coviRef)
    console.log(target);
    target.appendChild(coviRef.current);
};
  
    return (
        <BrowserRouter>
            <div className='flex justify-center'>
                <div className='top-24 w-[380px] md:w-[1000px] pt-4 border-4 border-black rounded-[2rem]'>
                  <div id='content' className='px-4'>
                    <Topbanner />
                    <Question />
                    <Question />
                    <hr className='w-full my-4 ' />
                    <Navbar setSolutionStyle={setSolutionStyle} initCoviSdk={initCoviSdk} coviRef={coviRef} handleMoveDiv={handleMoveDiv} />
                    <Switch>
                      <Route exact path="/">
                        <Teacher initCoviSdk={initCoviSdk} solutionStyle={solutionStyle} firstLoading={firstLoading} setFirstLoading={setFirstLoading} coviRef={coviRef} handleMoveDiv={handleMoveDiv} />
                      </Route>
                      <Route path="/solution">
                        <Solution />
                      </Route>
                      <Route path="/lecture">
                        <Lecture initCoviSdk={initCoviSdk} solutionStyle={solutionStyle} firstLoading={firstLoading} setFirstLoading={setFirstLoading} coviRef={coviRef} handleMoveDiv={handleMoveDiv} />
                      </Route>
                    </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;