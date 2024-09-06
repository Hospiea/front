import { NextRequest, NextResponse } from "next/server";
import axios from 'axios';
import { decode } from "punycode";

const GET = async (req:NextRequest) => {

    const result = await axios.get(
      "https://apihub.kma.go.kr/api/typ02/openApi/VilageFcstMsgService/getWthrSituation?pageNo=1&numOfRows=10&dataType=JSON&stnId=108&authKey=ihyUznJVRayclM5yVUWsjw"
    );    
    return NextResponse.json(result.data);

}

export {GET};