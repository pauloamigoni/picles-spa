import { NavLink } from 'react-router-dom';
import style from './Sidebar.module.css';
import { Toaster, toast } from 'sonner';
import { useShelter } from '../../../hook/useShelter';

export function Sidebar() {

    const { data } = useShelter();

    function validate(event: React.MouseEvent) {
        const canAccess = !!data?.shelterWhatsapp;

        if (!canAccess) {
            event.preventDefault()
            toast.error('Acesso negado!')
        }
        toast.success('Acesso permitido! Bem vindo(a) ' + data?.shelterName)


    }

    return (
        <>
            <nav className={style.sidebar}>
                <NavLink className={({ isActive }) => (isActive ? style.active : '')} to="/admin" end>Meu abrigo</NavLink>
                <NavLink
                    onClick={validate}
                    className={({ isActive }) => (isActive ? style.active : '')} to="/admin/pets">Pets</NavLink>
                <NavLink to="/">Sair</NavLink>
            </nav>
            <Toaster position='top-center' richColors={true} />
        </>

    );
}