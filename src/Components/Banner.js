import React from 'react'
import '../Styles/Banner.css'
import {Button} from '@material-ui/core'

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner_search">
        <Button 
          className="banner_searchButton"
          variant='outlined'>Search Dates
        </Button>
      </div>
      
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the gems near you.
        </h5>
        <Button
        variant='outlined'>Explore 
        Nearby</Button>
      </div>
    </div>
  )
}
