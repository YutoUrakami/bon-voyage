import * as React from 'react';
import './panel.css'
import * as copyright from "../../helpers/copyright";

interface PanelProps {
  srcURL: string,
  caption: string
}

class Panel extends React.Component<PanelProps> {
  public render() {
    return (
      <div className="panel">
        <div className="mount">
          <img
            src={this.imgUrl()}
            alt={this.props.caption}
            id="protection"
            onClick={this.onClickImg}
            onContextMenu={this.onProtectionContextMenu}
          />
        </div>
      </div>
    );
  }
  
  private imgUrl = () => {
    const length = Math.min(window.parent.screen.width, window.parent.screen.height * 0.8, 1400);
    const original = this.props.srcURL;
    const searchStr = '/image/upload/';
    const insertIndex = original.indexOf(searchStr) + searchStr.length;
    return [original.slice(0, insertIndex), `c_fit,h_${length},w_${length}/`, original.slice(insertIndex)].join('');
  };

  private onProtectionContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    const x = event.pageX;
    const y = event.pageY;
    copyright.show(x, y);
    event.preventDefault();
  };

  private onClickImg = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  }
}

export default Panel;
