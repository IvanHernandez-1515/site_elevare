import {BrowserRouter, Routes, Route} from 'react-router-dom';

//mainpages
//contador
import Counter from '../pages/Counter/Counter';

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/example" element={<Counter />} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRouter;