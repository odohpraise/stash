import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteResource } from '../features/resources/resourceSlice';

interface Resource {
    id: string;
    title: string;
    url: string;
    note: string;
    category: string;
}

interface Props {
    resources: Resource[];
}

const ResourceList = ({ resources }: Props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    if (resources.length === 0) {
        return <p className="resource-list__empty">No resources found</p>;
    }

    return (
        <div className="resource-list">
            {resources.map((r) => (
                <div key={r.id} className="resource-card">

                    <div className="resource-card__content">
                        <h4 className="resource-card__title">{r.title}</h4>

                        {r.category && (
                            <span className="resource-card__category">
                                {r.category}
                            </span>
                        )}

                        {r.url && (
                            <a
                                className="resource-card__link"
                                href={r.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {r.url}
                            </a>
                        )}

                        {r.note && (
                            <p className="resource-card__note">{r.note}</p>
                        )}
                    </div>

                    <div className="resource-card__actions">
                        <button
                            className="btn btn--edit"
                            onClick={() => navigate(`/edit-resource/${r.id}`)}
                        >
                            Edit
                        </button>

                        <button
                            className="btn btn--delete"
                            onClick={() => dispatch(deleteResource(r.id))}
                        >
                            Delete
                        </button>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default ResourceList;