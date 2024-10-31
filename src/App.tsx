import Button from './components/Button';
// import HeroIMG from './assets/images/laptop.webp';
import HeroIMG from './assets/images/hero.webp';
import BackgroungIMG from './assets/images/bg.webp';

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
                            <img className='hero__img' src={HeroIMG} alt='illustration' />
                        </div>
                        <img className='bg__image left' src={BackgroungIMG} alt='abstract lines' />
                    </div>
                    <div className='hero__right'>
                        <img className='bg__image right' src={BackgroungIMG} alt='abstract lines' />
                        <div>
                            <h2 className='hero-title color-secondary '>Üdvözlöm a Comnica Signature-ben!</h2>
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
