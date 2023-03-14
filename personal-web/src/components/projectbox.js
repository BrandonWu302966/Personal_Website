import './projectbox.css';

function projectbox(props) {
    return (
        <div id = 'projects'>
            <br></br>
            <div className = 'proj'>
                <div id = "ptitle">
                  <div id = 'ename'>{props.name1}</div>
                  <div id = 'erole'>{props.projectrole}</div>
                  <div id = 'edate'>{props.startend}</div>
                </div>
                <div className = 'pdesc'>
                  <div>
                    {props.projectdesc}
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

export default projectbox;