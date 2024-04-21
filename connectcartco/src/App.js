import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { ProductProvider } from './context/ProuductContext';
import CartProvider from './context/Cart.Context';
import CreateProduct from './pages/CreateProduct';
import Cart from './pages/Cart';
import RegisterAdmin from "./pages/RegisterAdmin";

function App() {
    return (
        <Router>
            <div className='App'>
                <header className='w-full h-16 bg-blue-300 drop-shadow-lg'>
                    <Menu />
                </header>
                <ProductProvider>
                    <CartProvider>
                        <Routes>
                            <Route path='/' element={<Dashboard />} />
                            <Route path='/cart' element={<Cart />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/register/admin' element={<RegisterAdmin />} />
                            <Route path='/login' element={<Login />} />
                            <Route
                                path='/createProduct'
                                element={<CreateProduct />}
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
                    </CartProvider>
                </ProductProvider>
            </div>
        </Router>
    );
}

export default App;
