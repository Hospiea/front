import { NextResponse } from "next/server";


const GET = async () => {

    return NextResponse.json({message: "Ok"});
}

export {GET};