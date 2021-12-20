import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Example = styled.div`
    background-color: ${ ({theme}) => theme.colors.dark };
    height: 200px;
    padding: 50px;

`
const Button = styled.button`
    border: solid 1px red;
    background-color: transparent;
    outline: 0;
    font-size: 1em;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.6);
    border-radius: 2px;
    margin: 15px;
`

const AppLink = styled(Link)`
    text-decoration: underline;
    font-weight: bold;
    text-transform: uppercase;
`

export const Home = () => {
    return (
        <div>
            <Example>
                <h1>Home ....</h1>
                <Button>Enviar</Button>
                <AppLink to='/videos'>Ir a Videos</AppLink>
            </Example>
        </div>
    )
}
