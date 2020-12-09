import React from 'react'
import styled from 'styled-components/macro'
import ReactPlayer from 'react-player'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 70vw;
`

const Description = styled.p`
    color: white;
`

const SuperWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Middle = (props) => {
    const { video, explanation } = props

    return (
        <SuperWrapper>
            <Wrapper>
                <ReactPlayer url={video} />
                <Description>{explanation}</Description>
            </Wrapper>
        </SuperWrapper>
    )
}

export default Middle