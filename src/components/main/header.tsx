import styles from '@/css/main/header.module.css';
import Nav from './nav';

const Header = () => {

    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>날씨와 코디</h2>
            </div>
            <div className={styles.nav}>
                <Nav />
            </div>
        </div>
    )
}

export default Header;