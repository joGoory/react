import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import '../css/new.css';

// css
// import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

// login
import LoginForm from './LoginForm';

import MyPage from './R095_reactThrottle';
import Register from './Register/Register';

export default function App() {
    let data = {
        email: 'enjoyk2@naver.com',
        pw: '1234',
        name: '조민정',
    };

    let [user, setUser] = useState('');
    let [mode, setMode] = useState('main');

    let nav = useNavigate();

    let changeMode = m => {
        m.preventDefault();
        setMode('myPage');
        nav('/myPage');
    };

    let registerDone = e => {
        e.preventDefault();
        setMode('main');
        nav('/');
        alert('회원가입이 완료되었습니다');
    };

    return (
        <div className="App">
            <HeaderAdmin userName={data.name} user={user} />
            <Routes>
                <Route path="/" element={<LoginForm data={data} changeMode={changeMode} setUser={setUser} />} />
                <Route path="/myPage" element={<MyPage user={user} nav={nav} />} />
                <Route path="/register_check" element={<Register registerDone={registerDone} nav={nav} />} />
            </Routes>

            <Footer />
        </div>
    );
}
