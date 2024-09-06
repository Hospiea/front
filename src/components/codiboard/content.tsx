import Image from "next/image";
import styles from "./style.module.css";

export interface CodiContentProps {
    src: string;
    title: string;
    body: string;
}


const CodiContent = ({src, title, body}: CodiContentProps) => {

    return(
        <div className={styles.container}>
            <div className={styles.image}>
                <Image style={{borderRadius: "1em"}} src={src} alt="No Source" fill />
            </div>
            <div className={styles.paragraph}>
            <div>
                <h2>{title}</h2>
            </div>
            <div style={{marginTop: "0.2em"}}>
                <p>{body}</p>
            </div>
            </div>
        </div>
    )
}

export default CodiContent;