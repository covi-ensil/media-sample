import { useState } from 'react';
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

  // console.log(solutionStyle)
  // console.log(firstLoading)
  
    return (
        <BrowserRouter>
            <div className='flex justify-center'>
                <div className='top-24 w-[380px] pt-4 border-4 border-black rounded-[2rem]'>
                  <div id='content' className='px-4'>
                    <Topbanner />
                    <Question />
                    <Question />
                    <hr className='w-full my-4 ' />
                    <Navbar setSolutionStyle={setSolutionStyle} initCoviSdk={initCoviSdk} />
                    <Switch>
                      <Route exact path="/">
                        <Teacher initCoviSdk={initCoviSdk} solutionStyle={solutionStyle} firstLoading={firstLoading} setFirstLoading={setFirstLoading} />
                      </Route>
                      <Route path="/solution">
                        <Solution />
                      </Route>
                      <Route path="/lecture">
                        <Lecture initCoviSdk={initCoviSdk} solutionStyle={solutionStyle} />
                      </Route>
                    </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;