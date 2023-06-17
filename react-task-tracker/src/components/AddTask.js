import { useState } from 'react';
function AddTask({ onAdd }) {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        onAdd({ text, day, reminder });
        setText('')
        setDay('')
        setReminder(false)
    }
    return (<form className="add-task-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task Name</label>
            <input type="text" required placeholder="Enter task name" value={text} onChange={(e) => {
                setText(e.target.value)
            }}></input>
        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input type="text" required placeholder="Enter day & time" value={day} onChange={(e) => {
                setDay(e.target.value)
            }}></input>
        </div>
        <div className="form-control reminder">
            <label>Reminder</label>
            <input type="checkbox" value={reminder} checked={reminder} onChange={(e) => {
                setReminder(e.currentTarget.checked)
            }}></input>
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />
    </form>);
}
export default AddTask;