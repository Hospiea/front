import Image from 'next/image';
import styles from '../../study.module.css';
import CommentComp from '@/components/comment/comment';

const This = () => {

    return(
        <div className={styles.container}>
            <h3>자바스크립트에서의 this</h3>
            <div className={styles.body}>
                <div className={styles.content}>
                    <h2>1. C++과의 비교</h2>
                    <pre> - C++ : 생성된 인스턴스를 가리키는 포인터 그 자체를 의미한다</pre>
                    <pre> - JS  : 단정지을 수 없다</pre>
                </div>
                <div className={styles.content}>
                    <h2>2. 왜 JS에서는 this가 변화할까?</h2>
                    <pre> - 이유는 모른다. 다만 this의 공통적인 부분은 개인적인 결론으로는 실행된 실행 컨텍스트의 상위 객체를 의미한다는 것이다.</pre>
                </div>
                <div className={styles.content}>
                    <h2>3. 실행컨텍스트?</h2>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 단어가 어렵지만 프로그램의 실행 맥락이라고 이해했다. 가령 Main함수 내에서 B라는 함수를 불러서 B가 처리되는 동안은 실행컨텍스트라는 게 Main위에 B가 쌓여서 실행되고 있는거고 현재 실행컨텍스트는 B가 되는 것이라고 이해했다</p>
                </div>
                <div className={styles.content}>
                    <h2>4. 실행컨텍스트랑 this는 무슨관계일까?</h2>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 실행컨텍스트에 따라, 함수를 호출한 방법에 따라 this가 변화한다는 게 JS에서 this의 난해함인 것 같다.</p>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 우선 화살표함수와 function으로 선언한 함수에서 this의 차이를 정리하자면 다음과 같다.</p>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 화살표 : 함수의 선언위치에서의 상위 실행컨텍스트 / function : 함수의 실행 시점에서의 상위 실행 컨텍스트</p>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 다음 이미지를 자세히 보면,</p>
                    <Image src="/study/js.PNG" alt="No Source" width={800} height={300}/>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 이미지에는 나와있지 않지만 Person의 객체 a를 만들어 a.func()로 호출한 상태이다</p>
                    <p style={{whiteSpace: 'pre-wrap'}}> - Person내부의 func라는 함수에서 일반함수와 화살표함수의 this가 각기 다르게 나온다는 걸 알 수 있다</p>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 위 예제로 보면 화살표 함수가 선언되면서 상수 afunc에 담기는 시점에서의 상위 실행컨텍스트인 클래스 Person의 객체를 반환하는 것을 알 수 있고</p>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 비록 함수의 호출 모양새가 Person내부에서 호출한 것처럼 보이지만 ffunc는 특정 객체를 통해 호출한 것이 아닌 ffunc()로 함수 자체를 실행시켰기 때문에 window객체가 나와야 하나, 위 예제에서는 use strict 모드이기 때문에 undefined가 나온 모습이다</p>
                </div>
                <div className={styles.content}>
                    <h2>5. 과연 static은?</h2>
                    <p style={{whiteSpace: 'pre-wrap'}}> - static이란 정적이라는 뜻으로 클래스에 사용될 경우 특정 객체가 아닌 클래스 전체에 적용되는 속성을 의미한다</p>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 다음의 사진을 보면,</p>
                    <Image src="/study/static.PNG" alt="No Source" width={600} height={400}/>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 우선 static함수의 특징으로 객체를 생성하지 않고 클래스명으로 접근해 바로 메서드를 호출하는 걸 볼 수 있고</p>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 이 때 반환하는 값은 특정 객체가 아닌 Person이라는 클래스의 원형을 그대로 반환한다는 것을 볼 수 있다</p>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 특이한 점은 아래 사진을 보면,</p>
                    <Image src="/study/arrow.PNG" alt="No Source" width={600} height={400}/>
                    <p style={{whiteSpace: 'pre-wrap'}}> - static함수의 경우 화살표함수도 같은 Person클래스의 원형을 가리키는 걸 볼 수 있다.</p><br />
                    <p style={{textAlign: "center", whiteSpace: 'pre-wrap'}}> ----------- 여기부터는 뇌피셜입니다 -----------</p>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 이전에 C++을 배울 때 메모리구조에 대해 공부한 적이 있었는데 메모리 공간에 static은 별도의 메모리 영역을 할당받고 프로그램이 시작한다고 들었던 기억이 있다.</p>
                    <p style={{whiteSpace: 'pre-wrap'}}> - static을 처음 배울 때 static을 남발하면 메모리공간이 부족하지 않을까 걱정한 적이 있었는데 static에 필요한 메모리 영역을 미리 계산해서 그만큼을 할당하고 시작하는 것이다.</p>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 즉, 이 static함수를 메모리에 적재하는 과정 또한 하나의 실행 컨텍스트로 볼 때, Person이라는 클래스에서 이 함수를 메모리에 할당하는 실행컨텍스트를 실행시켰다고 생각해 볼 수 있지 않을까? 그렇다면 그 실행컨텍스트의 상위 컨텍스트인 Person이 this가 되는 것이고..</p>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 또한 static함수의 선언을 보면 왜 static에서는 화살표함수와 일반함수의 this의 차이가 없는지 추론해볼 수 있는데,</p>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 일반적으로 자바스크립트에서 함수는 일급객체로 특정 변수에 담을 수 있다는 특징이 있다. const func = {`() => {}`} 하는 식으로...</p>
                    <p style={{whiteSpace: 'pre-wrap'}}> - 하지만 static으로 선언한 함수의 경우 const키워드를 사용해 특정 변수에 담을 수 없는데, 이는 런타임 중 변화하는 스택, 또는 힙 메모리에 올라가는 const, let과 같은 변수가 아닌 정적 메모리 영역에 생성되는 객체이기 때문으로 이해하였다.</p>
                </div>

                <div>
                    <CommentComp type="comment"/>
                </div>
            </div>
        </div>
    )
}

export default This;