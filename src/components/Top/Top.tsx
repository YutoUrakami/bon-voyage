import * as React from 'react';
import * as cloudFunctions from '../../services/cloudFunctions'
import SlideShow from '../SlideShow/SlideShow';

interface TopState {
  images: Array<{ [key: string]: any }>,
}

class Top extends React.Component<{}, TopState> {
  constructor(props: any) {
    super(props);
    this.state = {
      images: []
    }
  }

  public render() {
    return <SlideShow images={this.state.images}/>
  }

  public componentWillMount() {
    cloudFunctions.listImagesByTag('top')
      .then((images) => {
        this.setState({
          images: images.map((img, index) => {
            const copy: { [key: string]: any } = img;
            copy.show = index === 0;
            return copy;
          })
        });
      })
  }
}

export default Top;
