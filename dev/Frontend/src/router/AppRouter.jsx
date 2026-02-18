import {BrowserRouter, Routes, Route} from 'react-router-dom';

//contador
import Counter from '../features/Counter/Counter';
//mainpages
import HomePage from '../features/home/Home';
import LoginForm from '../features/auth/LoginForm';
import RegisterPage from '../features/auth/register/ui/RegisterPage';
import { ForgotPasswd } from '../features/auth/ForgotPass';

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/example" element={<Counter />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/iniciar-sesion" element={<LoginForm />} />
                <Route path="/registrarse" element={<RegisterPage />} />
                <Route path="/recuperar" element={<ForgotPasswd />} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRouter;