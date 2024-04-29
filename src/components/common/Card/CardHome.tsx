
import styles from './CardHome.module.css';
import { ImageBase64 } from '../ImageBase64/ImageBase64';
import { Button, ButtonVariant } from '../Button';

interface ICard {
    href: string;
    text?: React.ReactNode; 
    thumb: string;
    buttom?: boolean;
}

export function CardHome({ href, text, thumb, buttom = false }: ICard) {


    return (
               
                <div className={styles.card}>
                    <ImageBase64 src={thumb} alt="Thumbnail" />
              
            {buttom &&
                    <Button variant={ButtonVariant.Default}
                        icon={true}
                        iconName='TfiArrowRight'
                        style={{ marginTop: 20 }}
                        onClick={() => window.location.href = href}>Veja mais</Button>
                    }
                
                </div>
               
            
    );
}
