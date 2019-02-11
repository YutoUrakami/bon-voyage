import * as React from 'react';
import './About.css'

class About extends React.Component {
  public render() {
    return (
      <div className="profile container">
        <div className="profile-image">
          <img src="https://res.cloudinary.com/dh3lelkhn/image/upload/v1549896874/profile.jpg"/>
        </div>
        <div className="profile-name">phoooutty</div>
        <div className="social">
          <a href="https://www.instagram.com/phoooutty/" target="_blank" rel="noopener noreferrer">
            <i className="social-icon fab fa-instagram"/>
          </a>
          <a href="https://twitter.com/Phoooutty" target="_blank" rel="noopener noreferrer">
            <i className="social-icon fab fa-twitter"/>
          </a>
        </div>
      </div>
    )
  }
}

export default About;
