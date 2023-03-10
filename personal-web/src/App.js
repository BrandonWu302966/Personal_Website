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
import github from "./assets/github.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import linkedin from "./assets/linkedin.png";
import background from "./assets/background.jpg";
import wharton from "./assets/wharton.png";
import CYC from "./assets/cyc.jpg";
import Codebase from "./assets/codebase.jpg";
import Nexus from "./assets/nexus.jpg";
import BFHP from "./assets/bfhp.jpg";

function App() {
  return (
    <div className="App">
      <div id = 'full-body'>
        <div id = "background">
          <img src = {background} alt = 'react logo'></img>
        </div>
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
          <div class = 'dropdown2'>
            <button class="nav3" >Experience</button>
            <div class = 'dropdown-content2'>
              <button className='b'>YiYang</button>
              <br></br>
              <button className='b'>Codebase</button>
              <br></br>
              <button className='b'>CYC</button>
            </div>
          </div>
          <div class = 'dropdown3'>
            <button class="nav4" >Contact</button>
            <div class = 'dropdown-content3'>
            </div>
          </div>
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
        <div id = 'socials-container'>
          <a className = 'social' href = "https://github.com/BrandonWu302966">
            <img className = 'github' src = {github} alt = 'react logo'/>
          </a>
          <a className = 'social' href = "https://www.linkedin.com/in/brandonwu32">
            <img className = 'linkedin' src = {linkedin} alt = 'react logo'/>
          </a>
          <a href = 'https://www.instagram.com/brandonwuuu/'>
            <img className = 'instagram' src = {instagram} alt = 'react logo'/>
          </a>
          <a className = 'social' href = "https://www.facebook.com/brandon.wu.94">
            <img className = 'facebook' src = {facebook} alt = 'react logo'/>
          </a>
        </div>
      </div>
      <div id = 'full-body2'>
        <div id = 'container2'>
          <div id = 'timeline1'>
            <label className ='timage1'>🏫</label>
            <br></br>
            <label className = 'ttitle'>YiYang</label>
            <br></br>
            <label className = 'tdescription'>
              Description of my time at YiYang
            </label>
          </div>
          <div id = 'timeline2'>
            <img src = {wharton} alt = 'react logo' className ='timage2'></img>
            <br></br>
            <label className = 'ttitle'>Benford's Analysis of Covid-19 Data</label>
            <br></br>
            <label className = 'tdescription'>
              Description of my time at WDSA
            </label>
          </div>
          <div id = 'timeline3'>
            <img src = {CYC} alt = 'react logo' className ='timage3'></img>
            <br></br>
            <label className = 'ttitle'>Consult Your Community</label>
            <br></br>
            <label className = 'tdescription'>
              Description of my time at CYC
            </label>
          </div>
          <div id = 'timeline4'>
            <img src = {Codebase} alt = 'react logo' className ='timage4'></img>
            <br></br>
            <label className = 'ttitle'>Codebase</label>
            <br></br>
            <label className = 'tdescription'>
              Description of my time at Codebase
            </label>
          </div>
          <div id = 'timeline5'>
            <img src = {Nexus} alt = 'react logo' className ='timage5'></img>
            <br></br>
            <label className = 'ttitle'>Nexus</label>
            <br></br>
            <label className = 'tdescription'>
              Description of my time at Nexus
            </label>
          </div>
          <div id = 'timeline6'>
            <img src = {BFHP} alt = 'react logo' className ='timage6'></img>
            <br></br>
            <label className = 'ttitle'>Berkeley Food and Housing Project</label>
            <br></br>
            <label className = 'tdescription'>
              Description of my time at BFHP
            </label>
          </div>

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
