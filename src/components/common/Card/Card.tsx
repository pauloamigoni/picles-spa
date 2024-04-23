
import styles from './Card.module.css';
import { ImageBase64 } from '../ImageBase64/ImageBase64';
import { Button, ButtonVariant } from '../Button';

interface ICard {
    href: string;
    text: React.ReactNode;  // Alterado para aceitar elementos JSX como propriedade de texto
    thumb: string;
}

export function Card({ href, text, thumb }: ICard) {
    return (
        <div className={styles.container}>
            <div className={styles.flip3D}>
                <div className={styles.front}>
                    <ImageBase64 src={thumb} alt="Thumbnail" />
                </div>
                <div className={styles.back}>
                    <div>{text}</div>
                    <Button variant={ButtonVariant.Default}
                        icon={true}
                        iconName='TfiArrowRight'
                        style={{ marginTop: 20 }}
                        onClick={() => window.location.href = href}>Veja mais</Button>
                </div>
            </div>
        </div>
    );
}
