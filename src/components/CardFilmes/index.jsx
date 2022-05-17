import { Link } from 'react-router-dom';
import './index.css'



const CardFilmes = (props) => {
    return (
        
            <div className="dev-card mt-4 mb-4">
                <img src={props.img} alt={props.alt} />
                <div className="dev-description">
                    <h3>{props.title}</h3>

                    <Link to={'/detalhes'} className='btn btn-primary'>Detalhes</Link>
                </div>
            </div>
        
    );
}

export default CardFilmes;