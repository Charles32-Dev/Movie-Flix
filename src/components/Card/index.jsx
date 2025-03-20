import { getImages } from "../../services/utils/getimages"
import { Container } from "../../components/Card/style"

function Card({ item }) {


    return (
        <Container>
            <img src={getImages(item.poster_path || item.profile_path)} alt="" />
            <h3>{item.title || item.name}</h3>
        </Container>
    )


}

export default Card