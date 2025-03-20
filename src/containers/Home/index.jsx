import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from '../../components/slide'
import { Background, Info, Poster, Container, ContainerButtons, } from './styles'
import Button from '../../components/button'
import { getImages } from '../../services/utils/getimages'
import Modal from '../../components/Modal'
import { getmovies, getTopMovies, getTopSeries, getPolularSeries, getPopularPerson } from '../../services/getData'



function Home() {

    const [movie, setMovie] = useState()
    const [topmovies, setTopMoveis] = useState()
    const [topseries, setTopSeries] = useState()
    const [popularseries, setPopularSeries] = useState()
    const [Personpopular, setPersonpopular] = useState()
    const [showmodal, setShowModal] = useState(false)


    const navigate = useNavigate()


    useEffect(() => {

        async function getAllData() {
            Promise.all([
                getmovies(),
                getTopMovies(),
                getTopSeries(),
                getPolularSeries(),
                getPopularPerson()
            ])

                .then(([movie, topmovies, topseries, popularseries, Personpopular]) => {

                    setMovie(movie)
                    setTopMoveis(topmovies)
                    setTopSeries(topseries)
                    setPopularSeries(popularseries)
                    setPersonpopular(Personpopular)

                })


        }
        getAllData()


    }, [])


    return (

        <>
            {movie && (

                <Background img={getImages(movie.backdrop_path)}>

                    {showmodal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista Agora</Button>
                                <Button onClick={() => setShowModal(true)}>Assistir Trailer</Button>
                            </ContainerButtons>
                        </Info>

                        <Poster>
                            <img alt="Capa-do-Filme" src={getImages(movie.poster_path)} />
                        </Poster>
                    </Container>
                </Background>
            )

            }
            {topmovies && <Slider Info={topmovies} title={'Top Filmes'} />}
            {topseries && <Slider Info={topseries} title={'Top Series'} />}
            {popularseries && <Slider Info={popularseries} title={'Series Populares'} />}
            {Personpopular && <Slider Info={Personpopular} title={'Artista Populares'} />}
        </>

    )
}


export default Home