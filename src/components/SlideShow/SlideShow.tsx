import * as React from 'react';
import * as cloudFunctions from '../../services/cloudFunctions'
import Panel from '../Panel/Panel';
import './SlideShow.css'

interface IProps {
  tag: string
}

interface IState {
  images: Array<{ [key: string]: any }>,
}

class SlideShow extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      images: []
    }
  }

  public render() {
    return (
      <div className="slide-container">
        <div className="slide-box">
          {this.state.images.filter((img) =>
            img.show
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
  
  public componentWillMount() {
    cloudFunctions.listImagesByTag(this.props.tag)
      .then((data) => {
        this.setState({images: data});
      })
  }
  
  private changeDisplayImage = (nextShowIndex: number) => {
    this.state.images.forEach((img, index) => {
      const imagesCopy = this.state.images.slice();
      imagesCopy[index].show = nextShowIndex === index;
      this.setState({images: imagesCopy})
    });

  };

  private searchCurrentShowingIndex = () => {
    return this.state.images.findIndex((img) => {
      return img.show;
    });
  };

  private onClickLeft = () => {
    let nextShowIndex = this.searchCurrentShowingIndex() - 1;
    if (nextShowIndex < 0) {
      nextShowIndex = this.state.images.length - 1;
    }
    this.changeDisplayImage(nextShowIndex);
  };

  private onClickRight = () => {
    let nextShowIndex = this.searchCurrentShowingIndex() + 1;
    if (this.state.images.length <= nextShowIndex) {
      nextShowIndex = 0;
    }
    this.changeDisplayImage(nextShowIndex);
  };
}

export default SlideShow;
