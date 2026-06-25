import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import ResourceList from '../../components/ResourceList';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../features/auth/authSlice';



const Dashboard = () => {
    const [search, setSearch] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const resources = useSelector((state: RootState) => state.resources.items)
    const user = useSelector((state: RootState) => state.auth.currentUser)

    const filtered = resources.filter((r) => r.category.toLowerCase().includes(search.toLowerCase()) || r.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="dashboard">

            <header className="dashboard__header">
                <div>
                    <h2 className="dashboard__title">Stash</h2>
                    <p className="dashboard__user">{user?.email}</p>
                </div>

                <div className="dashboard__actions">
                    <button
                        className="btn btn--logout"
                        onClick={() => dispatch(logout())}
                    >
                        Logout
                    </button>
                </div>
            </header>

            <div className="dashboard__search">
                <input
                    type="text"
                    placeholder="Search resources..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <ResourceList resources={filtered} />

            <button
                className="btn btn--primary dashboard__add"
                onClick={() => navigate("/add-resources")}
            >
                + Add Resource
            </button>

        </div>
    );
}

export default Dashboard;