import { useState, useEffect, use } from 'react'
import Slider from '../../components/slide'
import { Container } from './styles'

import { getTopMovies, getMoviesChanges, getMoviesPopular } from '../../services/getData'



function Home() {

    const [topmovies, setTopMoveis] = useState()
    const [changemovies, setChangeMovies] = useState()
    const [moviepolular, setMoviesPopular] = useState()


    useEffect(() => {

        async function getAllData() {
            Promise.all([
                getTopMovies(),
                getMoviesChanges(),
                getMoviesPopular()

            ])

                .then(([topmovies, changemovies, moviepolular]) => {


                    setTopMoveis(topmovies)
                    setChangeMovies(changemovies)
                    setMoviesPopular(moviepolular)

                })


        }
        getAllData()


    }, [])


    return (

        <>
            <Container >
                {changemovies && <Slider Info={changemovies} title={'Filmes em exibição'} />}
                {moviepolular && <Slider Info={moviepolular} title={''} />}
                {topmovies && <Slider Info={topmovies} title={'Top Filmes'} />}
            </Container>
        </>

    )
}


export default Home