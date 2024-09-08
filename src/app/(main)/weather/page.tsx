'use client'

import useOnStart from '@/hooks/useOnStart';
import styles from './page.module.css';
import axios from 'axios';
import { useState } from 'react';

const Weather = () => {

    const [weather, setWeather] = useState("");

    useOnStart(async () => {
        const result = await axios.get("/api/weather");
        const text = result.data.response.body.items["item"][0].wfSv1;
        const formattedText = text.replace(/○/g, '\n○');
        setWeather(formattedText)
    });

    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>기상청 날씨예보</h2>
            </div>
            <div className={styles.body}>
                <pre>{weather === "" ? "기상청 데이터 가져오는 중... 잠시만 기다려 주세요" : weather}</pre>
            </div>
        </div>
    )
}

export default Weather;