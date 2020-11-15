import React from 'react'
import '../Styles/Header.css'

import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className="header">
      <img
        className="header_icon"
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        alt="Vacafy Logo"
      />

      <div className="header_search">
        <input type="text" />
        <SearchIcon />
      </div>

    </div>
  )
}

export default Header
