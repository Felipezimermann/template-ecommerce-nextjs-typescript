import Style from '../../styles/Header.module.css'
import Car from '../shop/Car'
import { useState } from 'react'
import Modal from '../modal'

interface header{
    shoppingCart : number
}

export default function Header(prop:header){

    const [dropdown, setDropdown] = useState("");
    const [navMenu, setNavMenu] = useState("modelNav_one");



  const controllNavModel = (event:string)=>{
    switch(event){
      case 'modelNav_one':
         setNavMenu('modelNav_one')
         setDropdown("displayBlock");
        break
        case 'off':
          setDropdown('');
        break
    }
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
                        <a onMouseOver={()=>controllNavModel('modelNav_one')} className={Style.sectionMenuButton}>Todos os departamentos</a>
                        <Modal menuNav={navMenu} NavModel={controllNavModel} dropdown={dropdown} />  
                        <a  className={Style.sectionMenuButton}>Áudio</a>
                        <a className={Style.sectionMenuButton}>Artesanato</a>
                        <a className={Style.sectionMenuButton}>Automotivo</a>
                        <a className={Style.sectionMenuButton}>Ar e Ventilação</a>
                        <a className={Style.sectionMenuButton}>Eletrodomésticos</a>
                        <a className={Style.sectionMenuButton}>Artigos para Festa</a>   
                    </nav>
                </section>
                
            </header>
        </>
    )
}