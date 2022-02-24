import Build from '../Components/Build'

const Homescreen= ()=>{
    return(
        <div>
            <Build price="$50.0" course="React Js Cousrse" date="10 December, 2020"/>
            <Build price="$70.0" course="Node Js Course" date="17 January, 2021" direc="row-reverse"/>
            <Build price="$50.0" course="Mongoose Course" date="25 March, 2021"/>
        </div>
    )
}
export default Homescreen;