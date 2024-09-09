'use client'

import useOnStart from "@/hooks/useOnStart";

export default function Home() {

  // useOnStart( ()=> {
  //   if(navigator.geolocation){
  //     navigator.geolocation.getCurrentPosition((position)=>{
  //       console.log(position);
  //     });
  //   }
  // })
  
  
  return (
    <div style={{display: "flex", justifyContent: "center", marginTop: "2em"}}>
      <h1>🥰 방문을 환영합니다 🥰</h1>
    </div>
  );
}
