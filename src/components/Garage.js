import Car from './Car'
import Class from './Class'

function Garage(props) {
    const {brand,color} = props
    const text = `This is a ${color} ${brand} Car`
    return(
        <div>
            <h1>{text}</h1>
            <Car/>
            <Class/>
        </div>
    )
}

export default Garage;