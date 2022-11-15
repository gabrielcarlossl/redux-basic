export function MovieAction(category, movie){
    return {
        type: 'SELECT_MOVIE',
        category,
        movie,
    }
}