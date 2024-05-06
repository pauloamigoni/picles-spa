import { useSearchParams } from "react-router-dom";
import { Button, ButtonVariant } from "../../components/common/Button";
import { usePetList } from "../../hook/usePetList";
import styles from './Home.module.css';
import { CardHome } from "../../components/common/Card/CardHome";
import { Skeleton } from "../../components/common/Skeleton";
import { useEffect, useState } from "react";


interface Pet {
    id: string;
    name: string;
    bio: string;
    photo: string;
}

export function Home() {


    const [searchParams] = useSearchParams()
    const urlParams = {
        page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
        type: searchParams.get('type') ?? '',
        gender: searchParams.get('gender') ?? '',
        size: searchParams.get('size') ?? '',
        itemsPerPage: 3
    }

    const { data, isLoading } = usePetList(urlParams);
    const [shuffledData, setShuffledData] = useState<Pet[]>([]);
    const [shuffledDataRes, setShuffledDataRes] = useState<Pet[]>([]);
  


    const shuffleArray = (array: Pet[]): Pet[] => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        if (data && Array.isArray(data.items)) {
            setShuffledData(shuffleArray([...data.items]));
        }
    }, [data]); // Dependência para que a operação seja refeita sempre que data mudar

    useEffect(() => {
        if (data && Array.isArray(data.items)) {
            setShuffledDataRes(shuffleArray([...data.items]));
        }
    }, [data]); // Dependência para que a operação seja refeita sempre que data mudar


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

                       {isLoading && (
                           <div className={styles.skeleton}>
                               <Skeleton circle={false} width={180} height={180}  />
                               <Skeleton width={180} height={24} style={{ marginTop: 20 }} />
                           </div>
                       )}

                       {!isLoading && (
                        <>
                            {
                                shuffledData?.map((pet) => (
                                    <CardHome
                                        key={pet.id}
                                        href={`/pets/${pet.id}`}
                                        text={<><span><strong>{pet.name}</strong></span><br /><span>{pet.bio.slice(0, 200)} ...</span></>}
                                        thumb={pet.photo}
                                        buttom = {true}
                                    />
                                ))
                            }
                            </>
                        )}


                        </div>
<br />
                   <span className={styles.titleHome}>Confira os últimos pets adotados</span>
                   <div className={styles.cardsContainerRight}>

                       {isLoading && (
                           <div className={styles.skeleton}>
                               <Skeleton circle={false} width={180} height={180} />
                               
                           </div>
                       )}
                       {!isLoading && (
                           <>
                       {
                           shuffledDataRes?.map((pet) => (
                               <CardHome
                                   key={pet.id}
                                   href={`/pets/${pet.id}`}
                                   text={<><span><strong>{pet.name}</strong></span><br /><span>{pet.bio.slice(0, 200)} ...</span></>}
                                   thumb={pet.photo}
                               />
                           ))
                       }
                       </>
                    )}
                   </div>
                        
                    </div>
                </div>
            </div>
        
  
    );
}
