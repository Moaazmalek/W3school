/* eslint-disable @typescript-eslint/no-unused-vars */
// import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { MdOutlineChevronLeft,MdOutlineChevronRight } from "react-icons/md";

type CategoryProps = {
    topics:string[],
    selectedCategory:string ,
    setSelectedCategory:(category:string) => void
}
export default function Category({topics,setSelectedCategory,selectedCategory}:CategoryProps) {
    const [Translate,setTranslate]=useState(0)
    const [isLeftVisible,setIsLeftVisible]=useState(false)
    const [isRightVisible,setIsRightVisible]=useState(false)
    const TRANSLATE_AMOUNT=200

    const containerRef=useRef<HTMLDivElement>(null);
    const categoryNav=topics.map((topic,index) => <a key={index} className={`min-w-fit tracking-tight hover:bg-black hover:text-white py-3  px-3 ${topic ===selectedCategory ?"bg-primary":""}`} onClick={()=>setSelectedCategory(topic)}>{topic}</a>)

    useEffect(()=> {
        if(containerRef.current ==null) return 
        
        const observer= new ResizeObserver(entries => {
            const container=containerRef.current
            if(container==null) return
            setIsLeftVisible(Translate>0)
            setIsRightVisible(Translate + container.clientWidth <container.scrollWidth)
        });
        observer.observe(containerRef.current)
        return () => {
            observer.disconnect()
        }

        

    },[Translate])
    return <div className="dark:text-white     text-xs font-semibold overflow-x-hidden   dark:bg-transparent  relative "ref={containerRef} >
          
          <div className="flex  whitespace-nowrap gap-4  text-white transition-transform w-[max-content] px-10   min-h-full " style={{transform:`translateX(-${Translate}px)`}}>
          {
            categoryNav

           }
          
              
          </div>

         { isLeftVisible && (
            <div className="absolute top-1/2 -translate-y-1/2  w-24 h-full  bg-gradient-to-r from-60% from-nav-color to-transparent -left-5  cursor-pointer ">
            <MdOutlineChevronLeft className=" h-full aspect-square w-auto mx-auto  p-1.5  hover:bg-black  text-white " onClick={() => {
             setTranslate(translate => {
                 const newTranslate= translate - TRANSLATE_AMOUNT
                 if(newTranslate <=0) 
                     return 0
                 return newTranslate
             })
            }} />
            </div>
         )} 
           {isRightVisible && (
            <div  className="absolute top-1/2 -translate-y-1/2 -right-3 w-24 h-full    bg-gradient-to-l from-60% from-nav-color to-transparent" onClick={() => {
                setTranslate(translate => {
                    const newTranslate=translate + TRANSLATE_AMOUNT
                    if(containerRef.current ==null) return translate 
    
                    const edge=containerRef.current.scrollWidth;
                    const width=containerRef.current.clientWidth
                    if(newTranslate + width >= edge) {
                        return edge - width
                    }
                    return newTranslate
    
    
                })
               }}>
              <MdOutlineChevronRight className=" h-full  aspect-square  p-1.5   cursor-pointer   w-auto mx-auto    hover:bg-black text-white "/>
               </div>
           )}
          
        
        </div>
}