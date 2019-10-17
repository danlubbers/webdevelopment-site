import React, {Component} from 'react'
import bioImage from '../../images/bio.jpg'
import SocialMedia from '../components/SocialMedia';

export default class Bio extends Component {
    render(){
        
        return(
            <div className='bio-container'>
                <img className='bio-image' src={bioImage} alt='bio photo'/>
                <a href="https://www.codewars.com/users/danlubbers" target='_blank' rel="noopener noreferrer"><img className='codewars' src="https://www.codewars.com/users/danlubbers/badges/large
" alt="codewars-api"/></a>
                <div className='social-media-container'>
                <SocialMedia/>
                </div>
                <p className='about-section'>Dan Lubbers is a Full Stack Web Developer with an extensive background in Photography & Retouching. He recently moved to Saratoga Springs, NY. A love of the outdoors has led Lubbers to places around the world like performing service work in Guatemala and roaming the pyramids of Ancient Egypt.
  		        Lubbers got his start with Extreme Sports Photography when he was the sole photographer on the La Sportiva Solutions Climbing Tour in 2007 and began shooting for Extreme Sports Editorials and various outdoor companies.
  		        Lubbers went on to work in Amazon's Largest Photo Studio photographing and retouching for the Jewelry and Watch department. He recently retouched an AD campaign for Tempurpedic. He is also a contributor to Aurora Photos. Lubbers has really delved into a passion for Environmental & Fine Art Portraiture. Wanting to add more to his career and an interest in Design and Coding led him to Utah, to take a 3 month intensive Web Development Bootcamp at DevMountain.
  		        A love of good coffee usually leads one to find him at local coffee shops working diligently on his work either at home or when traveling.</p>
            </div>
        )
    }
    
}