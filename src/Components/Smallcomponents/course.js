import styled from 'styled-components'
const Course = ({course})=>{
    return (
        <Container>
        <Coursetype>{course}</Coursetype>
        <Buy>Buy Course</Buy>
        </Container>
    )
}
export default Course;
const Container= styled.div`
display: flex;
flex-direction: column;
`
const Coursetype = styled.p`
color: black;
font-size: 30px;
font-weight: bold;

`
const Buy = styled.button`
width: 150px;
height: 50px;
font-size: 20px;
color: black;
background: white;
outline: none;
border: 1px solid;
border-radius: 10px;
`
