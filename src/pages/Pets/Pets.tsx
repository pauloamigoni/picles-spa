
import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid/Grid";
import style from './Pets.module.css'
import { Card } from "../../components/common/Card";
import { Skeleton } from "../../components/common/Skeleton/Skeleton";
import { useQuery } from "@tanstack/react-query";
import { getPets } from "../../services/pets/getPets";
import { Pagination } from "../../components/common/Pagination";
import { useSearchParams } from "react-router-dom";

export function Pets() {

    const [searchParams, setSearchParams] = useSearchParams()

    const urlParams = {
        page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
        itemsPerPage: 3
    }

 
    function changePage(page: number) {
        setSearchParams((params) => {
            params.set('page', String(page))
            return params   
        })
    }

    return (
        <Grid>
            <div className={style.container}>
            <Header />
            {
                isLoading && (<Skeleton containerClassName={style.skeleton} count={10}/>)
            }
                <main className={style.list}>
                 {
                    data?.items.map((pet) => (
                        <Card 
                            key={pet.id} 
                            href={`/pets/${pet.id}`} 
                            text={pet.name} 
                            thumb={pet.photo} />
                    ))
                 }                    
                </main>

               {data?.currentPage && (
                <Pagination
                    currentPage={data?.currentPage}
                    totalPages={data?.totalPages}
                    onPageChange={(number) => changePage(number)}/>
               )}

            </div>
        </Grid>
    )
}