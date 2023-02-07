import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import DeliveryPage from "@/containers/DeliveryPage";
import DinePage from "@/containers/DinePage";
import NightlifePage from "@/containers/NightlifePage";
import Filters from "@/utils/Filters";
import SelectionCard from "@/utils/SelectionCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



export default function IndoreLayout({children}) {
    const router = useRouter();
    const page = router.query.page
    const [active, setActive] = useState({
        order: true,
        dine: false,
        night: false,
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
       <div className="lg:max-w-[70%] mx-auto">
        <Navbar2/>
        <SelectionCard active={active} setActive={setActive} />
        <Filters page={page}  />
        </div>
        <div className="">
        { active.order && <DeliveryPage active={active}/>}
        { active.dine && <DinePage active={active}/>}
        { active.night && <NightlifePage active={active}/>}
        </div>
        <Footer/>
        </>
       
      )
}