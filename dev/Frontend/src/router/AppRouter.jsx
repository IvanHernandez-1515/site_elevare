import {BrowserRouter, Routes, Route} from 'react-router-dom';

//contador
import Counter from '../pages/Counter/Counter';
//mainpages
import HomePage from '../pages/home/Home';

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/example" element={<Counter />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRouter;