import './Styles.css';
import React, { useState } from 'react';

const Navogationbar = ({ isEdit, changepage }) => {
    let [modal, setModal] = useState(false)



    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-honey">
            <div className="container px-lg-5">
                <a className="navbar-brand" href="#!">
                    GGuldanzi
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#!">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#!" onClick={(event) => {
                                event.preventDefault(); // 브라우저 기본 동작 취소
                                setModal(!modal); // 모달 토글
                            }}>
                                About
                            </a>
                        </li>
                        {
                            modal ? <Modal /> : null
                        }
                        <li className="nav-item">
                            <a className="nav-link" href="https://open.kakao.com/o/spOv8ZAf">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function Modal() {
    return (
        <div className='modal'>
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}
export default Navogationbar;
