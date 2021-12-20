import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const FooterContainer = styled.footer`
    display: grid;
    grid-template-columns: minmax(auto, 1fr) auto minmax(auto, 1fr);
    border: 1px solid;
    border-color: ${ ({ theme }) => theme.colors.gray };
    height: 3em;
    text-align: center;
    justify-content: space-around;
    align-items: center;
`

const FABBotton = styled(Link)`
    border-radius: ${ ({ theme }) => theme.dims.borderRadius.normal };
    padding: ${ ({ theme }) => theme.dims.padding.largePadding };
    background-color: ${ ({ theme }) => theme.colors.black };
    color: ${ ({ theme }) => theme.colors.white };
    display: flex;
    font-size: 1.5em;
    align-items: center;
    justify-content: center;
    border: 0;
    box-shadow: ${ ({ theme }) => theme.shadows.dept2 };
    cursor: pointer;
    position: relative;
    top: -1em;
    text-decoration: none;
    transform-style: preserve-3d;

    &::after, &::before {
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        border-radius: 10px;
        position: absolute;
        z-index: -1;
        background-color: pink;
        transform: translateZ(-1px);
    }

    &::before {
        left: -10px;
        background-color: ${ ({ theme }) => theme.colors.blue }
    }
    
    &::after {
        right: -10px;
        background-color: ${ ({ theme }) => theme.colors.accent }
    }
`

const LoggedInFooter = () => 
<FooterContainer>
        <Link to='/videos'> Home </Link>
        <FABBotton to='/videos/nuevo'> + </FABBotton>
        <Link to='/usuario/perfil'> Perfil </Link>
    </FooterContainer>

const SimpleFooterContainer = styled.footer`
    background-color: ${({ theme}) => theme.colors.gray };
    padding: ${ ({ theme }) => theme.dims.padding.largePadding };
    text-align: center;
`

const LoggedOutFooter = () => <SimpleFooterContainer>
        <Routes>
            <Route path='/usuario/signup' element={<p>¿Ya tienes cuenta? <Link to='/usuario/signin'>Inicia Sesión</Link></p>}></Route>
            <Route path='/usuario/signin' element={<p>¿No tienes cuenta? <Link to='/usuario/signup'>Crea una cuenta</Link></p>}></Route>
        </Routes> 
    </SimpleFooterContainer>

export const Footer = () => {
    const user = useSelector( state => state.user.user )

    return (
        user ? <LoggedInFooter /> : <LoggedOutFooter />
    )
}