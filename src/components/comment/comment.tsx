'use client'

import styles from './style.module.css';
import useOnStart from "@/hooks/useOnStart";
import axios from 'axios';
import { useState } from 'react';

export interface CommentType {
    nickname: string;
    text: string;
    pw: string;
}


const CommentComp = () => {

    const [comments, setComments] = useState<CommentType[]>([]);

    useOnStart(async ()=>{
        const result = await axios.get("/api/comment");
        const data: CommentType[] = result.data.map((item: CommentType) => {
            const newData: CommentType = {
                nickname: item.nickname,
                text: item.text,
                pw: item.pw,
            };
            return newData;
        });

        setComments(data);
      })
    


    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>댓글 게시판(자유로운 의견 및 잘못된 부분 지적 환영입니다 ^^)</h1>
            </div>
            <div style={{marginTop: "0.2em"}}>
                {comments && comments.map((item, index) => {
                    return(
                        <div key={index}>
                            {item.nickname}님 : {item.text}
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default CommentComp;