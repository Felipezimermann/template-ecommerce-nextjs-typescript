function departamentos(): JSX.Element{

    return(
        <>
          <div>ola laksjdlkasjdkalsd   dasdasdsadasd</div>
          <div>ola laksjdlkasjdkalsd dasdsads dasdsadsadasd dsadasdasd dasdsad </div>
          <div>ola laksjdlkasjdkalsd</div>
          <div>ola laksjdlkasjdkalsd</div>
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
            break
        case "modelNav_three":
            setNavMenu('modelNav_three')
            setDropdown("displayBlock");
            break
        case "modelNav_four":
            setNavMenu('modelNav_four')
            setDropdown("displayBlock");
            break
        case "modelNav_five":
            setNavMenu('modelNav_five')
            setDropdown("displayBlock");
            break
        case "modelNav_six":
            setNavMenu('modelNav_six')
            setDropdown("displayBlock");
            break
        case "modelNav_seven":
            setNavMenu('modelNav_seven')
            setDropdown("displayBlock");
            break
        case 'off':
         // setDropdown('');
          //setChildren(<></>)
        break
    }
  } 