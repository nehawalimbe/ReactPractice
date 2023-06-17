import PropTypes from 'prop-types'
function Header(props) {
    return (
        <header className='header'>
            <h1>
                {props.title}
            </h1>
            <button className={`btn ${!props.showAddTaskForm && 'appearance'}`} onClick={props.onAdd}>
                {`${!props.showAddTaskForm ? 'Add Task' : 'Close'}`}
            </button>

        </header>
    );
}
Header.defaultProps = {
    title: 'Default Title'
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header;