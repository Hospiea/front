import Link from "next/link";
import styles from '@/css/main/nav.module.css';


const Nav = () => {

    return(
        <div className={styles.container}>
            <Link className="link" href="/weather">날씨예보</Link>
            <Link className="link" href="/search">여행지 검색</Link>
            <Link className="link" href="/codiboard">제 코디 어때요?</Link>
            <Link className="link" href="/study">프로그래밍 스터디</Link>
            <Link className="link" href="/login">소셜로그인</Link>
        </div>
    )
}

export default Nav;