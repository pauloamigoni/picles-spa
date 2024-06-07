import styles from './Home.module.css';
import { useUser } from "../../hook/useUserList";
import { ProfileCard } from '../../components/common/ProfileCard';

export function Abrigos() {
    const { data } = useUser();

    if (!data) {
        return <div>Carregando abrigos...</div>;
    }


    return (
        <div className={styles.contentContainer}>
            <div className={styles.contentItem}>
                <div className={styles.containerLeft} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '10px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textAlign: 'justify', gap: '10px' }}>
                        <div><span className={styles.title}>🌟 Abrigos 🐾</span></div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                        {Array.isArray(data) ? data.map((user) => (
                            
                            <ProfileCard key={user.id}
                                buttom='true'
                                dados={user}
                            />
                        )) : (
                            <ProfileCard key={data.id}
                                buttom='true'
                                data={data}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
