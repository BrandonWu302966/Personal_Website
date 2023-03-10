import logo from './logo.svg';
import './App.css';
import cherry from "./assets/cherry1.png";
import signature from "./assets/sig.png"
import me from "./assets/me.png"
import swipe from "./assets/swipe.png"
import stump from "./assets/Stump.png";
import roots from "./assets/roots.png";
import branch1 from "./assets/branch2.png";
import branch2 from "./assets/branch2-1.png";

function App() {
  return (
    <div className="App">
      <div id = 'full-body'>
        <img className = 'top-left' src={cherry} alt="react logo" />
        <img className = 'cherry1' src={cherry} alt="react logo" />
        <img className = 'cherry3' src={cherry} alt="react logo" />
        <div id = "container">
          <img className = 'top-right' src = {cherry} alt = 'react logo'/>
        </div>
        <div className = 'navbar'>
          f
          <button class="nav1" >Home</button>
          <div class = 'dropdown1'>
            <button class="nav2" >Projects</button>
            <div class = 'dropdown-content1'>
              <button className='a'>Benford's</button>
              <br></br>
              <button className='a'>BFHP</button>
              <br></br>
              <button className='a'>Nexus</button>
            </div>
          </div>
          <button class="nav3">Experiences</button>
          <button class="nav4">Contacts</button>
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
        <div className = 'headshot'>
          <img className = 'headshot' src = {swipe} alt = 'react logo'/>
          <img className = 'headshot' src = {me} alt = 'react logo'/>
        </div>
        
      </div>
      <div id = 'full-body2'>
        <div id = 'container2'>
          <img className = 'stump' src = {stump} alt = 'react logo'/>
            <img className = 'roots' src = {roots} alt = 'react logo'/>
            <img className = 'branch1' src = {branch1} alt = 'react logo'/>
            <img className = 'branch2' src = {branch2} alt = 'react logo'/>
            <img className = 'cherry5' src={cherry} alt="react logo" />
            <img className = 'cherry6' src={cherry} alt="react logo" />
            <img className = 'cherry7' src={cherry} alt="react logo" />
            <img className = 'cherry8' src={cherry} alt="react logo" />
            <img className = 'cherry9' src={cherry} alt="react logo" />
            <img className = 'cherry10' src={cherry} alt="react logo" />
            <img className = 'uproot' src = {roots} alt = 'react logo' />
            <img className = 'branch3' src = {branch1} alt = 'react logo'/>
            <img className = 'branch4' src = {branch2} alt = 'react logo'/>
            <img className = 'cherry11' src={cherry} alt="react logo" />
            <img className = 'cherry12' src={cherry} alt="react logo" />
          </div>

        </div>
      </div>
  );
}

export default App;
