import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// const APIKEY = process.env.NEXT_PUBLIC_AI_APIKEY;
// const openai = new OpenAI({apiKey: `${APIKEY}`});



// const GET = async (req:NextRequest) => {
//     const completion = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         messages: [
//             {"role": "user", "content": "write a haiku about ai"}
//         ]
//     });


//     return NextResponse.json(completion);
// }

// export {GET}