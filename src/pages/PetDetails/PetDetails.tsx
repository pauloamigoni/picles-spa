import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid";
import styles from "./PetDetails.module.css";
import { useQuery } from "@tanstack/react-query";
import { getPetById } from "../../services/pets/getPetById";
import { ImageBase64 } from "../../components/common/ImageBase64/ImageBase64";
import { Skeleton } from "../../components/common/Skeleton";
import { useShelter } from "../../hook/useShelter";

import { PiWhatsappLogo } from "react-icons/pi";

export function PetDetails() {

    const { id } = useParams();
    const { data: shelterData } = useShelter();

    const { data: petData, isLoading: petsIsLoading, isError: petIsError } = useQuery({
        queryKey: ['getPetById', id],
        queryFn: async () => {
            return await getPetById(id ?? '')
        }
    })

    console.log(petData)

    return (
        <Grid>
            <div className={styles.container}>
                <Header showReturn={true} />
                <main className={styles.content}>
                    
                    {petsIsLoading && (
                        <div className={styles.skeleton}>
                            <Skeleton circle={true} width={200} height={200} />
                            <Skeleton width={180} height={24} style={{ marginTop: 20 }} />
                        </div>
                    )}
                    {
                        !petsIsLoading && (
                            <>
                                <img src={petData?.img} className={styles.picture} alt={petData?.name} />

                                {petIsError && (
                                    <>
                                        <h1>Pet não encontrado</h1>
                                        <Link to='/pets/'>Voltar para listagem</Link>
                                    </>
                                )}

                                {!petIsError && (
                                    <>
                                        <h1>{petData?.name}</h1>
                                        <span>Sobre o Pet:</span>
                                        <p>{petData?.description}</p>
                                        <a className={styles['float-button']} target="_blank" href={`https://wa.me/${shelterData?.shelterWhatsApp}?text=Olá, gostaria de saber mais sobre o pet ${petData?.name} `}>
                                            <PiWhatsappLogo size={28} aria-hidden="true" />
                                        </a>
                                    </>
                                )}

                            </>
                        )
                    }
                </main>
            </div>
        </Grid>
    )

}