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

// adiciona o mapStateToProps para pegar o que é passado da store para ser transformado em props

const mapStateToProps = (store) => ({
  selectedCategory: store.MovieReducer.selectedCategory,
  selectedMovie: store.MovieReducer.selectedMovie,
})
// é feito a conexão do redux com o componente Player
export default connect(mapStateToProps)(Player)