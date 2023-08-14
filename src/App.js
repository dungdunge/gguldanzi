import './App.css';
import LectureHeader from './LectureHeader';
import LectureList from './LectureList';
import Navogationbar from './Navigationbar';
import Footer from './Footer';
import LectureDetailList from './LectureDetailList';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [isEdit, setisEdit] = useState(true);
    const [num, setnum] = useState(1);
    const [data, setdata] = useState([]);
    //http://175.106.99.233:8000/
    const getData = async () => {
        try {
            //const response = await axios.get('http://223.130.134.164:8000/Post/');
            const response = await axios.get('http://175.106.99.233:8000/Post/');
            const res = response.data;
    
            const sortedData = res
                .slice(0, 200)
                .sort((a, b) => a.price - b.price) // 오름차순으로 정렬
                .map((it) => {
                    return {
                        id: it.id,
                        lesson_title: it.lesson_title,
                        image: it.image,
                        site_url: it.site_url,
                        price: it.price,
                        field: it.field,
                    };
                });
    
            setdata(sortedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

    useEffect(() => {
        getData(data);
    }, [data]);

    const changepage = (tmp) => {
        setisEdit(tmp);
    };

    const area = (num) => {
        setnum(num);
        console.log(num);
    };
    return (
        <div>
            <Navogationbar isEdit={isEdit} changepage={changepage}></Navogationbar>
            <LectureHeader isEdit={isEdit} changepage={changepage}></LectureHeader>
            {isEdit ? (
                <LectureList isEdit={isEdit} changepage={changepage} area={area} num={num}></LectureList>
            ) : (
                <LectureDetailList isEdit={isEdit} Lecture_list={data} num={num}></LectureDetailList>
            )}

            <Footer></Footer>
        </div>
    );
}

export default App;