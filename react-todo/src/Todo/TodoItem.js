import React, {useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context';
const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #cccccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}
function TodoItem({ todo, index, onChange }) {

    // const { removeTodo } = useContext(Context)
    const classes = []

    if (todo.compleated) {
        classes.push('done')
    }

    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input type="checkbox"
                    style={styles.input}
                    checked={todo.compleated}
                    onChange={() => { onChange(todo.id) }}
                />
                <b>{index + 1}</b>&nbsp;
                {todo.title}
            </span>
            <button className='rm' >&times;</button>
        </li>
    )
}

// onClick={removeTodo.bind(null, todo.id)}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem;