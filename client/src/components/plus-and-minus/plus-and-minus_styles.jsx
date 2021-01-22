import styled,{css} from 'styled-components'

const cartCard = css`
    color: white;
    margin: 0 auto
`

export const Quantity = styled.div`
    width: 23%;     
    display: flex;  
    ${(props) => props.cartCard ? cartCard : ``}
`

export const Icon = styled.div`
    cursor: pointer;
    user-select:none;
`

export const Value = styled.div`
    margin: 0 20px;
`