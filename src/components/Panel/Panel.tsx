import * as React from 'react';
import './Panel.css'

interface PanelProps {
  srcURL: string,
  caption: string
}

class Panel extends React.Component<PanelProps> {
  public render() {
    return (
      <div className="panel">
        <img src={this.props.srcURL} alt={this.props.caption} onClick={this.onClickImg} />
      </div>
    );
  }
  
  private onClickImg = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  }
}
export default Panel;
