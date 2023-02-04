import Navbar2 from "@/components/Navbar2";
import DeliveryPage from "@/containers/DeliveryPage";
import DinePage from "@/containers/DinePage";
import NightlifePage from "@/containers/NightlifePage";
import SelectionCard from "@/utils/SelectionCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



export default function IndoreLayout({children}) {
    const router = useRouter();
    const page = router.query.page
    const [active, setActive] = useState({
        order: page === 'orderfood' ? true : false,
        dine: page === 'dine' ? true : false,
        night: page === 'night' ? true : false,
    })
    useEffect(() => {
        setActive({
            order: page === 'orderfood' ? true : false,
            dine: page === 'dine' ? true : false,
            night: page === 'night' ? true : false,
        })
    }, [page])
    return (

        <>
        <Navbar2/>
        <SelectionCard active={active} setActive={setActive} />
        { active.order && <DeliveryPage/>}
        { active.dine && <DinePage/>}
        { active.night && <NightlifePage/>}
        </>
      )
}