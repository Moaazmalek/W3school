
import Category from "./component/Category"
import HeaderPage from "./layout/HeaderPage"
import { topics } from "./data/home"
import { useState } from "react"


function App() {
  const [selectedCategory,setSelectedCategory]=useState<string>(topics[0])


  return (
    <div className="w-full h-screen">
      <HeaderPage/>
      <Category topics={topics} selectedCategory={selectedCategory}  setSelectedCategory={setSelectedCategory}/>
      <section className=" w-full min-h-[400px]  lg:body-logo-sky   flex justify-center  items-center " >
       <div className="flex flex-col gap-8">
        <h1 className="text-7xl font-bold text-slate-200">Learn to Code</h1>
        <p className="font-bold text-[#FFF4A3] text-xl ">With the world's largest web debeloper site.</p>
       </div>

      </section>
    </div>
  )
}

export default App
