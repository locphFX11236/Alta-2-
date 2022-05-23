import { docProps } from "../redux/ActionCreators";

function Render ( {todos}: any ) {
    const Do = (done: boolean) => {
        if (done) { return 'Xong' }
        else { return 'Chua thuc hien' };
    };

    return todos.map((todo: any) => {
        return (
            <div key={todo.id}>
                <hr/>
                <h3>Ten viec: {todo.name}</h3>
                <p>Thuc hien: {Do(todo.done)}</p>
            </div>
        );
    });
}

export default Render;