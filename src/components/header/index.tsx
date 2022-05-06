import Style from '../../styles/Header.module.css'
import Car from '../shop/Car'
import { useState } from 'react'
import Modal from '../modal'
import {controllNavModel} from '../../contexts/modalHeaderNav'

interface header{
    shoppingCart : number
}

export default function Header(prop:header){

    const [dropdown, setDropdown] = useState("");
    const [navMenu, setNavMenu] = useState("modelNav_one");
    const [modalChildren, setChildren] = useState(<></>);

    const offModal = (value:string)=>{
        controllNavModel(value,setDropdown,setNavMenu,setChildren)
    }

    return(
        <>
            <header className={Style.header}>
                <section className={Style.section}>
                    <div className={Style.sectionTitle}><h3>Zimermann</h3></div>
                    <div className={Style.sectionInputImg}>
                        <input className="input" type='text'/>
                        <img className={Style.sectionImg} width={25} height={25} src="lupa.png"></img>
                    </div>
                    <div className={Style.sectionRegister}><b>Bem-vindo</b><br/><a href="#"><u>Entre ou se cadastre</u></a></div>
                    <Car value={prop.shoppingCart??0}/>    
                </section>
                <section>
                    <nav className={Style.sectionMenuNavegation}>
                        <a onMouseOver={()=>controllNavModel('modelNav_one',setDropdown,setNavMenu,setChildren)} className={Style.sectionMenuButton}>Todos os departamentos</a>
                        <a onMouseOver={()=>controllNavModel('modelNav_two',setDropdown,setNavMenu,setChildren)} className={Style.sectionMenuButton}>Áudio</a>
                        <a onMouseOver={()=>controllNavModel('modelNav_three',setDropdown,setNavMenu,setChildren)} className={Style.sectionMenuButton}>Artesanato</a>
                        <a onMouseOver={()=>controllNavModel('modelNav_four',setDropdown,setNavMenu,setChildren)} className={Style.sectionMenuButton}>Automotivo</a>
                        <a onMouseOver={()=>controllNavModel('modelNav_five',setDropdown,setNavMenu,setChildren)} className={Style.sectionMenuButton}>Ar e Ventilação</a>
                        <a onMouseOver={()=>controllNavModel('modelNav_six',setDropdown,setNavMenu,setChildren)} className={Style.sectionMenuButton}>Eletrodomésticos</a>
                        <a onMouseOver={()=>controllNavModel('modelNav_seven',setDropdown,setNavMenu,setChildren)} className={Style.sectionMenuButton}>Artigos para Festa</a>   
                        <Modal menuNav={navMenu}Children={modalChildren} NavModel={offModal} dropdown={dropdown} />  
                    </nav>
                </section>
                
            </header>
        </>
    )
}