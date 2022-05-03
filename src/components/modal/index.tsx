import { useState } from 'react'

interface modal{
    dropdown:string
    modalRef?:string
    NavModel:Function
}

export default function Modal(props:modal){

    const {dropdown, NavModel} = props
    

    return(
        <>
            <div  className={`${dropdown} bottom`}>
                <div  onMouseLeave={()=>NavModel('off')}  className={`${dropdown} modal`}>
                        <p>Meu modal!</p>
                </div>
            </div>
        </>
        
    )
}