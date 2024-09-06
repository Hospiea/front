
import CodiContent, {CodiContentProps} from '@/components/codiboard/content';
import styles from './page.module.css';

const Codiboard = () => {

    return(
        <div className={styles.container}>
            <h1>자신의 스타일을 자랑해주세요!</h1>
            <div className={styles.inner}>
                <CodiContent src="/image.jpg" title="냥님의 코디" body="어제 백화점 직원한테 넘어가서 모자샀는데 잘 어울리나요? ㅜㅜ 별론 것 같아서요" />
                <CodiContent src="/image2.jpeg" title="집냥님의 코디" body="저도 그저께 그 백화점 다녀왔어요 오늘 환불받으러 가요 눈빛연습 중이에요" />
            </div>
        </div>
    )
}

export default Codiboard;