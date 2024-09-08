import Link from 'next/link';
import styles from './style.module.css';

const Study = () => {

    return(
        <div className={styles.container}>
            <div className={styles.inner}>
                <h2>프로그래밍 언어</h2>
                <Link className="link" href="/study/cpp">C++</Link>
                <Link className="link" href="/study/js">JS</Link>
                <Link className="link" href="/study/css">html/css</Link>
                <Link className="link" href="/study/flutter">Flutter</Link>
            </div>
        </div>
    )
}

export default Study;