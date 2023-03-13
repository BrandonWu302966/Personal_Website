import './projectbox.css';

function projectbox(props) {
    return (
        <div id = 'experiences'>
            <br></br>
            <div className = 'exp'>
                <div id = "etitle">
                  <div id = 'ename'>{props.name1}</div>
                  <div id = 'erole'>{props.projectrole}</div>
                  <div id = 'edate'>{props.startend}</div>
                  <div id = 'espace'>
                    <br></br>
                  </div>
                </div>
                <div id = 'edesc'>{props.projectdesc}</div>
                <div id = 'espace'>
                    <br></br>
                </div>
            </div>
          </div>
    );
}

export default projectbox;