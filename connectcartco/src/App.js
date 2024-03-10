import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DummyPage from './pages/DummyPage';

function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path='/page1' element={<DummyPage />} />
                    <Route
                        path='/'
                        element={<div className='text-4xl'>HI</div>}
                    />
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
