import {BrowserRouter, Routes, Route} from 'react-router-dom';

//contador
import Counter from '../pages/Counter/Counter';
//mainpages
import HomePage from '../pages/home/Home';
import LoginForm from '../pages/auth/LoginForm';
import RegisterForm from '../pages/auth/RegisterForm';
import { ForgotPasswd } from '../pages/auth/ForgotPass';

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/example" element={<Counter />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/iniciar-sesion" element={<LoginForm />} />
                <Route path="/registrarse" element={<RegisterForm />} />
                <Route path="/recuperar" element={<ForgotPasswd />} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRouter;