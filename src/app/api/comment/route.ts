import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";


const GET = async (req:NextRequest) => {
    const result = await supabase.from('comment').select();
    console.log(result);

    return NextResponse.json(result.data);
}

export {GET}