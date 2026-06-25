import React, { useState, type SyntheticEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import type { RootState } from '../../app/store';
import { editResource } from '../../features/resources/resourceSlice';


const EditResource = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const resource = useSelector((state: RootState) =>
        state.resources.items.find((r) => r.id === id)
    );

    const [form, setForm] = useState({
        title: resource?.title ?? "",
        url: resource?.url ?? "",
        note: resource?.note ?? "",
        category: resource?.category ?? "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        if (id) {
            dispatch(editResource({ id, ...form }));
            navigate("/dashboard");
        }
    };

    if (!resource) {
        return (
            <div className="edit-resource__not-found">
                <p>Resource not found.</p>
                <button className="btn btn--back" onClick={() => navigate("/dashboard")}>
                    Back
                </button>
            </div>
        );
    }

    return (
        <div className="edit-resource">

            {/* HEADER */}
            <header className="edit-resource__header">
                <button
                    className="btn btn--back"
                    onClick={() => navigate("/dashboard")}
                >
                    ← Back
                </button>

                <h2 className="edit-resource__title">Edit Resource</h2>
            </header>

            {/* FORM */}
            <form className="edit-resource__form" onSubmit={handleSubmit}>

                <div className="field">
                    <input
                        className="input"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        required
                    />
                    <label className="label">Title</label>
                </div>

                <div className="field">
                    <input
                        className="input"
                        name="url"
                        value={form.url}
                        onChange={handleChange}
                    />
                    <label className="label">URL</label>
                </div>

                <div className="field">
                    <input
                        className="input"
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                    />
                    <label className="label">Category</label>
                </div>

                <div className="field">
                    <textarea
                        className="textarea"
                        name="note"
                        value={form.note}
                        onChange={handleChange}
                    />
                    <label className="label">Note</label>
                </div>

                <button className="btn btn--primary" type="submit">
                    Save Changes
                </button>

            </form>
        </div>
    );
};

export default EditResource