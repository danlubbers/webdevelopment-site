import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title='Dan Lubbers | Full Stack Web Developer'
    
      meta={[
        {author: 'Dan Lubbers'},
        { name: 'description', content: 'Dan Lubbers is a Photographer / Retoucher / Web Developer specializing in Studio and Environmental Portraits in Saratoga Springs, NY.' },
        { name: 'keywords', content: 'dan lubbers, web, web developer, developer, development, full stack, coder, javascript, react, reactjs, programmer, photographer, photography, photographs, saratoga, springs, ny, new york, louisville, kentucky, ky, fine art, fine art portraiture, editorial, portraits, portraiture, environmental portraits, studio, product, people, emotion, passion, adventure, action, lifestyle, scenic, landscape, iphoneography, music, musicians, will, oldham, jim, james, my morning jacket, mmj, bonnie, prince, billy, sport, sports, red river gorge, rock climbing, climbing, climber, rockclimbing, headshots, commercial, cycling, trailrunning, running, athletes, professional, athletic, local' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
