export default function Button() {
    const handleClick = () => {
        console.log('Welcome to our site!');
    };

    return (
        <button onClick={handleClick} className='btn btn--primary'>
            Kezdhetjük
        </button>
    );
}
