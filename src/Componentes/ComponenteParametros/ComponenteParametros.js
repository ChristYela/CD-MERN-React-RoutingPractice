import { useParams } from 'react-router-dom';

const ComponenteParametros = props => {

    const {palabra, color, bg} = useParams();

    return (
        <div class="position-absolute top-50 start-50 translate-middle">
            {
                isNaN(palabra) ?
                    <div style={
                        //Si existe la variable color
                        color ?
                            {color: color, backgroundColor: bg}
                        :
                            null
                    } >The word is: {palabra}</div>
                :
                    <div>The number is: {palabra}</div>
            }
        </div>
    )


}

export default ComponenteParametros;