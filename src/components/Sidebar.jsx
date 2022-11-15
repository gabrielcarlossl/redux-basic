import React from 'react'

import {connect} from 'react-redux'

import {MovieAction} from '../actions/MovieActions'



function Sidebar({categories, selectMovie}) {
  return (
    <aside className='sidebar'>
        {categories.map((category) => (
            <div key={category.id}>
                <h2>Category: {category.name}</h2>
                
                <ul>
                    <h3>Movie Information</h3>
                    {category.movies.map((movie) => (
                        
                        <li key={movie.id}>
                            
                            <p>{movie.title} was released in {movie.released}</p>
                            <button onClick={() => selectMovie(category, movie)}>Select</button>
                            <hr />
                        </li>

                    ))}
                </ul>
            </div>
        ))}
    </aside>
  )
}

const mapDispatchToProps = (dispatch) => ({
    selectMovie: (category, movie) => dispatch(MovieAction(category, movie))
})

const mapStateToProps = (store) => ({
    categories: store.MovieReducer.categories,
})


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)