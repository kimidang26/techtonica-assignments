

const List= (props) =>{
    //{id:1, title: "wash dishes", completed: false},

    const{id,title,completed} = props.todo
    const h1 = <h1>title</h1>
    const element = completed ? <strike>{h1}</strike> : h1

    return(<div data-testid={`list-element-${id}`}>
        {title}
        </div>)
}

export default List;