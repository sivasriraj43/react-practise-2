
function List(props){
    const stock=props.stock;
    const itemlist= props.items;
    <h2>Fruits</h2>
    const fruits=[
        {id:1,name:"apple" ,stock:4},
        {id:2,name:"orange",stock:3},
        {id:3,name:"banana",stock:9},
        {id:4,name:"pineapple",stock:8}
    ];
    const listitem = fruits.map(fruits=> <li key={fruits.name}>{fruits.name}:&nbsp;
    <b>{ fruits.stock}</b></li>);

    //const listitems= fruits.filter(fruits=>fruits.stock>3);
    <h2>Vegetables</h2>
    const vegetables=[
        {id:1,name:"carrot" ,stock:14},
        {id:2,name:"onion",stock:32},
        {id:3,name:"potato",stock:92},
        {id:4,name:"corn",stock:18}
    ];
    const listveg = vegetables.map(vegetables=> <li key={vegetables.name}>{vegetables.name}:&nbsp;
    <b>{ vegetables.stock}</b></li>);

    return (
    <div>
        <ol>{listitem}</ol>
    <ol>{listveg}</ol>
    </div>);
}

export default List;