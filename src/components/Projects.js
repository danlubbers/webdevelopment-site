import React, {Component} from 'react'
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
// Screenshots
import ArcDesk from '../../images/arc-clone-desktop.gif'
import ArcMobile from '../../images/arc-clone-mobile.png'

export default class Projects extends Component {
    constructor(props) {
        super(props)
    }
  
      componentDidMount() {
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
                    <div className='screenshots'>
                   <a href='http://arcteryxclone.danlubbers.com' target='_blank'><img data-aos='zoom-in' data-aos-anchor-placement="top-center" className='arc-desk' src={ArcDesk} alt='arcteryx clone desktop screenshot'/></a>
                   <a href='http://arcteryxclone.danlubbers.com' target='_blank'><img data-aos='zoom-in' data-aos-anchor-placement="top-center" className='arc-mobile' src={ArcMobile} alt='arcteryx clone mobile screenshot'/></a>
                    </div>
                </section>
            </div>
        )
    }
}