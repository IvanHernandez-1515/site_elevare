import {BrowserRouter, Routes, Route} from 'react-router-dom';
//layouts
import { DashboardLayout } from '../components';
//contador
import Counter from '../features/Counter/Counter';
//mainpages
import HomePage from '../pages/home/Home';
import HomePage2 from '../pages/homev2/HomePage2';
import LoginPage from '../features/auth/login/ui/LoginPage';
import RegisterPage from '../features/auth/register/ui/RegisterPage';
import { ForgotPasswd } from '../features/auth/ForgotPass';

//features
import DashboardHomePage from '../features/dashboard/home/ui/DashboardHomePage';
import ProfilePage from '../features/dashboard/profile/ui/ProfilePage';

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/example" element={<Counter />} /> {/* No-index */}
                {/* Publico */}
                <Route path="/" element={<HomePage />} />
                <Route path="/home2" element={<HomePage2 />} />
                {/* Auth */}
                <Route path="/iniciar-sesion" element={<LoginPage />} /> {/* No-index */}
                <Route path="/registrarse" element={<RegisterPage />} /> {/* No-index */}
                <Route path="/recuperar" element={<ForgotPasswd />} /> {/* No-index */}
                {/* Dashboard */}
                <Route path="/app" element={<DashboardLayout />}>
                    <Route index element={<DashboardHomePage />} />
                    <Route path="perfil" element={<ProfilePage />} />
                    {/* <Route path="ajustes" element={<SettingsPage />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRouter;