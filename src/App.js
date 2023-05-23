import React,{useState} from "react";
import Navbar from "./components/Navbar";
import Contests from "./components/Contests";
import image from './images/codechef.jpg';
import cf from './images/codeforce.png';
import hr from './images/hackerrank.png';
import he from './images/hackerearth.png';
import coder from './images/coder.jpg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {

  const [progress,setProgress] = useState(0);

  let set = (progress) => {
      setProgress(progress);
  }

  return (
    <div className="App bg-[#F8F6F4]">
      <Router>
        <Navbar/>
            <LoadingBar
              color='#077af5'
              progress={progress}
              height={5}
              loaderSpeed={500}
            />
        <Routes>
          <Route exact path="/" element={<Contests func={set} image={coder}  key = "/" plateform="all"/>}>
          </Route>
          <Route exact path="/codechef" element={<Contests func={set} key="/codechef" plateform="code_chef" image={image}/>}>
          </Route>
          <Route exact path="/codeforces" element={<Contests func={set} key="/codeforces" image={cf} plateform="codeforces"/>}>
          </Route>
          <Route exact path="/hackerearth" element={<Contests func={set} key="/hackerearth" image={he} plateform="hacker_earth"/>}>
          </Route>
          <Route exact path="/hackerrank" element={<Contests func={set} key="/hackerrank" image={hr} plateform="hacker_rank"/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
