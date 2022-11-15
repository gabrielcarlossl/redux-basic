// Arquivo com os dados dos filmes que serão importados na STORE

export const categories = [
    {
        id:1,
        name: 'Drama',
        movies: [
            { id:1, title: 'The boy in the striped pajamas', released: 2008 },
            { id:2, title: 'The pursuit of happiness', released: 2006 },
            { id:3, title: "Schindler's List", released: 1993 },

        ]
    },
    {
        id:2,
        name: 'Action',
        movies:[
            {id:1, title: 'Shooter', released: 2007 },
            {id:2, title: 'Nobody', released: 2021 },
            {id:3, title: 'Mad Max', released: 2015 },
        ]
    },
    {
        id:3,
        name: 'Sci-Fi',
        movies:[
            {id:1, title: 'Interstellar', released: 2014 },
            {id:2, title: 'Blade Runner', released: 2021 },
            {id:3, title: 'Matrix', released: 1999 },
        ]
    }
]