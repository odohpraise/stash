import React, { useState, type SyntheticEvent } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addResource } from '../../features/resources/resourceSlice';

const emptyForm = { title: "", url: "", note: "", category: "" };



const AddResource = () => {

    const [form, setForm] = useState(emptyForm);

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        dispatch(addResource({ id: Date.now().toString(), ...form }))
        navigate("/dashboard")
    }

    return (
        <div className="add-resource">


            <header className="edit-resource__header">
                <button
                    className="btn btn--back"
                    onClick={() => navigate("/dashboard")}
                >
                    ← Back
                </button>

                <h2 className="edit-resource__title">Add Resource</h2>
            </header>

            <form className="add-resource__form" onSubmit={handleSubmit}>

                <input
                    className="input"
                    name="title"
                    placeholder="Title"
                    value={form.title}
                    onChange={handleChange}
                    required
                />

                <input
                    className="input"
                    name="url"
                    placeholder="URL"
                    value={form.url}
                    onChange={handleChange}
                />

                <input
                    className="input"
                    name="category"
                    placeholder="Category"
                    value={form.category}
                    onChange={handleChange}
                />

                <textarea
                    className="textarea"
                    name="note"
                    placeholder="Note"
                    value={form.note}
                    onChange={handleChange}
                />

                <button className="btn btn--primary" type="submit">
                    Save Resource
                </button>

            </form>
        </div>
    );
}

export default AddResource