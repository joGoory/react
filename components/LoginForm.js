import React from 'react';
import { Link } from 'react-router-dom';
import '../css/new.css';

export default function LoginForm(props) {
    const _changeMode = props.changeMode;
    const _setUser = props.setUser;
    const _data = props.data;

    const matching = e => {
        e.preventDefault();
        const _id = document.getElementById('email_val');
        const _pw = document.getElementById('pw_val');
        if (_data.email === _id.value && _data.pw === _pw.value) {
            alert('로그인에 성공했습니다.');
            _changeMode(e);
            _setUser(_data.name);
        } else {
            alert('로그인에 실패했습니다.');
        }
    };

    return (
        <section className="main">
            <div className="m_login">
                <h3>
                    <span>
                        <img src={require('../img/main/log_img.png')} alt="" />
                    </span>
                    LOGIN
                </h3>
                <div className="log_box">
                    <form action="/LoginForm" method="post" onSubmit={e => matching(e)}>
                        <div className="in_ty1">
                            <span>
                                <img src={require('../img/main/m_log_i3.png')} alt="" />
                            </span>
                            <input type="text" id="email_val" name="email" placeholder="이메일" />
                        </div>
                        <div className="in_ty1">
                            <span className="ic_2">
                                <img src={require('../img/main/m_log_i2.png')} alt="" />
                            </span>
                            <input type="password" id="pw_val" name="pw" placeholder="비밀번호" />
                        </div>
                        <ul className="af">
                            <li>
                                <Link to={'/register_check'}>회원가입</Link>
                            </li>
                            <li className="pwr_b">
                                <a href="#n">비밀번호 재설정</a>
                            </li>
                        </ul>
                        <Link to={'/userPage'} />
                        <button className="s_bt" type="submit">
                            로그인
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
