import { Link } from 'react-router-dom';

export default function Card({title, media, description, githubRepo, liveSite, projectName}){
    return (
        <div className='col'>
            <div className='card'>
                <img src={media} className='card-img-top' alt='...' />
                <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                    <p className='card-text'>{description}</p>
                    <p>Github repository: {githubRepo ? <Link to={githubRepo}>Repository</Link> : 'No repository available.'}</p>
                    <p>Live site: {liveSite ? <Link to={liveSite}>{projectName}</Link> : 'No live site available.'}</p>
                </div>
            </div>
        </div>
    )
}