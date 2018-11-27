import * as React from 'react';
import Panel from '../Panel/Panel';
import './SlideShow.css'

interface IProps {
  images: Array<{ [key: string]: any }>,
}

interface IState {
  showFlags: boolean[],
}

class SlideShow extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showFlags: []
    }
  }

  public render() {
    return (
      <div className="slide-container">
        <div className="slide-box">
          {this.props.images.filter((img, index) =>
            this.state.showFlags[index]
          ).map((img) =>
            <Panel srcURL={img.src} key={img.publicId}/>
          )}
        </div>
        <div className="slide-navigation-left">
          <div className="navigation-icon">
            <i className="fas fa-chevron-left" onClick={this.onClickLeft}/>
          </div>
        </div>
        <div className="slide-navigation-right">
          <div className="navigation-icon">
            <i className="fas fa-chevron-right" onClick={this.onClickRight}/>
          </div>
        </div>
      </div>
    )
  }
  
  public componentWillReceiveProps(nextProps: IProps) {
    const nextShowFlags = nextProps.images.map((img) => {
      return img.show;
    });
    this.setState({showFlags: nextShowFlags})
  }
  
  public shouldComponentUpdate() {
    return true;
  }
  
  private changeDisplayImage = (nextShowIndex: number) => {
    const nextFlags = this.state.showFlags.map((flg, index) => {
      return nextShowIndex === index;
    });
    this.setState({showFlags: nextFlags})
  };

  private searchCurrentShowingIndex = () => {
    return this.state.showFlags.findIndex((flag) => {
      return flag;
    });
  };

  private onClickLeft = () => {
    let nextShowIndex = this.searchCurrentShowingIndex() - 1;
    if (nextShowIndex < 0) {
      nextShowIndex = this.state.showFlags.length - 1;
    }
    this.changeDisplayImage(nextShowIndex);
  };

  private onClickRight = () => {
    let nextShowIndex = this.searchCurrentShowingIndex() + 1;
    if (this.state.showFlags.length <= nextShowIndex) {
      nextShowIndex = 0;
    }
    this.changeDisplayImage(nextShowIndex);
  };
}

export default SlideShow;
