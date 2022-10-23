import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ListCidades from './components/cidades/ListCidades';
import CreateEstado from './components/estados/CreateEstado';
import ListEstados from './components/estados/ListEstados';
import ShowEstado from './components/estados/ShowEstado';
import UpdateEstado from './components/estados/UpdateEstado';
import Header from './components/header/Header';

const AppRoutes = () => {

    return(
        
        <BrowserRouter>

            <Header name='Israel' />

            <Routes>

                <Route path='/' element={<App />} />
                <Route path='/estados' element={<ListEstados />} />
                <Route path='/cidades' element={<ListCidades />} />
                <Route path='/estados/create' element={<CreateEstado />} />
                <Route path='/estados/show/:id' element={<ShowEstado />} />
                <Route path='/estados/update/:id' element={<UpdateEstado />} />

            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;