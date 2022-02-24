import styled from 'styled-components'
const Price = ({price})=>{
    return(
        <>
        <Cprice>
        {price}
        </Cprice>
        </>
    )
}
export default Price;

const Cprice = styled.h2`
color: green;
margin: 20px;
`