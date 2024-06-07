import React  from 'react';
import styles from './ProfileCard.module.css';
import { ImageBase64 } from '../ImageBase64/ImageBase64';
import { Button, ButtonVariant } from '../Button';
import { FaPhone, FaWhatsapp, IconName } from "react-icons/fa6";

interface IProfileCard {
    buttom?: boolean;
    dados?: any;
}

export function ProfileCard({  buttom = false, dados }: IProfileCard) {
 
    return (
        <div className={styles.card}>
            <div className={styles.background}>
                <img src="src/assets/cat.png" alt="background" />
            </div>
       
            <div className={styles['avatar-picture']}>
                <img src={dados.avatar} alt="Thumbnail" />
            </div>
            <div className={styles.content}>
                <p className={styles['profile-name']}>{dados.name}</p>
                <FaWhatsapp />{dados.whatsApp}<br/>
                <FaPhone />{dados.phone}
                <p>
                    {dados.description} 
                  <p>
                    {dados.addresses.map((element, index) => (
                        <span key={index}>{element.street}<br /></span>
                    ))}
                    </p>
                   <br/>
                </p>

                {buttom &&
                    <Button variant={ButtonVariant.Default}
                        icon={true}
                        iconName='TfiArrowRight'
                        style={{ marginTop: 20 }}
                        onClick={() => window.location.href = href}>Veja mais</Button>
                }
            </div>

        </div>
    )
}

