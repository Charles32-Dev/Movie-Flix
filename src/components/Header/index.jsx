import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { Container, Menu, Li } from './style'
import { useState } from 'react'



function Header() {


    const [changeBackground, setChangeBackground] = useState(false)
    const { pathname } = useLocation()


    window.onscroll = () => {

        if (window.pageYOffset > 150) { setChangeBackground(true) }
        if (window.pageYOffset < 150) { setChangeBackground(false) }


    }

    return (

        <Container changeBackground={changeBackground}>

            <img src={Logo} alt='Logo-dev-movies' />

            <Menu>
                <Li isActive={pathname === '/'}>
                    <Link to="/">Home</Link>
                </Li>

                <Li isActive={pathname.includes('filmes')}>
                    <Link to="/Filmes">Filmes</Link>
                </Li>

                <Li isActive={pathname.includes('series')}>
                    <Link to="/Series">Series</Link>
                </Li>
            </Menu>
        </Container>

    )
}


export default Header