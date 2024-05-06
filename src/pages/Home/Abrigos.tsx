import styles from './Home.module.css';
import dog from '../../assets/dog.jpg';
import { useShelter } from "../../hook/useShelter";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa6";

export function Abrigos() {

    const { data } = useShelter()

    return (


        <div className={styles.contentContainer}>
            <div className={styles.contentItem}>
                <div className={styles.containerLeft} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '10px' }}>

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textAlign: 'justify', gap: '10px' }}>

                        <div><span className={styles.title}>🌟 Abrigos 🐾</span></div>
                    </div>
                 
             

                <div className={ styles.cardsShelter}>
                    <img src={dog}/>
                    <div>
                            <h2>{data?.shelterName}</h2>
                            <h3><FaEnvelope /> {data?.shelterEmail}</h3>
                            <p><FaPhone /> {data?.shelterPhone}<br />
                            <FaWhatsapp />  {data?.shelterWhatsApp}</p>

                    </div>
                </div>
                    </div>

            </div>

        </div>
        
    );
}
