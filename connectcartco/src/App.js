import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { ProductProvider } from './context/ProuductContext';
import UserProvider from './context/User.Context';
import CreateProduct from './pages/CreateProduct';
import Cart from './pages/Cart';
import RegisterAdmin from './pages/RegisterAdmin';
import PrivateRoute from './helpers/PrivateRoutes';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

function App() {
    return (
        <Router>
            <div className='App'>
                <ProductProvider>
                    <UserProvider>
                        <header className='w-full h-16 bg-blue-300 drop-shadow-lg'>
                            <Menu />
                        </header>
                        <Routes>
                            <Route
                                path='/dashboard'
                                element={
                                    <PrivateRoute>
                                        <Dashboard />
                                    </PrivateRoute>
                                }
                            />
                            <Route path='/cart' element={<Cart />} />
                            <Route path='/register' element={<Register />} />
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
                    </UserProvider>
                </ProductProvider>
            </div>
        </Router>
    );
}

export default App;
