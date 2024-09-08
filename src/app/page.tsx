'use client'
import useOnStart from "@/hooks/useOnStart";
import axios from 'axios';

export default function Home() {

  useOnStart(async ()=>{
    const result = await axios.get("/api/comment");
    console.log(result);
  })

  return (
    <div style={{display: "flex", justifyContent: "center", marginTop: "2em"}}>
      <h1>🥰 방문을 환영합니다 🥰</h1>
    </div>
  );
}
