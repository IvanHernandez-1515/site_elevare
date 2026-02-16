import {BrowserRouter, Routes, Route} from 'react-router-dom';

//contador
import Counter from '../pages/Counter/Counter';
//mainpages
import HomePage from '../pages/home/Home';
import AuthPage from '../pages/auth/AuthPage';
import LoginForm from '../pages/auth/LoginForm';

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/example" element={<Counter />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/iniciar-sesion" element={<LoginForm />} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRouter;