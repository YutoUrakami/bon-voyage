import * as React from 'react';
import {Image, toViewableArray} from '../../models/image'
import * as cloudFunctions from '../../services/cloudFunctions'
import SlideShow from '../SlideShow/SlideShow';

interface TopState {
  images: Image[]
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
      .then((images: Image[]) => {
        this.setState({images: toViewableArray(images, 0)});
      })
  }
}

export default Top;
