import styled from 'styled-components'
import Date from '../Components/Smallcomponents/date'
import Course from '../Components/Smallcomponents/course'
import Price from '../Components/Smallcomponents/price'

const Build = ({direc, date, course, price})=>{
    return(
        <div>
            <Container>
                <Wrapper direc={direc}>
                    <Date date={date}/>
                    <Course course={course}/>
                    <Price price={price}/>
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
`