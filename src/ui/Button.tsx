/* eslint-disable @typescript-eslint/no-unused-vars */
import { cva, VariantProps } from "class-variance-authority"
import { ComponentProps, ComponentType } from "react"
import { twMerge } from "tailwind-merge"

const buttonStyle=cva(["transition-colors","pointer","px-3 py-1"],{
    variants:{
        variant:{
            default:["hover:bg-neutral-100 ","w-13 h-13","hover:rounded-full","transition-none"],
            green:["hover:bg-primary"],
            theme:['w-10 h-10 flex item-center justify-center p-3']
        } ,
        size:{
            default:[""],
            icon:["rounded-lg","p3","hover:bg-secondary-hover"]

        }
    
    },
    defaultVariants:{
        variant:"default",
        size:"default"
    }
})
type ButtonProps=VariantProps<typeof buttonStyle > & ComponentProps<"button"> &{
 
    
}

export default  function Button({variant,size,className,...props}:ButtonProps) {
    return <button {...props}  className={twMerge(buttonStyle({variant,size}),className)}/>

}