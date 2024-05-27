import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from 'react-router-dom';
import Menu from './components/Menu';
import { ProductProvider } from './context/ProuductContext';
import UserProvider from './context/User.Context';
import { Dashboard } from '@mui/icons-material';
import PrivateRoute from './helpers/PrivateRoutes';
import Home from './pages/Home';
import Cart from './pages/Cart';
import RegisterAdmin from './pages/RegisterAdmin';
import LoginPage from './pages/LoginPage';
import CreateProduct from './pages/CreateProduct';
import RegisterPage from './pages/RegisterPage';

function App() {
    return (
        <Router>
            <div className='App'>
                <ProductProvider>
                    <UserProvider>
                        <RoutesWithMenu />
                    </UserProvider>
                </ProductProvider>
            </div>
        </Router>
    );
}

function RoutesWithMenu() {
    const location = useLocation();

    return (
        <>
            {location.pathname !== '/login' &&
                location.pathname !== '/register' && (
                    <header className='w-full h-16 bg-blue-300 drop-shadow-lg'>
                        <Menu />
                    </header>
                )}
            <Routes>
                <Route
                    path='/'
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                />
                <Route path='/cart' element={<Cart />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/' element={<Home />} />
                <Route
                    path='/register/admin'
                    element={
                        <PrivateRoute isAdminRoute>
                            <RegisterAdmin />
                        </PrivateRoute>
                    }
                />
                <Route path='/login' element={<LoginPage />} />
                <Route
                    path='/createProduct'
                    element={
                        <PrivateRoute isAdminRoute>
                            <CreateProduct />
                        </PrivateRoute>
                    }
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
        </>
    );
}

export default App;
