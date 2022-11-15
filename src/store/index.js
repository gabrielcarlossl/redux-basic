import {configureStore} from '@reduxjs/toolkit';

import { categories } from "../data/data";

const INITIAL_STATE = {
    categories: [...categories],
    selectedMovie: {},
    selectedCategory: {},
  };

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
