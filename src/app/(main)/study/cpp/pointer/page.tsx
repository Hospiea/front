import CommentComp from '@/components/comment/comment';
import styles from '../../study.module.css';

const Pointer = () => {

    return(
        <div className={styles.container}>
            <h3>유명한(?) 참조와 포인터!</h3>
            <div className={styles.body}>
                <div className={styles.content}>
                    <h2>1. 포인터</h2>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 포인터란 객체(인스턴스)가 실제 존재하는 메모리상의 위치를 가리키는 변수이다.</p>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 근데 가리키기만 하는데 왜 int* a 식으로 포인터의 앞에 타입을 붙이는 걸까?</p>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 이유는 그 포인터를 따라갔을 때 해당 메모리공간에 위치한 객체의 타입을 알려주는 역할을 하는 것이다.</p>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 가령 Knight라는 클래스 안에 hp라는 int 변수가 있다고 치면, knight.hp를 참조하려 할 때 어느위치를 정확히 참조해야될지를 알려주는 역할을 한다는 뜻이다.</p>
                </div>

                <div className={styles.content}>
                    <h2>2. 참조</h2>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 그럼 참조란 무엇일까? 참조란 특정 변수를 부르는 다른 이름을 지어준다고 생각하면 된다.</p>
                    <p style={{whiteSpace: 'pre-wrap'}}> - int a라는 정수형 타입 a변수를 선언했다고 가정할 때, int& b = a라고 하면 a라는 변수에 b라는 다른 이름으로 접근할 수 있는 새로운 변수를 생성해준다는 뜻이다.</p>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 포인터와 참조는 모두 실제 변수가 위치한 메모리상 위치에 접근해서 실제 원본 데이터를 조작할 수 있기 때문에 양날의 검이 된다.</p>
                </div>

                <div className={styles.content}>
                    <h2>3. 둘의 차이는?</h2>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 그럼 왜 원본에 접근할 수 있는 방법을 두가지로 나누어 두었을까?</p>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 나도 모른다. 하지만 참조가 등장한 나름대로의 이유를 추측하자면,</p>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 포인터같은 경우 초기화 없이 선언이 가능하지만 참조의 경우 반드시 초기화를 해야 한다.</p>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 그래서 포인터의 경우는 nullptr로 인한 크래쉬가 런타임에 아주 치명적인 문제를 일으키지만 참조의 경우 참조값이 null인 이유로 발생하는 크래쉬가 없다는 점에서 안정성이 우수하다.</p>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 따라서 나 같은 경우는 포인터를 써야만 하는 상황이 아니라면 주로 참조를 사용하는 걸 선호하는 편이다.(개인의 성향차이)</p>
                </div>

            </div>
            <div>
                <div>
                    <CommentComp type="commentcpp"/>
                </div>
            </div>
        </div>
    )
}

export default Pointer;