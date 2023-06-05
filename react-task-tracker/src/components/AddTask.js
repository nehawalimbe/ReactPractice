function AddTask() {
    return (<form className="add-task-form">
        <div className="form-control">
            <label>Task Name</label>
            <input type="text" placeholder="Enter task name"></input>
        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input type="text" placeholder="Enter day & time"></input>
        </div>
        <div className="form-control reminder">
            <label>Reminder</label>
            <input type="checkbox"></input>
        </div>
        <input type="submit" value="Save Task" className="btn btn-block"/>
    </form>);
}
export default AddTask;