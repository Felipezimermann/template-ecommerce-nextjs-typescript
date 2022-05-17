import Style from '../../styles/modalMenu.module.css'
import { Children, useState } from 'react'
interface modal{
    dropdown:string
    NavModel:Function,
    menuNav:string
    Children?: React.ReactNode
}


export default function Modal(props:modal){

    const {dropdown, NavModel ,menuNav,Children} = props

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
                        <div style={{color:'black'}} onMouseLeave={()=>NavModel('off')}>
                            <a className={Style[menuCSS('modelNav_one')]}>Todos os departamentos</a>
                            <div style={{'top': '113px','left': '48px'}} className={`${Style.modal} ${menuNav == 'modelNav_one'?'displayBlock':''} `}>
                                {Children}
                            </div>
                        </div>
                        <div style={{color:'black'}} onMouseLeave={()=>NavModel('off')}>
                        <a className={Style[menuCSS('modelNav_two')]}>Áudio</a>
                            <div style={{'top': '113px','left': '208px'}} className={`${Style.modal} ${menuNav == 'modelNav_two'?'displayBlock':'displayNone'} `}>
                                {Children}
                            </div>
                        </div>
                        <div style={{color:'black'}} onMouseLeave={()=>NavModel('off')} >
                            <a className={Style[menuCSS('modelNav_three')]}>Artesanato</a>
                            <div style={{'top': '113px','left': '208px'}} className={`${Style.modal} ${menuNav == 'modelNav_three'?'displayBlock':'displayNone'} `}>
                                {Children}
                            </div>
                        </div>
                        <div style={{color:'black'}} onMouseLeave={()=>NavModel('off')} >
                            <a className={Style[menuCSS('modelNav_four')]}>Automotivo</a>
                            <div style={{'top': '113px','left': '208px'}} className={`${Style.modal} ${menuNav == 'modelNav_four'?'displayBlock':'displayNone'} `}>
                                {Children}
                            </div>
                        </div>
                        <div style={{color:'black'}}  onMouseLeave={()=>NavModel('off')} >
                            <a className={Style[menuCSS('modelNav_five')]}>Ar e Ventilação</a>
                            <div style={{'top': '113px','left': '493px'}} className={`${Style.modal} ${menuNav == 'modelNav_five'?'displayBlock':'displayNone'} `}>
                                {Children}
                            </div>
                        </div>
                        <div style={{color:'black'}} onMouseLeave={()=>NavModel('off')} >
                            <a className={Style[menuCSS('modelNav_six')]}>Eletrodomésticos</a>
                            <div style={{'top': '113px','left': '493px'}} className={`${Style.modal} ${menuNav == 'modelNav_six'?'displayBlock':'displayNone'} `}>
                                {Children}
                            </div>
                        </div>
                        <div style={{color:'black'}} onMouseLeave={()=>NavModel('off')} >
                            <a className={Style[menuCSS('modelNav_seven')]}>Artigos para Festa</a>  
                            <div style={{'top': '113px','left': '523px'}} className={`${Style.modal} ${menuNav == 'modelNav_seven'?'displayBlock':'displayNone'} `}>
                                {Children}
                            </div>
                        </div>                        
                    </nav>
            </div>
        </>
        
    )
}