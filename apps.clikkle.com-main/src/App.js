import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ThemeContextProvider from './style/theme';
import Main from './pages/Main';

const App = () => {
    return (
        <>
            <ThemeContextProvider>
                <Routes>
                    <Route path='/' element={<Main />} />
                </Routes>
            </ThemeContextProvider>
        </>
    );
};

export default App;
