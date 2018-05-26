import React, {Component} from 'react'
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
import captureOneLogo from '../../images/capture-one-logo.png'
import LRLogo from '../../images/lr-logo.png'
import PSLogo from '../../images/ps-logo.png'
import heliconLogo from '../../images/helicon-logo.png'

export default class Skillset extends Component {
    render() {
        return(
            <div className='content'>
            <div className='full-stack-container'>
              <h1>FULL STACK WEB DEVELOPER</h1>
              {/* <h2 className='skillset'>SKILL SET</h2> */}
            </div>
            <div className="logo-container">
              <div>
                <img className='logos' src={gitLogo} alt='git logo'/>
                <h2 className='logo-text'>GIT</h2>
              </div>
              <div>
                <img className='logos' src={githubLogo} alt='github logo'/>
                <h2 className='logo-text'>GITHUB</h2>
              </div>
              <div>
                <img className='logos' src={reactLogo} alt='react logo'/>
                <h2 className='logo-text'>REACT</h2>
              </div>
              <div>
                <img className='logos' src={html5Logo} alt='html5 logo'/>
                <h2 className='logo-text'>HTML5</h2>
              </div>
              <div>
                <img className='logos' src={css3Logo} alt='css3 logo'/>
                <h2 className='logo-text'>CSS3</h2>
              </div>
              <div>
                <img className='logos' src={sassLogo} alt='sass logo'/>
                <h2 className='logo-text'>SASS</h2>
              </div>
              <div>
                <img className='logos' src={JSLogo} alt='JS logo'/>
                <h2 className='logo-text'>JAVASCRIPT</h2>
              </div>
              <div>
                <img className='logos' src={reduxLogo} alt='redux logo'/>
                <h2 className='logo-text'>REDUX</h2>
              </div>
              <div>
                <img className='logos' src={nodeLogo} alt='node logo'/>
                <h2 className='logo-text'>NODE</h2>
              </div>
              <div>
                <img className='logos' src={postgresLogo} alt='postgres logo'/>
                <h2 className='logo-text'>POSTGRES</h2>
              </div>
              <div>
                <img className='logos' src={captureOneLogo} alt='captureOne logo'/>
                <h2 className='logo-text'>CAPTUREONE</h2>
              </div>
              <div>
                <img className='logos' src={LRLogo} alt='Adobe Lightroom logo'/>
                <h2 className='logo-text'>ADOBE LIGHTROOM</h2>
              </div>
              <div>
                <img className='logos' src={PSLogo} alt='Adobe Photoshop logo'/>
                <h2 className='logo-text'>ADOBE PHOTOSHOP</h2>
              </div>
              <div>
                <img className='logos' src={heliconLogo} alt='Helicon Focus logo'/>
                <h2 className='logo-text'>HELICON FOCUS</h2>
              </div>
            </div>  
            </div>
        )
    }
}