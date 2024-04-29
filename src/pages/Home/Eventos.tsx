import { useSearchParams } from "react-router-dom";
import { Button, ButtonVariant } from "../../components/common/Button";

import { usePetList } from "../../hook/usePetList";
import styles from './Home.module.css';
import  semevento from '../../assets/semevento.png';
import { CardHome } from "../../components/common/Card/CardHome";

export function Eventos() {

    const [searchParams, setSearchParams] = useSearchParams()


    const urlParams = {
        page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
        type: searchParams.get('type') ?? '',
        gender: searchParams.get('gender') ?? '',
        size: searchParams.get('size') ?? '',
        itemsPerPage: 3
    }

    function changePage(page: number) {
        setSearchParams((params) => {
            params.set('page', String(page))
            return params
        })
    }

    const { data } = usePetList(urlParams);
    console.log(data)

   return (
     
          
            <div className={styles.contentContainer}>
                <div className={styles.contentItem}>
               <div className={styles.containerLeft} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '10px' }}>

               <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textAlign: 'justify', gap: '10px' }}>
                
                       <div><span className={styles.title}>🌟 Eventos 🐾</span></div>
               </div>
                   <span className={styles.titleHome} style={{ marginTop: '30px' }}>Desculpe mais não temos eventos disponíveis</span>
                   <img src={semevento} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '10px' }} />
                

       
               </div>
                 
                </div>
                
            </div>
        
  
    );
}
