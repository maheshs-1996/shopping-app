import React from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { MainContainer, MainText, RedirectHome, SubText } from './static-component-styles'
import { selectUserName } from '../../redux/selectors'

const StaticTemplate = ({ userName, history, mainText, subText }) => {
    return (
        <MainContainer>
            <MainText>Hi {userName}</MainText>
            <SubText>{mainText}</SubText>
            <SubText> {subText} </SubText>
            <span style={{ fontSize: '100px' }} role="img" aria-label="smiley" aria-labelledby="smiley">&#128522;</span>
            <RedirectHome inverted onClick={() => history.push('/')}>Back to Home</RedirectHome>
        </MainContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    userName: selectUserName
})

export default withRouter(connect(mapStateToProps)(StaticTemplate))
