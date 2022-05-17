
import { Link } from 'react-router-dom';
import './index.css'
const Detalhes = () => {

    return (
        <div className='container'>

            <div className="dev-card-2 mt-4 mb-4">
                <img src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg" alt="The Witcher" />
                <div className="dev-description-2">
                    <h3>The Witcher</h3>
                    <p>
                        <span>Ano: 2019</span>
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>

                    <Link to={'/favoritos'} className='btn btn-primary'>Adicionar aos Favoritos</Link>
                </div>
            </div>

        </div>
    );
}

export default Detalhes;