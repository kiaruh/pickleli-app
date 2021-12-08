import Item from "../item/Item"

function ItemList({name,qty,initialstock,price,pic}){

    return (
        <>
                <Item name={name} qty={qty} initialstock={initialstock} price={price} pic={pic}/>
        </>

    )
}

export default ItemList