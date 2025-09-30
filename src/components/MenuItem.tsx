
type Props = {
    item:{
        name:String,
        quantity:number
    }
}
const MenuItem = (props : Props)=>{

    return <section>
       
            <li className="flex gap-4 text-xl justify-between">
                <h2>{props.item.name}</h2>
                <span>{props.item.quantity}</span>
            </li>
        
    </section>


}

export default MenuItem