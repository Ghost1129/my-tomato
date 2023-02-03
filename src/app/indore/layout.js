"use client"

import Navbar2 from "@/components/Navbar2";
import SelectionCard from "@/utils/SelectionCard";
import { useState } from "react";
import { useSelectedLayoutSegments } from 'next/navigation';


export default function IndoreLayout({children}) {
    const [active, setActive] = useState('order')
    const segment = useSelectedLayoutSegments();
    console.log(segment)
    return (

        <>
        <Navbar2/>
        <SelectionCard active={active} setActive={setActive} />
          {children}
        </>
      )
}