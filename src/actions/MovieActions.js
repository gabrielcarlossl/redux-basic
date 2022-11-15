// Neste arquivo é adicionado as ações que desejo realizar com o Movie,
// selecionar um filme, a função vai receber a categoria e o filme, e retornara obrigatoriamente um tipo, e as informações recebidas da função

export function MovieAction(category, movie){
    return {
        type: 'SELECT_MOVIE',
        category,
        movie,
    }
}