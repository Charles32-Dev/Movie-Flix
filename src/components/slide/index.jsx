import { Swiper, SwiperSlide } from 'swiper/react'
import { Container } from '../slide/style'
import Card from '../Card'


function Slider({ Info, title }) {

    return (
        <>

            <Container>
                <h2>{title}</h2>
                <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'} className="swiper">

                    {Info.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Card item={item} />
                        </SwiperSlide>
                    )
                    )}

                </Swiper>
            </Container>


        </>
    )


}

export default Slider