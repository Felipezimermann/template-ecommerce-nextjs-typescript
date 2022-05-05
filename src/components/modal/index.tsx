import Style from '../../styles/modalMenu.module.css'
import { useState } from 'react'
interface modal{
    dropdown:string
    NavModel:Function,
    menuNav:string
}


export default function Modal(props:modal){

    const {dropdown, NavModel ,menuNav} = props

    const menuCSS = (style:string)=>{

        if(menuNav == style){
            return 'blockModel'   
        }
        
        return 'noneModel'  
    }

    return(
        <>
            <div  className={`${dropdown}  bottom`}>
                <nav className={Style.sectionMenuNavegation}>
                        <div>
                            <a className={Style[menuCSS('modelNav_one')]}>Todos os departamentos</a>
                            <div  onMouseLeave={()=>NavModel('off')}  className={`${Style.modal} ${menuNav == 'modelNav_one'?'displayBlock':''} `}>
                                <a  >Áudio</a>
                            </div>
                        </div>
                        <div>
                        <a className={Style[menuCSS('modelNav_two')]}>Todos os departamentos</a>
                            <div  onMouseLeave={()=>NavModel('off')}  className={`${Style.modal} ${menuNav == 'modelNav_two'?'displayBlock':''} `}>
                                <a  >Áudio</a>
                            </div>
                        </div>
                        <div>
                            <a className={Style.noneModel}>Artesanato</a>
                            <div  onMouseLeave={()=>NavModel('off')}  className={Style.modal}>
                                <a  >Áudio</a>
                            </div>
                        </div>
                        <div>
                            <a className={Style.noneModel}>Automotivo</a>
                            <div  onMouseLeave={()=>NavModel('off')}  className={Style.modal}>
                                <a  >Áudio</a>
                            </div>
                        </div>
                        <div>
                            <a className={Style.noneModel}>Ar e Ventilação</a>
                            <div  onMouseLeave={()=>NavModel('off')}  className={Style.modal}>
                                <a  >Áudio</a>
                            </div>
                        </div>
                        <div>
                            <a className={Style.noneModel}>Eletrodomésticos</a>
                            <div  onMouseLeave={()=>NavModel('off')}  className={Style.modal}>
                                <a  >Áudio</a>
                            </div>
                        </div>
                        <div>
                            <a className={Style.noneModel}>Artigos para Festa</a>  
                            <div  onMouseLeave={()=>NavModel('off')}  className={Style.modal}>
                                <a  >Áudio</a>
                            </div>
                        </div>                        
                    </nav>
            </div>
        </>
        
    )
}