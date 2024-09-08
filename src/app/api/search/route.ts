import { NextRequest, NextResponse } from "next/server";
import axios from 'axios';

const KEY = process.env.NEXT_PUBLIC_AI_APIKEY;



const POST = async (req:NextRequest) => {
    const request = await req.json();
    const region = request.Region;
    const sign = request.Sign;

    const result = await axios.get(`https://apis.data.go.kr/B551011/TarRlteTarService/areaBasedList?serviceKey=${KEY}&pageNo=1&numOfRows=50&MobileOS=ETC&MobileApp=qwe&baseYm=202408&areaCd=${region}&signguCd=${sign}&_type=json`)

    return NextResponse.json(result.data);
}

export {POST}