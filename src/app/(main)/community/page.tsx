import CommunityContent from '@/components/community/content';
import styles from './style.module.css';

const Community = () => {

    return(
        <div className={styles.container}>
            <h2 style={{textAlign: "center"}}>커뮤니티</h2>
            <div className={styles.bar}>
                <h2>작성자</h2>
                <h2>제목</h2>
                <h2>일시</h2>
                <h2>공개/비공개</h2>
            </div>
            <div className={styles.content}>
                <CommunityContent />
            </div>
        </div>
    )
}

export default Community;