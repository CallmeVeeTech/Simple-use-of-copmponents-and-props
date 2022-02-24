import styled from 'styled-components'

const Date = ({date})=>{
    return(
        <Datebox>
        {date}
    </Datebox>
    )
}
export default Date;
const Datebox = styled.button`
width: 200px;
height: 200px;
background: black;
color: white;
font-size: 35px;
outline: none;
border:  none;
border-radius: 10px;
margin: 0px 20px 0px 20px
`