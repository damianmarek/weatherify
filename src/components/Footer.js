import React from 'react'
import './styles/Footer.css'

class Footer extends React.Component {
  render () {
    return (
      <div className='footer'>
        <h3 className='footer-text'>
          Created by <a className='footer-link' target='_blank' href='https://github.com/damianmarek'>Damian Marek</a>
        </h3>
      </div>
    )
  }
}

export default Footer
