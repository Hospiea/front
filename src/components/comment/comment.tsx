import styles from './style.module.css';

export interface CommentType {
    nickname: string;
    text: string;
    pw: string;
}


const CommentComp = () => {

    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>댓글 게시판(자유로운 의견 및 잘못된 부분 지적 환영입니다 ^^)</h1>
            </div>
            <div>
                
            </div>
        </div>
    )
};

export default CommentComp;