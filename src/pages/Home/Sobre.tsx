import { useSearchParams } from "react-router-dom";
import { Button, ButtonVariant } from "../../components/common/Button";

import { usePetList } from "../../hook/usePetList";
import styles from './Home.module.css';
import  cat from '../../assets/cat.png';
import { CardHome } from "../../components/common/Card/CardHome";

export function Sobre() {

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

               <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textAlign: 'justify', gap: '10px' }}>
                
                       <div><span className={styles.title}>🌟 Conheça Universo dos Resgatados 🐾</span></div>
               </div>
                
                   <p>
                       
                       No coração da missão do Universo dos Resgatados, cada animal representa uma estrela no céu infinito da esperança, aguardando ansiosamente por um lugar para brilhar no aconchego de um lar amoroso. Nossa organização não se limita apenas ao resgate; nós cultivamos um ambiente onde amor, cuidado e segurança dirigem o espetáculo da recuperação e adoção.
                       <br /> <br />
                       Explore Nossas Galáxias de Amor <br />
                       <br />
                       Adote uma Estrela: No Universo dos Resgatados, cada animal, seja cão ou gato, possui uma história única de resiliência e uma capacidade especial de aquecer corações. Ao navegar pelos nossos perfis estelares, você encontra não apenas um pet, mas um novo membro para sua família, pronto para embarcar em aventuras inesquecíveis ao seu lado.
                       <br />
                       Faça Parte da Constelação de Apoiadores: Seu apoio é vital para que possamos continuar a resgatar, cuidar e reabilitar esses animais incríveis. Seja através de doações, voluntariado ou apadrinhamento, cada contribuição ilumina nosso caminho e reforça nossa capacidade de transformar tristezas em alegrias.
                       <br />
                       Eventos Estelares: Nossos eventos são momentos mágicos onde futuros pais adotivos podem conhecer nossas estrelas pessoalmente. Essas ocasiões são ideais para quem deseja expandir a família e oferecer um lar a um de nossos resgatados.
                       <br /><br />
                       🚀 Embarque em uma Jornada Interestelar<br />
                       Cada adoção realizada no Universo dos Resgatados é um passo em direção a um futuro onde cada animal desfruta de um lar cheio de amor e segurança. Ao se juntar a nós, você não apenas muda a vida de um animal, mas participa ativamente na construção de um final feliz numa "galáxia" onde a compaixão ressoa em cada ação.
                       <br /><br />
                       Cadastrar Abrigos e Facilitar Doações: Além de adoções, focamos no cadastramento de abrigos parceiros e na facilitação de doações. Isso nos permite ampliar nossa rede de apoio e garantir que mais animais possam ser resgatados e cuidados adequadamente.
                       <br /> <br />
                       Visite e Faça a Diferença <br />
                       Estamos sempre de portas abertas para quem deseja conhecer nosso trabalho ou contribuir para nossa causa. Visite-nos e veja como pequenos gestos podem fazer uma grande diferença no universo de um animal. Cada estrela salva nos inspira a continuar nossa jornada, reforçando a crença de que, juntos, podemos alcançar maravilhas.
                       <br />
                       Junte-se ao Universo dos Resgatados e ajude a transformar a vida de inúmeros animais. Sua jornada entre as estrelas começa aqui, e promete ser repleta de amor, aventura e muita gratidão.

                   </p>

       
               </div>
                 
                </div>
                
            </div>
        
  
    );
}
