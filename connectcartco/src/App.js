import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DummyPage from './pages/DummyPage';
import Menu from './components/Menu';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
    return (
        <Router>
            <div className='App'>
                <header className='w-full h-16 bg-blue-300 drop-shadow-lg'>
                    <Menu />
                </header>
                <Routes>
                    <Route path='/page1' element={<DummyPage />} />
                    <Route
                        path='/'
                        element={<div className='text-4xl'>HI</div>}
                    />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route
                        path='*'
                        element={
                            <div className='text-4xl text-red-500'>
                                Ooops Page not found :(
                            </div>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
