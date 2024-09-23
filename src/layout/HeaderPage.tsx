import { SiW3Schools } from "react-icons/si";
import { TiArrowSortedDown } from "react-icons/ti";
import { GiGraduateCap } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { BsStars } from "react-icons/bs";
import { IoInvertMode } from "react-icons/io5";

import Button from "../ui/Button";
import { useEffect, useState } from "react";



export default function HeaderPage() {
    const [theme,setTheme]=useState(localStorage.getItem('theme')?localStorage.getItem('theme'):'dark')
   
    const element = document.documentElement; //html element
  useEffect(() => {
    if (theme == "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
    return <header className="py-3 px-4 dark:bg-nav-color bg-white shadow-nav-color shadow-md  flex  justify-between w-full text-sm dark:text-white text-black">
        <div className="md:hidden flex  gap-1.5">
        <SiW3Schools className="h-10 w-10 text-primary flex-shrink-0  hover:text-slate-300"/>
        <Button className="flex items-center justify-center gap-1" variant="green">
            Menu
             <TiArrowSortedDown/>
         </Button>
        <form className="flex items-center relative">

<input   type='search'placeholder="Search..." className="py-2 rounded-full px-2 outline-none  border focus:border-[3px] border-collapse h-10 focus:border-primary  box-border italic"/>
<Button className="absolute  right-0  text-black bg-none text-xl font-bold  h-full " >
    <CiSearch className=""/> 
</Button>

</form>

        <Button className="flex items-center justify-center hover:bg-secondary-hover  rounded-full"variant="theme"  onClick={() => setTheme(theme==="dark"?"light":"dark")}>
                <IoInvertMode  className="text-9xl"/>
            </Button>

        </div>
        <div className="hidden gap-4  h-full  md:flex items-center ">
             <SiW3Schools className="h-10 w-10 text-primary flex-shrink-0  hover:text-slate-300"/>
        <Button className="flex  items-center " variant="green">
            Tutorials <TiArrowSortedDown/>
         </Button>
        <Button className="flex justify-center items-center " variant="green">
            Exercises <TiArrowSortedDown/>
         </Button>
        <Button className="flex justify-center items-center " variant="green">
            Certificates <TiArrowSortedDown/>
         </Button>
        <Button className="flex justify-center items-center " variant="green">
            Services <TiArrowSortedDown/>
         </Button>
         <form className="flex items-center relative">

            <input   type='search'placeholder="Search..." className="py-2 rounded-full px-2 outline-none  border focus:border-[3px] border-collapse h-10 focus:border-primary  box-border italic"/>
            <Button className="absolute  right-0  text-black bg-none text-xl font-bold  h-full " >
                <CiSearch className=""/> 
            </Button>
           
            </form>
            <Button className="flex items-center justify-center hover:bg-secondary-hover  rounded-full"variant="theme" onClick={() => setTheme(theme==="dark"?"light":"dark")}>
                <IoInvertMode className="text-9xl" />
            </Button>

          

        </div>
        <div className="hidden gap-3  justify-end md:flex ">
            <Button variant="default" className="flex jsutify-center items-center  gap-1 " size="icon">
            <GiGraduateCap className="text-violet-500"/> For Teachers
            </Button>
            <Button variant="default" className="flex jsutify-center items-center  gap-1" size="icon">
            <BsStars className="text-violet-500"/> Plus
            </Button>
            <Button variant="default" className="flex jsutify-center items-center  gap-1" size="icon">
            <GiGraduateCap className="text-violet-500"/> Spaces
            </Button>
            <Button variant="default" className="flex jsutify-center items-center  gap-1" size="icon">
            <FaCartShopping className="text-violet-500"/> Get Certified
            </Button>
             <div className="  hidden md:flex w-32 ">
           <button className="  bg-green-200 hover:bg-primary text-black hover:text-white h-10 rounded-r-full  relative w-[100%] text-right pr-4 ml-6">
            Log in 
            <button className="bg-primary text-white  w-20 h-10 rounded-full absolute top-0 -left-10 ">
            Sign up 
           </button>
           </button>
           
        </div>
        
       
        </div>
        <div className="   md:hidden flex  w-32 ">
           <button className="bg-primary text-white h-10 rounded-r-full  relative w-[100%] text-right pr-4 ml-4 font-semibold">
           Log in
            <button className="bg-white text-black w-20 h-10 rounded-full absolute top-0 -left-10 font-semibold">
           Sign up
           </button>
           </button>
           
        </div>
       


    </header>
}