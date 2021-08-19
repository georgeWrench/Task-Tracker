import { useState } from "react"




const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [time, setTime] = useState('')
  const [notes, setNotes] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
      alert('Please Add Task')
      return
    }
    
    onAdd({text, day, time, notes, reminder})

    setText('')
    setDay('')
    setTime('')
    setNotes('')
    setReminder(false)

  }
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control form-control-text">
        <label>Task</label>
        <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control form-control-day">
        <label>Day</label>
        <input type="date" value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className="form-control form-control-time">
        <label>Time</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <div className="form-control form-control-notes">
        <label>Notes</label>
        <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="..." />
      </div>
      <div className="form-control form-control-check" >
        <label>Set Reminder</label>
        <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>

      <input className="btn btn-block" type="submit" value="Save Task" />
    
    </form>
  )
}

export default AddTask

