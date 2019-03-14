import * as React from 'react';
import './loading.css'
import {CSSTransition} from "react-transition-group";

class Loading extends React.Component {
  public render() {
    return (
      <CSSTransition
        classNames="loading"
        in={true}
        appear={true}
        mountOnEnter={true}
        timeout={750}>
        <div className="Loading">
          <div className="lds-dual-ring"/>
        </div>
      </CSSTransition>
    )
  }
}

export default Loading;
