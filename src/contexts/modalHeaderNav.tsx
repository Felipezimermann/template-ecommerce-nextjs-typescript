function departamentos(): JSX.Element{

    return(
        <>
            <div style={{'display':'flex'}}>
                <div style={{'display':'flex','flexDirection':'column','width':'238px','gap':'6px'}}>
                    <a href="#">Acessórios de Tecnologia</a>
                    <a href="#">Ar e Ventilação</a>
                    <a href="#">Artesanato</a>
                    <a href="#">Artigos para Festa</a>
                    <a href="#">Áudio</a>
                    <a href="#">Automotivo</a>
                    <a href="#">Bebês</a>
                    <a href="#">Beleza & Perfumaria</a>
                    <a href="#">Bem-estar Sexual</a>
                    <a href="#">Brinquedos</a>
                    <a href="#">Cama, Mesa e Banho</a>
                    <a href="#">Câmeras e Drones</a>
                    <a href="#">Casa e Construção</a>
                    <a href="#">Casa Inteligente</a>
                </div>
                <div style={{'background':'#fffff'}}>
                    <img style={{'marginTop':'32px'}} src="https://s.mlcdn.com.br/banner/campanhas/mouseoverofertasdodia_130820.png"/>
                </div>
            </div>
            
        </>
    )

}

export function controllNavModel( event:string,setDropdown:Function,setNavMenu:Function,setChildren:Function){

    switch(event){
      case 'modelNav_one':
         setNavMenu('modelNav_one')
         setDropdown("displayBlock");
         setChildren(departamentos)
        break
        case "modelNav_two":
            setNavMenu('modelNav_two')
            setDropdown("displayBlock");
            setChildren(departamentos)
            break
        case "modelNav_three":
            setNavMenu('modelNav_three')
            setDropdown("displayBlock");
            setChildren(departamentos)
            break
        case "modelNav_four":
            setNavMenu('modelNav_four')
            setDropdown("displayBlock");
            setChildren(departamentos)
            break
        case "modelNav_five":
            setNavMenu('modelNav_five')
            setDropdown("displayBlock");
            setChildren(departamentos)
            break
        case "modelNav_six":
            setNavMenu('modelNav_six')
            setDropdown("displayBlock");
            setChildren(departamentos)
            break
        case "modelNav_seven":
            setNavMenu('modelNav_seven')
            setDropdown("displayBlock");
            setChildren(departamentos)
            break
        case 'off':
          setDropdown('');
          setChildren(<></>)
        break
    }
  } 