import './expbox.css';

function expbox(props) {
    return (
        <div id = 'experiences'>
            <br></br>
            
            <div className = 'exp'>
                <div id = "etitle">
                  <div id = 'ename'>{props.name}</div>
                  <div id = 'erole'>{props.experiencerole}</div>
                  <div id = 'edate'>{props.startend}</div>
                  <div id = 'espace'>
                    <br></br>
                  </div>
                </div>
                <div id = 'edesc'>{props.experiencedesc}</div>
                <div id = 'espace'>
                    <br></br>
                </div>
            </div>
            
          </div>
    );
}

export default expbox;