import Style from '../../styles/Header.module.css'
import Car from '../shop/Car'

interface header{
    shopValue? : number
}

export default function Header(prop:header){
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
                    <Car value={prop.shopValue??0}/>    
                </section>
                <section>
                    <nav>
                        <a>Acessórios de Tecnologia</a>
                        <a>Ar e Ventilação</a>
                        <a>Artesanato</a>
                        <a>Artigos para Festa</a>
                        <a>Acessórios de Tecnologia</a>
                        <a>Ar e Ventilação</a>
                        <a>Artesanato</a>
                        <a>Artigos para Festa</a>
                        <a>Áudio</a>
                        <a>Automotivo</a>
                        <a>Bebês</a>
                        <a>Beleza  Perfumaria</a>
                        <a>Bem-estar Sexual</a>
                        <a>Brinquedos</a>
                        <a>Cama, Mesa e Banho</a>
                        <a>Câmeras e Drones</a>
                        <a>Casa e Construção</a>
                        <a>Casa Inteligente</a>
                        <a>Celular e Smartphone</a>
                        <a>Colchões</a>
                        <a>Comércio e Indústria</a>
                    </nav>
                </section>
                
            </header>
        </>
    )
}