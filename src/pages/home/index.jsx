
import CardFilmes from '../../components/CardFilmes';
import './index.css'
const Home = () => {

    return (
        <div className='home container'>

            <CardFilmes
                img='https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg'
                alt='The Witcher'
                title='The Witcher'

            />

            <CardFilmes
                img='https://www.themoviedb.org/t/p/w533_and_h300_bestv2/k47JEUTQsSMN532HRg6RCzZKBdB.jpg'
                alt='Vikings: Valhalla'
                title='Vikings: Valhalla'

            />

            <CardFilmes
                img='https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cTTggc927lEPCMsWUsdugSj6wAY.jpg'
                alt='Uncharted: Fora do Mapa'
                title='Uncharted: Fora do Mapa'

            />

            <CardFilmes
                img='https://www.themoviedb.org/t/p/w533_and_h300_bestv2/x93QzAgtHeRGgfK51Jh6URClBG8.jpg'
                alt='Stranger Things'
                title='Stranger Things'

            />

            <CardFilmes
                img='https://www.themoviedb.org/t/p/w533_and_h300_bestv2/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg'
                alt='Peaky Blinders'
                title='Peaky Blinders'

            />

            <CardFilmes
                img='https://www.themoviedb.org/t/p/w533_and_h300_bestv2/wrhLyiY7ksW0fQCqNpa52qiOAH8.jpg'
                alt='Reacher'
                title='Reacher'

            />


        </div>
    );
}

export default Home;