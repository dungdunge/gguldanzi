import './Styles.css';

const LectureHeader = ({ isEdit, changepage }) => {
    return (
        <div>
            <header className="py-5">
                <div className="container px-lg-5">
                    <div className="p-4 p-lg-5 bg-honey rounded-3 text-center">
                        <a className="btn btn-primary btn-lg" onClick={() => { changepage(!isEdit) }}>
                            Home
                        </a>
                        <div className="m-4 m-lg-5">
                            {/* <h1 className="display-5 fw-bold">A warm welcome!</h1> */}
                            <h1 className="display-8 fw-bold">
                                무언가를 시작하는 방법은 말하는 것을 멈추고 실행에 옮겨 행동하는 것이다. <br /></h1>
                            <br/><h5>-월트 디즈니</h5>

                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default LectureHeader;
