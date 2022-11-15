import {configureStore} from '@reduxjs/toolkit';  // importado a função que cria e configura a store com o reducer dentro

import { categories } from "../data/data"; // deve ser importado o arquivo das informaçoes que serão passadas para a store


// para o reducer  funcionar é preciso um estado inicial 
const INITIAL_STATE = {
    categories: [...categories],
    selectedMovie: {},
    selectedCategory: {},
  };


// É preciso criar uma constante store onde ela recebera a configureStore que nela terá o reducer
// O reducer deve ser um objeto ou uma função,
// neste exemplo será uma função que recebe um estado, se não receber um estado ele usará o estado inicial, e recebe também uma ação 
// Ele analisará fazendo a condição que se a ação for do tipo "Selecionar_filme" o reducer retornará o estado puxando as caracteristicas iniciais dele + 
// o estado atual e as informações recebidas pela action
// e por fim retorna o estado

const store = configureStore({
    reducer:{
         MovieReducer: (state = INITIAL_STATE, action) => {
   
            if(action.type === 'SELECT_MOVIE'){
                return {
                    ...state,
                    selectedCategory: action.category,
                    selectedMovie: action.movie,
                }
            }
           
            return state;
        }
    }
    
})

export default store;
