import * as React from 'react';
import './panel.css'
import * as copyright from "../../helpers/copyright";
import {ImageMetadata} from "../../models/imageMetadata";

interface PanelProps {
  srcURL: string,
  metadata: ImageMetadata
}

class Panel extends React.Component<PanelProps> {
  public render() {
    return (
      <div className="panel">
        <img 
          src={this.props.srcURL}
          alt=""
          id="protection"
          onClick={this.onClickImg}
          onContextMenu={this.onProtectionContextMenu}
        />
      </div>
    );
  }

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
