import Style from "../../styles/Components_shop.module.css"

interface car{
    value:number
}

export default function Car(prop:car){
    return(
        <>
            <div className={Style.sectionCart}>
                        <img width={50} height={50} src="https://cdn-icons-png.flaticon.com/128/7005/7005286.png" className="sectionCartImg"/>
                        <div className={Style.sectionCartQt}>{prop.value}</div>
            </div>
        </>
    )
}