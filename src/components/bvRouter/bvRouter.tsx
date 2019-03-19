import * as React from 'react';
import {Route, Switch} from "react-router";
import Top from '../top/top';
import GripWrapper from '../gridWrapper/gripWrapper'
import About from '../about/about'
import NotFound from '../notFound/notFound'

class BvRouter extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={Top}/>
        <Route path="/un_fils" render={this.un_fils}/>
        <Route path="/portraits" render={this.portraits}/>
        <Route path="/yokohama" render={this.yokohama}/>
        <Route path="/about" component={About}/>
        <Route component={NotFound}/>
      </Switch>
    );
  }

  private un_fils() {
    return <GripWrapper folderName="un_fils"/>
  }

  private portraits() {
    return <GripWrapper folderName="portraits"/>
  }

  private yokohama() {
    return <GripWrapper folderName="yokohama"/>
  }
}

export default BvRouter;
