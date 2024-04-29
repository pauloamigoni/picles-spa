import { useSearchParams } from "react-router-dom";
import { Button, ButtonVariant } from "../../components/common/Button";

import { usePetList } from "../../hook/usePetList";
import styles from './Home.module.css';
import  cat from '../../assets/cat.png';
import { CardHome } from "../../components/common/Card/CardHome";

export function Home() {

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
               <div className={styles.containerLeft}>
{/* 
               <h1 className={styles.title}>🌟 Universo dos Resgatados! 🐾</h1> */}
               <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textAlign: 'justify', gap: '10px' }}>
                
                   <div><span className={styles.title}>🌟 Universo dos Resgatados! 🐾</span></div>
               </div>
                
                   <p>
                       
                       
                   Aqui no Universo dos Resgatados, cada animal é uma verdadeira estrela brilhando no céu da esperança, ansioso por um papel principal no palco do seu lar. Em nossa grande família, amor, cuidado e segurança são os diretores de um espetáculo onde a felicidade é o prêmio final.
                   <br /><br />
                   Explore Nossas Galáxias de Amor:<br />
                   <br />
                   <strong>Adote uma Estrela:</strong> Cada cãozinho e gatinho aqui é único, com sua própria história de superação e um talento especial para derreter corações. 
                   Navegue por nossos perfis estelares e encontre seu novo companheiro de aventuras.
                   <br />
                   <strong>Faça Parte da Constelação de Apoiadores:</strong> Sua colaboração nos ajuda a manter o brilho de nossas estrelas! Doações, voluntariado ou apadrinhamento, cada gesto seu ajuda a iluminar nosso caminho.
                   <br />
                   <strong>Eventos Estelares:</strong> Participe de nossos eventos e atividades divertidas. São ótimas oportunidades para conhecer nossos astros pessoalmente e talvez levar um para casa!
                   <br /> <br />
                   🚀 Pronto para uma Jornada Interestelar? <br />
                   Cada adoção é um passo em direção a um universo onde cada animal tem um lar amoroso. Junte-se a nós nesta missão cósmica e mude uma vida (ou várias!) hoje mesmo. Suas ações têm o poder de criar um final feliz em uma galáxia não tão distante.
                   <br />
                   Visite-nos e descubra como pequenos gestos podem fazer uma grande diferença no universo de um animal.


                   </p>

               <div className={styles.buttonContainer}>
                   <Button variant={ButtonVariant.Default} icon={true} iconName='TfiHeart' className={styles.adoptButton}>
                       Quero adotar
                   </Button>
                   <Button variant={ButtonVariant.Default} icon={true} iconName='TfiHome' className={styles.adoptButton}>
                       Tenho um abrigo
                   </Button>
               </div>
               </div>
                 
                </div>
                <div className={styles.contentItem}>
                    <div className={styles.containerRight}>
                   <span className={styles.titleHome}>Adote uma Estrela</span>
                          <div className={styles.cardsContainerLeft}>
                            {
                                data?.items.map((pet) => (
                                    <CardHome
                                        key={pet.id}
                                        href={`/pets/${pet.id}`}
                                        text={<><span><strong>{pet.name}</strong></span><br /><span>{pet.bio.slice(0, 200)} ...</span></>}
                                        thumb={pet.photo}
                                        buttom = {true}
                                    />
                                ))
                            }
                        </div>
<br />
                   <span className={styles.titleHome}>Confira os últimos pets adotados</span>
                   <div className={styles.cardsContainerRight}>
                       {
                           data?.items.map((pet) => (
                               <CardHome
                                   key={pet.id}
                                   href={`/pets/${pet.id}`}
                                   text={<><span><strong>{pet.name}</strong></span><br /><span>{pet.bio.slice(0, 200)} ...</span></>}
                                   thumb={pet.photo}
                               />
                           ))
                       }
                   </div>
                        
                    </div>
                </div>
            </div>
        
  
    );
}
