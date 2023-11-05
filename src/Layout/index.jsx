import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import AlternativeHeader from '../components/AlternativeHeader';

export default function Layout(){
    return (
    <>
        <AlternativeHeader />
        <div className='container'>
            <Outlet />
        </div>
    </>
    )
}