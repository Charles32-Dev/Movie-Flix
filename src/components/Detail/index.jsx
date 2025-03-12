import { Background, Container, ContainerMovies, Cover, Info } from './style'
import { useEffect, useState } from "react"
import { getMovieById, getMovieVideos, getMovieCredits, getMovieSimilar } from '../../services/getData'
import { useParams } from "react-router-dom"
import { getImages } from '../../services/utils/getimages'
import SpanGenres from '../SpanGenres'
import Credits from '../Credits'
import Slider from '../../components/slide'


function Detail() {

    const { id } = useParams()
    const [movie, setMovie] = useState()
    const [movievideos, setMovieVideos] = useState()
    const [moviecredits, setMovieCredits] = useState()
    const [moviesimilar, setMovieSimilar] = useState()

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMovieById(id),
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id)
            ])

                .then(([movie, videos, credits, similar]) => {
                    setMovie(movie)
                    setMovieVideos(videos)
                    setMovieCredits(credits)
                    setMovieSimilar(similar)

                })


        }
        getAllData()


    }, [])


    return (

        <>
            {movie && (

                <>

                    <Background image={getImages(movie.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(movie.poster_path)} />
                        </Cover>
                        <Info>
                            <h2>{movie.title}</h2>
                            <SpanGenres genres={movie.genres} />
                            <p>{movie.overview}</p>
                            <div>
                                <Credits credits={moviecredits} />
                            </div>
                        </Info>
                        <div>Detalhe</div>
                    </Container>
                    < ContainerMovies>
                        {movievideos && movievideos.slice(0, 3).map(video => (
                            <div key={video.id}>
                                <h4>{video.name}</h4>
                                <iframe src={`http://youtube.com/embed/${video.key}`} height="500px" width="100%" title="Yotube Video Play" ></iframe>
                            </div>

                        ))}

                    </ContainerMovies>
                    {moviesimilar && <Slider Info={moviesimilar} title={'Filmes Similares'} />}


                </>
            )}
        </>

    )
}

export default Detail