import { useEffect, useState } from "react"
import { Container, Background } from "./style"
import close from '../../assets/close.png'
import { getMovieVideos } from "../../services/getData"


function Modal({ movieId, setShowModal }) {

    const [movie, setMovie] = useState()


    useEffect(() => {


        async function getMovies() {

            setMovie(await getMovieVideos(movieId))
        }

        getMovies()

    }, [])

    return (


        <Background onClick={() => setShowModal(false)}>
            {movie && (
                <Container>
                    <div> <img src={close} alt="" /></div>
                    <iframe src={`http://youtube.com/embed/${movie[0].key}`} height="500" width="100%" title="Yotube Video Play" ></iframe>
                </Container>
            )}
        </Background>



    )
}

export default Modal