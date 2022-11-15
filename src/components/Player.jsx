import React from 'react'

import { connect } from 'react-redux'

function Player({ selectedCategory, selectedMovie }) {
  return (
    <div className='player-container'>
      <h1>Video Player</h1>
      <div className='video-player'>

        <h2>Selected Category: {selectedCategory.name}</h2>
        <h3>Selected Movie: {selectedMovie.title}</h3>
      </div>
    </div>
  )
}

const mapStateToProps = (store) => ({
  selectedCategory: store.MovieReducer.selectedCategory,
  selectedMovie: store.MovieReducer.selectedMovie,
})

export default connect(mapStateToProps)(Player)