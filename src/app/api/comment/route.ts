import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";


const GET = async (req:NextRequest) => {
    const comptype = req.headers.get("CompType") as string;
    const result = await supabase.from(comptype).select();
    console.log(result);

    return NextResponse.json(result.data);
}

const POST = async (req:NextRequest) => {
    const type = req.headers.get("RequestType");
    const comptype = req.headers.get("CompType") as string;
    switch(type) {
        case "Delete": {
            const request = await req.json();
            const result = await supabase.from(comptype).delete().eq("id", request.id);
            if(result) {
                return NextResponse.json({message: "Ok"});
            }
            break;
        }

        case "Create": {
            const request = await req.json();
            const result = await supabase.from('comptype').insert(request);
            if(result){
                return NextResponse.json({message: "Ok"});
            }
            break;
        }
    }

    

    
}

export {GET, POST}

