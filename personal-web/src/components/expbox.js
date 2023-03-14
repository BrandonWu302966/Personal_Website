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
                </div>
                <div className = 'edesc'>
                  <div>
                    {props.experiencedesc}
                  </div>
                  </div>

            </div>
            <div id = 'espace'>
                <br></br>
            </div>
            <div id = 'espace'>
                <br></br>
            </div>
            <div id = 'espace'>
                <br></br>
            </div>
          </div>
    );
}

export default expbox;