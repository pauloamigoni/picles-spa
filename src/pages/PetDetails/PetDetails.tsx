import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid";
import styles from "./PetDetails.module.css";

export function PetDetails() {
    return (
        <Grid>
            <div className={styles.container}>
                <h1>Pet Details</h1>
                <Header showReturn={true} />
            </div>
        </Grid>
    )
}