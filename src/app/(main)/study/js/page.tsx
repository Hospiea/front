import Link from 'next/link';
import styles from './style.module.css';

const JS = () => {

    return(
        <div className={styles.container}>
            <h2>목차</h2>
            <ul className={styles.list}>
                <li><Link className="link" href="/study/js/this">자바스크립트에서의 this</Link></li>
                <li><Link className="link" href="">참조와 값</Link></li>
                <li><Link className="link" href="">자바스크립트에서 포인터 쓰는 방법</Link></li>

            </ul>
        </div>
    )
}

export default JS;