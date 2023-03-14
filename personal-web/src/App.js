import logo from './assets/github.png';
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
import CYC from "./assets/cyc.png";
import Codebase from "./assets/codebase.jpg";
import Nexus from "./assets/nexus.jpg";
import BFHP from "./assets/bfhp.jpg";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Projectbox from './components/projectbox.js';
import Expbox from './components/expbox.js';
import Scroller from './components/scroller.js';

function App() {
  let [expboxes, setexpboxes] = useState([]);
  let [projectboxes, setprojectboxes] = useState([]);

    
  useEffect(() => {
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_EXP_ID}`;
    const url1 = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_PROJ_ID}`;
    const config = {
      headers : {
        "Authorization" : `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
      }
    };

    // Code to actually pull and then use the data
    // Request 1
    axios.get(url, config)
    .then(res => {
      let tableEntries = res.data.records;
      let items = [];
      tableEntries.forEach(record => {
        let entry = record.fields;
        let item = {
          name: entry["Experience Name"],
          startend: entry["Start to End"],
          experiencerole: entry["Experience Role"],
          experiencedesc: entry["Experience Description"],
        }
        items.push(item);
      });
      setexpboxes(items);
    })
    .catch(err=> console.log(err))

    // Request 2
    axios.get(url1, config)
    
    .then(res => {
      let tableEntries = res.data.records;
      let items1 = [];
      tableEntries.forEach(record => {
        let entry = record.fields;
        let item = {
          name1: entry["Project Name"],
          startend1: entry["Start to End"],
          projectrole: entry["Project Role"],
          projectdesc: entry["Project Description"],
        }
        items1.push(item);
      });
      setprojectboxes(items1);
    })
    .catch(err=> console.log(err))

  }, []);

  return (
    <div className="App">
      <div id = 'full-body'>
        <div id = "background">
          <img src = {background} alt = {logo}></img>
        </div>
        <img className = 'top-left' src={cherry} alt="react logo" />
        <img className = 'cherry1' src={cherry} alt="react logo" />
        <img className = 'cherry3' src={cherry} alt="react logo" />
        <div id = "container">
          <img className = 'top-right' src = {cherry} alt = 'react logo'/>
        </div>
        <div className = 'navbar'>
          f
          <button className="nav1" >Home</button>
          <div className = 'dropdown1'>
            <button className="nav2" >Projects</button>
            <div className = 'dropdown-content1'>
              <button className='a'>Benford's</button>
              <br></br>
              <button className='a'>BFHP</button>
              <br></br>
              <button className='a'>Nexus</button>
            </div>
          </div>
          <div className = 'dropdown2'>
            <button className ="nav3" >Experience</button>
            <div className = 'dropdown-content2'>
              <button className='b' onClick = {Scroller}>YiYang</button>
              <br></br>
              <button className='b'>Codebase</button>
              <br></br>
              <button className='b'>CYC</button>
            </div>
          </div>
          <div className = 'dropdown3'>
            <button className ="nav4" >Contact</button>
            <div className = 'dropdown-content3'>
            </div>
          </div>
        </div>
          <img className = 'sig' src = {signature} alt = "react logo" />
          <div>
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
          <a id = 'timeline1' href= "https://www.yiyangeducation.org/">
            <label className ='timage1'>🏫</label>
          </a>
          <a id = 'timeline2' href= "https://globalyouth.wharton.upenn.edu/programs-courses/data-science-academy/">
            <img src = {wharton} alt = 'react logo' className ='timage2'></img>
          </a>
          <a id = 'timeline3' href= "https://www.cycberkeley.org/">
            <img src = {CYC} alt = 'react logo' className ='timage3'></img>
          </a>
          <a id = 'timeline4' href = 'https://codebase.berkeley.edu/'>
            <img src = {Codebase} alt = 'react logo' className ='timage4'></img>
          </a>
          <a id = 'timeline5' href= "https://nexushq.com/home/">
            <img src = {Nexus} alt = 'react logo' className ='timage5'></img>
          </a>
          <a id = 'timeline6' href= "https://bfhp.org/">
            <img src = {BFHP} alt = 'react logo' className ='timage6'></img>
          </a>

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
        <div id = 'full-body3'>
          <div id = 'left-border'>
            <img className = 'cherry1' src = {cherry} alt = 'react logo'></img>
            <img className = 'cherry3' src = {cherry} alt = 'react logo'></img>
          </div>
          <header className = 'exp-title'>Experiences</header> 
          <div id = 'experiences'>
            {expboxes.map(item => (
              <Expbox name={item["name"]} startend = {item['startend']} experiencerole={item["experiencerole"]} experiencedesc={item["experiencedesc"]}/>
            ))}
          </div>
          <header className = 'exp-title'>Projects</header>   
          <div id = 'projects'>
            {projectboxes.map(item => (
              <Projectbox name1={item["name1"]} startend = {item['startend1']} projectrole={item["projectrole"]} projectdesc={item["projectdesc"]}/>
            ))}
          </div>
        </div>
      </div>   
      );
}

export default App;
