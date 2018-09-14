import React from 'react'
import { render } from 'react-dom' // eslint-disable-line no-unused-vars

import Logo from './Logo'

class Footer extends React.Component {
  render () {
    return (
      <footer className='c-Footer'>
        <div className='c-Footer__inner'>
        Novasol 2018
        </div>
      </footer>
    )
  }
}

export default Footer
