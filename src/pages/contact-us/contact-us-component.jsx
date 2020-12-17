import React from 'react'
import { MainContainer, MainText, RedirectHome, SubText } from './contact-us-styles'
import { createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {selectUserName} from '../../redux/selectors'

const ContactUs = ({userName, history}) => {
    return (
        <MainContainer>
            <MainText>Hi {userName}</MainText>
            <SubText>Thanks for stopping by. This is a dummy site</SubText>
            <SubText>Feel free to play around. Have a good day</SubText>
            <span style={{fontSize:'100px'}} role="img" aria-label="smiley" aria-labelledby="smiley">&#128522;</span>
            <RedirectHome inverted onClick={() => history.push('/')}>Back to Home</RedirectHome>
        </MainContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    userName : selectUserName
})

export default withRouter(connect(mapStateToProps)(ContactUs))
