import logo from './logo.svg';
import './App.css';
import cherry from "./assets/cherry.png";
import signature from "./assets/signature.png"
import swipe from "./assets/swipe.png"
import sub from "./assets/subject.png"

function App() {
  return (
    <div className="App">
      <div full-body>
        <div left-border>
          <img className = 'top-left' src={cherry} alt="react logo" />
          <img className = 'cherry1' src={cherry} alt="react logo" />
          <img className = 'cherry2' src={cherry} alt="react logo" />
          <img className = 'cherry3' src={cherry} alt="react logo" />
        </div>
        <img className = 'sig' src = {signature} alt = "react logo" />
        <div description>
          <hr className = 'topline'></hr>
          <label className = 'description'>
          Hi! I am a freshmen studying Computer Science and Business at UC Berkeley. I love front-end development and creating full stack projects for non-profits. 
          If I’m away from my keyboard, I like to play Badminton and go to the gym. I am a Business Analyst at Consult Your Community and Codebase at Berkeley. 
          </label>
          <hr className = 'bottomline'></hr>
        </div>
        <div headshot>
          <img className = 'swipe' src = {swipe} alt = 'react logo'/>
          <img className = 'subject' src = {sub} alt = 'react logo'/>
        </div>
      </div>
    </div>
  );
}

export default App;
