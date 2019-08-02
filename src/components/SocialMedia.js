import React from 'react'

import GitHub from 'react-icons/lib/fa/github'
import LinkedIn from 'react-icons/lib/fa/linkedin-square'
import Instagram from 'react-icons/lib/fa/instagram'
import Camera from 'react-icons/lib/fa/camera'


const SocialMedia = () => (
    <div className='social-media-container-nested'>
    {/* <h1 className='social-text'>SOCIAL MEDIA</h1> */}
    <div className='social-media'>
        <div className='github'>
            <a href='http://github.com/danlubbers' target='_blank' rel="noopener" alt='github'><GitHub/>
            </a>
        </div>
        <div className='linkedin'>
           <a href='http://linkedin.com/in/danlubbers' target='_blank' rel="noopener" alt='linkedin'><LinkedIn />
           </a>
        </div>
        <div className='instagram'>
            <a href='http://instagram.com/danlubbers' target='_blank' rel="noopener" alt='instagram'><Instagram />
            </a>
        </div>
        <div className='camera'>
            <a href='http://danlubbersphotographs.com' target='_blank' rel="noopener" alt='dan lubbers photographs'><Camera />
            </a>
        </div>
    </div>
    </div>
)

export default SocialMedia