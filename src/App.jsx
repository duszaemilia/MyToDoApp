import './App.css'
import {useEffect, useState} from "react";
import {getAllTasks, sendTaskData} from "./helpers/api.js";

function App() {
    const [task, setTask] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        getAllTasks()
            .then((data) => {
                setTask(data)
            })
            .catch(console.error)
    }, [])




    async function handleSubmit(event) {
        event.preventDefault();
        const result = await sendTaskData({
            title,description,status:'open',addedDate:new Date()
        });
      setTitle('');
      setDescription('');
      setTask([...task,result])
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        value={title}
                        type="text"
                        id="title"
                        name="title"
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="desc">Desription</label>
                    <textarea
                        value={description}
                        id="desc"
                        name="desc"
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </div>
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default App
