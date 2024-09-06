'use client'

import { useLayoutEffect, useEffect } from "react"

const useOnStart = (func: ()=> void) => {

    useEffect(()=>{
        func();
    }, []);

}

export default useOnStart;