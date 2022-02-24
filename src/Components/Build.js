import styled from 'styled-components'
const Build = ({course, price, date, direc})=>{
    return(
        <div>
            <Container>
                <Wrapper direc={direc}>
                    <Datebox>
                        {date}
                    </Datebox>
                        <p>{course}
                        <Buy>Buy Course</Buy>
                        </p>
                        <h2>{price}</h2>
                </Wrapper>
            </Container>
        </div>
    )
}
export default Build;

const Container = styled.div`
width: 1000px;
height: 300px;
background: black;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
margin: 30px;
`
const Wrapper = styled.div`
width: 1000px;
height: 250px;
background: white;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: ${({direc})=> direc};

p{
    color: black;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
}

h2{
    color: green;
    margin: 20px;
}
`
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
const Buy = styled.button`
width: 150px;
height: 50px;
font-size: 20px;
color: black;
background: white;
outline: none;
border: 1px solid;
border-radius: 10px;
margin-top: 20px;
`