import './Styles.css';

const LectureItem = ({ lesson_title, site_url, image, price }) => {
    const price1 = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return (
        <div class="col mb-5">
            <div class="card h-100">
                <img class="card-img-top" src={image} alt="..." />

                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder">{lesson_title}</h5>
                        {price1} 원
                    </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <a class="btn btn-outline-dark mt-auto" href={site_url}>
                            강의 보러가기
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LectureItem;