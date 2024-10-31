import Button from './components/Button';
import HeroIMG from './assets/images/hero.jpg';

function App() {
    return (
        <>
            <section className='hero'>
                <div className='hero__container'>
                    <div className='hero__left'>
                        <div>
                            <div>
                                <h2 className='hero-title color-primary'>Comnica Signature</h2>
                                <h4 className='text-bold '>Digitális aláíró szolgáltatás a Comnicától</h4>
                            </div>
                            <img className='hero__img' src={HeroIMG} alt='' />
                        </div>
                    </div>
                    <div className='hero__right'>
                        <div>
                            <h2 className='hero-title color-secondary '>
                                Üdvözlöm <br />a Comnica Signature-ben!
                            </h2>
                            <p className='right__text'>
                                A következökben végigvezetjük dokumentumai elfogadásán és aláírásán. A folyamat több percet is igénybe vehet. ezért
                                kérjük, csak akkor kezdje el. ha készen áll rá.
                            </p>
                            <Button />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
