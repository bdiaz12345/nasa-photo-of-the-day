import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
`

const Title = styled.h1`
    color: white;
`

const NasaTitle = styled.h2`
    color: white;
`

const Header = (props) => {
    const { title } = props;
    
    return(
        <Wrapper>
            <Title>NASA Photo of the Day</Title>
            <NasaTitle>{title}</NasaTitle>
        </Wrapper>
    )
}

export default Header