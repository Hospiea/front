import Link from 'next/link';
import styles from './style.module.css';

const Cpp = () => {

    return(
        <div className={styles.container}>
            <h2>목차</h2>
            <ul>
                <li><Link className={`link`} href="cpp/pointer">참조와 포인터</Link></li>
            </ul>
        </div>
    )
}

export default Cpp;