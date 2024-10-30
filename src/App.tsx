import Button from './components/Button';

function App() {
    return (
        <>
            <section className='hero'>
                <div className='hero__container limit-width'>
                    <div>
                        <h2>Üdvözlöm a Comnica Signature-ben!</h2>
                        <h4>Digitális aláíró szolgáltatás a Comnicától</h4>
                    </div>
                    <div>
                        <p>
                            A következökben végigvezetjük dokumentumai elfogadásán és aláírásán. A folyamat többbb percet is igénybe vehet. ezért
                            kérjük, csak akkor kezdje el. ha készen áll rá.
                        </p>
                        <Button />
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
