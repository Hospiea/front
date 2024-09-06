'use client'
import useOnStart from "@/hooks/useOnStart";
import axios from 'axios';
import styles from './page.module.css';

const Codi = () => {

    // useOnStart(async () => {
    //     const result = await axios.get("/api/codi");
    //     console.log(result);
    // })

    return(
        <div className={styles.container}>
            <h2>페이지 준비중입니다 🥰</h2>
        </div>
    )
}

export default Codi;