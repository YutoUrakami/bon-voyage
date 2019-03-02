import * as React from 'react';
import './NotFound.css'

class NotFound extends React.Component {
  public render() {
    return (
      <div className="notfound">
        <div className="notfound_container">
          <div className="notfound_code">
            404
          </div>
          <div className="notfound_text">
            page not found
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
