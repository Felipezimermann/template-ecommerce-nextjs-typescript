export default function Header(){
    return(
        <>
            <header className="header">
                <section className="section">
                    <div className="sectionTitle"><h3>Zimermann</h3></div>
                    <div className="sectionInputImg">
                        <input className="sectionInput" type='text'/>
                        <img className="sectionImg" width={30} height={30} src="https://cdn-icons.flaticon.com/png/128/4208/premium/4208531.png?token=exp=1651021896~hmac=ec081bddf7304ad6b3a57d85a9d40bb3"></img>
                    </div>
                    <div className="sectionRegister"><b>Bem-vindo</b><br/><a href="#"><u>Entre ou se cadastre</u></a></div>
                    <div className="sectionCart">
                        <img width={50} height={50} src="https://cdn-icons-png.flaticon.com/128/7005/7005286.png" className="sectionCartImg"/>
                        <div className="sectionCartQt">0</div>
                    </div>
                    
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