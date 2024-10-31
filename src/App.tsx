import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserData from './components/UserData';
import NavBar from './components/navigation/NavBar';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/fetch' element={<UserData />} />
            </Routes>
        </>
    );
}

export default App;
