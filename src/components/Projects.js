import React, {Component} from 'react'
// AOS
// import AOS from 'aos';
import 'aos/dist/aos.css';
// Screenshots
import ArcDesk from '../../images/arc-clone-desktop.gif'
import ArcMobile from '../../images/arc-clone-mobile.png'
import RuffDesk from '../../images/ruffdoggies.gif'
import SunnyRa from '../../images/sunny-ra-website-devices.jpg'

export default class Projects extends Component {
    constructor(props) {
        super(props)
    }
  
      componentDidMount() {
        const isBrowser = typeof window !== 'undefined';
        const AOS = isBrowser ? require('aos') : undefined;

        this.aos = AOS;
        this.aos.init({duration: 1000});
    }
    render() {
        return(
            <div className='projects-container'>
                <h1 className='personal-project-text'>PERSONAL PROJECT</h1>
                <h2 className='arc-clone-text'>ARC'TERYX LEAF CLONE </h2>
                <p className='arc-tech'>TECH USED: REACT | SASS | JAVASCRIPT 
                    | REDUX | NODE | POSTGRESQL | HOVER | DIGITAL OCEAN
                </p>
                <section>
                    <h3>DETAILS OF PROJECT :</h3>
                    <p>
                        I chose to clone an e-commerce site. Cloning this site allowed me to showcase that I can take a design and recreate the layout into a full functioning site. I used CSS3/SASS for all of the styling and to make the design mobile responsive for iphone 6, 7, 8 and desktop. I used React.js to build the site with the use of Javascript along with Redux to manage the "state." I used PostgreSQL and Heroku for database management of the products. The Domain is registered and maintained through Hover and the site is hosted on Digital Ocean.
                    </p>
                    <a href='https://github.com/danlubbers/arcteryx-clone' target='_blank' rel="noopener">GITHUB REPO</a>
                    <div className='screenshots'>
                   <a href='http://arcteryxclone.danlubbers.com' target='_blank' rel="noopener"><img data-aos='zoom-in' data-aos-anchor-placement="top-center" className='arc-desk' src={ArcDesk} alt='arcteryx clone desktop screenshot'/></a>
                   <a href='http://arcteryxclone.danlubbers.com' target='_blank' rel="noopener"><img data-aos='zoom-in' data-aos-anchor-placement="top-center" className='arc-mobile' src={ArcMobile} alt='arcteryx clone mobile screenshot'/></a>
                    </div>
                </section>

                  <h1 className='group-project-text'>GROUP PROJECT</h1>
                <h2 className='ruff-clone-text'>RUFFWEAR CLONE </h2>
                <p className='ruff-tech'>TECH USED: REACT | SASS | JAVASCRIPT 
                    | REDUX | NODE | POSTGRESQL | HOVER | DIGITAL OCEAN
                </p>
                <section>
                    <h3>DETAILS OF PROJECT :</h3>
                    <p>
                    Our group wanted to clone an e-commerce site. Cloning this site allowed us to showcase that we can take a design and recreate the layout into a full functioning site. We used CSS3/SASS for all of the styling. We used React.js to build the site with the use of Javascript along with Redux to manage the "state." We used PostgresSQL and Heroku for database management of the products. The Domain is registered and maintained through Hover and the site is hosted on Digital Ocean.
                    </p>
                    <a href='https://github.com/danlubbers/ruffwear-clone' target='_blank' rel="noopener">GITHUB REPO</a>
                    <div className='screenshots'>
                   <a href='http://ruffdoggies.danlubbers.com' target='_blank' rel="noopener"><img data-aos='zoom-in' data-aos-anchor-placement="bottom" className='ruff-desk' src={RuffDesk} alt='ruffwear clone desktop screenshot'/></a>
                    </div>
                </section>

                    <h1 className='sunny-project-text'>CLIENT PORTFOLIO SITE</h1>
                    <h2 className='sunny-text'>ARTIST SUNNY RA</h2>
                    <p className='sunny-tech'>Tech used: 
  ReactJS | HTML | Sass | Javascript | Redux | React Helmet | PostgresSQL | Digital Ocean | Google Analytics
                </p>
                <section>
                <h3>DETAILS OF PROJECT :</h3>
                    <p>*UPDATE* Refactored code Aug. 2019 to cut out 75% of static code and converted it over to a SQL database and hosting on Digital Ocean. </p>
                    <p>
                    Client/Artist, Sunny Ra wanted a complete redesign of her portfolio site. I created the wireframe and designed the layout and color scheme. I photographed her portrait for the 'About' section. I then built her site using Reactjs. I made the site fully responsive using Media Queries in SASS. I used React Helmet so google would be able to crawl her site searching for keywords helping SEO (Seach Engine Optimization). I added Google Analytics so Sunny can track her traffic going to her new site.  
                    </p>
                    <a href='https://github.com/danlubbers/sunny-ra' target='_blank' rel="noopener">GITHUB REPO</a>
                    <div className='screenshots'>
                   <a href='http://www.sunny-ra.com' target='_blank' rel="noopener"><img data-aos='zoom-in' data-aos-anchor-placement="bottom" className='sunny-desk' src={SunnyRa} alt='sunny ra portfolio site shown on different devices'/></a>
                    </div>
                </section>
            </div>
        )
    }
}