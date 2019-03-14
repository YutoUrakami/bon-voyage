import * as React from 'react';
import './copyright.css'

class Copyright extends React.Component {
  public render() {
    return (
      <div className="copyright" id="copyright">
        © 2019 phoooutty. All rights reserved.
      </div>
    );
  }

  public componentDidMount = () => {
    document.addEventListener("click", () => {
      const copyright = document.getElementById("copyright");
      if (!copyright) {
        return
      }
      copyright.classList.remove("show");
    });
  };
}

export default Copyright;
