import React, {Component} from 'react'
// AOS
// import AOS from 'aos';
import 'aos/dist/aos.css';
// Logos
import gitLogo from '../../images/git-logo.png'
import githubLogo from '../../images/github-logo.svg'
import reactLogo from '../../images/react-icon.svg.png'
import html5Logo from '../../images/html5-logo.png'
import css3Logo from '../../images/css3-logo.png'
import sassLogo from '../../images/sass-logo.svg'
import JSLogo from '../../images/js-logo.png'
import reduxLogo from  '../../images/redux-logo.png'
import nodeLogo from  '../../images/node-logo.png'
import postgresLogo from '../../images/postgres-logo.png'
import postman from '../../images/postman.png'
import express from '../../images/expressjslogo.png'
import jest from '../../images/jest.svg'
import captureOneLogo from '../../images/capture-one-logo.png'
import LRLogo from '../../images/lr-logo.png'
import PSLogo from '../../images/ps-logo.png'
import heliconLogo from '../../images/helicon-logo.png'

export default class Skillset extends Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      const isBrowser = typeof window !== 'undefined';
      const AOS = isBrowser ? require('aos') : undefined;
      
      this.aos = AOS;
      this.aos.init({duration: 1000});
  }

  // componentDidUpdate() {
  //     this.aos.refresh();
  // }

    render() {
        return(
            <div className='skillset-content'>
            <div className='full-stack-container'>
              <h1 className='technology-text'>TECHNOLOGIES</h1>
              {/* <h2 className='skillset'>SKILL SET</h2> */}
            </div>
            <div className="logo-container">
              <div data-aos='fade-up' data-aos-anchor-placement="center-center">
                <img className='logos' src={gitLogo} alt='git logo'/>
                <h2 className='logo-text'>GIT</h2>
              </div>
              <div data-aos='fade-up' data-aos-anchor-placement="center-center" data-aos-delay='100'>
                <img className='logos' src={githubLogo} alt='github logo'/>
                <h2 className='logo-text'>GITHUB</h2>
              </div>
              <div data-aos='fade-up' data-aos-anchor-placement="center-center" data-aos-delay='200'>
                <img className='logos' src={reactLogo} alt='react logo'/>
                <h2 className='logo-text'>REACT</h2>
              </div>
              <div data-aos='fade-up' data-aos-anchor-placement="center-center" data-aos-delay='300'>
                <img className='logos' src={html5Logo} alt='html5 logo'/>
                <h2 className='logo-text'>HTML5</h2>
              </div>
              <div data-aos='fade-up' data-aos-anchor-placement="center-center" 
              data-aos-delay='400'>
                <img className='logos' src={css3Logo} alt='css3 logo'/>
                <h2 className='logo-text'>CSS3</h2>
              </div>
              <div data-aos='fade-up' data-aos-anchor-placement="center-center">
                <img className='logos' src={sassLogo} alt='sass logo'/>
                <h2 className='logo-text'>SASS</h2>
              </div>
              <div data-aos='fade-up' data-aos-anchor-placement="center-center" data-aos-delay='100'>
                <img className='logos' src={JSLogo} alt='JS logo'/>
                <h2 className='logo-text'>JAVASCRIPT</h2>
              </div>
              <div data-aos='fade-up' data-aos-anchor-placement="center-center" data-aos-delay='200'>
                <img className='logos' src={reduxLogo} alt='redux logo'/>
                <h2 className='logo-text'>REDUX</h2>
              </div>
              <div data-aos='fade-up' data-aos-anchor-placement="center-center" data-aos-delay='300'>
                <img className='logos' src={nodeLogo} alt='node logo'/>
                <h2 className='logo-text'>NODE</h2>
              </div>
              <div data-aos='fade-up' data-aos-anchor-placement="center-center" data-aos-delay='400'>
                <img className='logos' src={postgresLogo} alt='postgres logo'/>
                <h2 className='logo-text'>POSTGRESQL</h2>
              </div>
              <div data-aos='fade-up' data-aos-anchor-placement="center-center" data-aos-delay='400'>
                <img className='logos' src={postman} alt='postman logo'/>
                <h2 className='logo-text'>POSTMAN</h2>
              </div>
              <div data-aos='fade-up' data-aos-anchor-placement="center-center" data-aos-delay='400'>
                <img className='logos' src={express} alt='express logo'/>
                <h2 className='logo-text'>EXPRESS</h2>
              </div>
              <div data-aos='fade-up' data-aos-anchor-placement="center-center" data-aos-delay='400'>
                <img className='logos' src={jest} alt='jest logo'/>
                <h2 className='logo-text'>JEST</h2>
              </div>
              <div data-aos='fade-up' data-aos-anchor-placement="center-center">
                <img className='logos' src={captureOneLogo} alt='captureOne logo'/>
                <h2 className='logo-text'>CAPTUREONE</h2>
              </div>
              <div data-aos='fade-up' data-aos-anchor-placement="center-center" data-aos-delay='100'>
                <img className='logos' src={heliconLogo} alt='Helicon Focus logo'/>
                <h2 className='logo-text'>HELICON FOCUS</h2>
              </div>
              <div data-aos='fade-up' data-aos-anchor-placement="center-center" data-aos-delay='200'>
                <img className='logos' src={LRLogo} alt='Adobe Lightroom logo'/>
                <h2 className='logo-text'>ADOBE LIGHTROOM</h2>
              </div>
              <div data-aos='fade-up' data-aos-anchor-placement="center-center" data-aos-delay='300'>
                <img className='logos' src={PSLogo} alt='Adobe Photoshop logo'/>
                <h2 className='logo-text'>ADOBE PHOTOSHOP</h2>
              </div>
            </div>  
            </div>
        )
    }
}