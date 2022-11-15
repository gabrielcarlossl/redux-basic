import React from 'react'

import { connect } from 'react-redux' // O connect faz a ligação do redux com os componentes que querem receber as informações da store

import { MovieAction } from '../actions/MovieActions' // é preciso importar as actions pois ela será passada no mapDispatchToProps

// o componente sidebar vai receber como propriedade as categorias e a função selectmovie 

function Sidebar({ categories, selectMovie }) {
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

// MapDispatchToProps pega tudo que for retornado do dispatch e transforma em propriedades para que possa ser usado no componente

const mapDispatchToProps = (dispatch) => ({
    selectMovie: (category, movie) => dispatch(MovieAction(category, movie))
})

// o mapStateToProps pega todo o objeto que está sendo apssado nele e transforma em uma propriedade (props)

const mapStateToProps = (store) => ({
    categories: store.MovieReducer.categories,
})

// o connect está fornecendo para o  mapDispatchtoProps o dispatch e para o mapStateToProps a store
// deve ser passado os maps e por ultimo o componente

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)