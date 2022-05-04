import Style from '../../styles/Header.module.css'
import { useState } from 'react'
interface modal{
    dropdown:string
    NavModel:Function
}


export default function Modal(props:modal){

    const {dropdown, NavModel} = props

    const style = {
        'position':'relative',
        'top':'-26px',
        'padding':'12px',
        'background':'#ffff',
        'border-radius':'5px',
        'color':'blue'  
    }
    
    return(
        <>
            <div  className={`${dropdown} displayBlock bottom`}>
                <div  onMouseLeave={()=>NavModel('off')}  className={`${dropdown} displayBlock modal`}>
                       <div>
                          <a >Áudio</a>
                       </div>
                </div>
            </div>
        </>
        
    )
}