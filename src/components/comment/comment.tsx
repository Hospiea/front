'use client'

import styles from './style.module.css';
import useOnStart from "@/hooks/useOnStart";
import axios from 'axios';
import { useState, useRef } from 'react';

export interface CommentType {
    id: number;
    nickname: string;
    text: string;
    pw: string;
}


const CommentComp = () => {
    const [pw, setPw] = useState<string>("");
    const [clickedIndex, setClickedIndex] = useState(0);
    const [comments, setComments] = useState<CommentType[]>([]);
    const [newcomment, setNewcomment] = useState<CommentType>({id: -1, nickname: "", text: "", pw: ""});

    useOnStart(async ()=>{
        const result = await axios.get("/api/comment");
        const data: CommentType[] = result.data.map((item: CommentType) => {
            const newData: CommentType = {
                id: item.id,
                nickname: item.nickname,
                text: item.text,
                pw: item.pw,
            };
            return newData;
        });

        setComments(data);
      })
    
      const OnClick = async () => {
        const result = await axios.post("/api/comment", {nickname: newcomment.nickname, text: newcomment.text, pw: newcomment.pw}, {
            headers: {
                "RequestType" : "Create",
            }
        });
        if(result) {
                const temp = await axios.get("/api/comment");
                const data: CommentType[] = temp.data.map((item: CommentType) => {
                    const newData: CommentType = {
                        id: item.id,
                        nickname: item.nickname,
                        text: item.text,
                        pw: item.pw,
                    };
                    return newData;
                });
                setComments(data);
                alert("댓글이 등록되었습니다");
        
      }
    }

    const DeleteFunc = async (index: number) => {
        const result = await axios.post("/api/comment", 
            {
                id: index,
            },
            {headers: {
                "RequestType" : "Delete"
            }}
        );
        if(result) {
            const temp = await axios.get("/api/comment");
                const data: CommentType[] = temp.data.map((item: CommentType) => {
                    const newData: CommentType = {
                        id: item.id,
                        nickname: item.nickname,
                        text: item.text,
                        pw: item.pw,
                    };
                    return newData;
                });
                setComments(data);
            alert("댓글이 삭제되었습니다");
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>댓글 게시판(자유로운 의견 및 잘못된 부분 지적 환영입니다 ^^ 비밀번호는 중요하지 않은 까먹어도 되는 비밀번호로 설정해주세요!)</h1>
            </div>
            <div style={{marginTop: "0.5em"}}>
                {comments && comments.map((item, index) => {
                    return(
                        <div className={styles.commentbox} key={index}>
                            {item.nickname}님 : {item.text}
                            <input value={clickedIndex === index ? pw : ""} onClick={()=>{setPw(""); setClickedIndex(index);}} onChange={(e)=>{setPw(e.target.value);}} type="password" className={styles.deletebutton}></input>
                            <button onClick={(e)=>{
                                if(pw === item.pw){
                                    DeleteFunc(item.id);
                                }
                            }}>Delete</button>
                        </div>
                    )
                })}
            </div>
            <div className={styles.writebox}>
                <h3>댓글 남기기</h3>
                <div className={styles.inputbox}>
                    <input value={newcomment?.nickname} onChange={(e)=>{setNewcomment((prev)=>({...prev, nickname: e.target.value}))}} placeholder="닉네임"></input>
                    <textarea value={newcomment?.text} onChange={(e)=>{setNewcomment((prev)=>({...prev, text: e.target.value}))}} placeholder="내용"></textarea>
                    <input value={newcomment?.pw} onChange={(e)=>{setNewcomment((prev)=>({...prev, pw: e.target.value}))}} type="password" placeholder="비밀번호"></input>
                    <button onClick={OnClick}>Submit</button>
                </div>
            </div>
        </div>
    )
};

export default CommentComp;