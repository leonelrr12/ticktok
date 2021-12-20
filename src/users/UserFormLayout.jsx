import React from 'react'
import styled from 'styled-components'
import { CenteredContainer, SmallContainer as SmallContainerTemplate, Title } from '../theme'

const SmallContainer = styled(SmallContainerTemplate)`
    text-align: center;
`

const Header = styled.header`
    text-align: center;
    margin-bottom: ${ ({ theme }) => theme.dims.margin.normal };
`

export const UserFormLayout = (props) => {
    return (
        <CenteredContainer>
            <SmallContainer>
                <Header>
                    <img src="/logo.svg" alt="Logo Aplicación" height="100"/>
                    <div>
                        <Title>TicTak</Title>
                    </div>
                </Header>
                { props.children }
            </SmallContainer>
        </CenteredContainer>
    )
}
