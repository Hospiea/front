import styles from '@/css/main/header.module.css';
import Nav from './nav';
import Link from 'next/link';

const Header = () => {

    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <h2><Link className={`link ${styles.header}`} href="/">날씨와 코디</Link></h2>
            </div>
            <div className={styles.nav}>
                <Nav />
            </div>
        </div>
    )
}

export default Header;