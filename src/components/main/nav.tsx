import Link from "next/link";
import styles from '@/css/main/nav.module.css';


const Nav = () => {

    return(
        <div className={styles.container}>
            <Link className="link" href="">날씨예보</Link>
            <Link className="link" href="">오늘의 코디</Link>
            <Link className="link" href="">Hello</Link>
            <Link className="link" href="">Hello</Link>
            <Link className="link" href="">Hello</Link>
        </div>
    )
}

export default Nav;