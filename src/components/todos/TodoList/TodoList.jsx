import styles from './TodoList.module.css'
import TodoItem from './TodoItem';

const TodoList = ({data, onDel, onChk}) => {
    return (
        <ul className={styles.list}>
            {
                data.map( item => <TodoItem key={item.id}  item={item} onDel={onDel} onChk={onChk} />)
            }
        </ul>
    );
};

export default TodoList;