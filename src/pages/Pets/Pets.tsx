

import { useEffect } from "react";
import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid/Grid";
import style from './Pets.module.css'
import { Card } from "../../components/common/Card";
import { Skeleton } from "../../components/common/Skeleton/Skeleton";

export function Pets() {


    return (
        <Grid>
            <div className={style.container}>
            <Header />
                <main className={style.list}>
                    <Skeleton count={5} containerClassName={style.skeleton} />
                    
                    <Card href='/pets/1' text='Cachorro 1' thumb='' />
                    



  
                </main>
            </div>
        </Grid>
    )
}