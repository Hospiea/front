import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";


const GET = async (req:NextRequest) => {
    const result = await supabase.from('comment').select();
    console.log(result);

    return NextResponse.json(result.data);
}

const POST = async (req:NextRequest) => {
    const type = req.headers.get("RequestType");

    switch(type) {
        case "Delete": {
            const request = await req.json();
            const result = await supabase.from('comment').delete().eq("id", request.id);
            if(result) {
                return NextResponse.json({message: "Ok"});
            }
            break;
        }

        case "Create": {
            const request = await req.json();
            const result = await supabase.from('comment').insert(request);
            if(result){
                return NextResponse.json({message: "Ok"});
            }
            break;
        }
    }

    

    
}

export {GET, POST}

