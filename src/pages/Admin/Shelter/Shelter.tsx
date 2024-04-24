import { Button } from "../../../components/common/Button";
import { Input } from "../../../components/common/Input";
import { Panel } from "../../../components/layout/Panel";
import styles from './Shelter.module.css'

export function Shelter() {


    function submit(event) {
        event.preventDefault();
        console.log('Salvar Dados')
    }


    return (
        <Panel>
            <form className={styles.container}
                onSubmit={submit}
            >
                <Input label="Nome" placeholder="Digite o nome do abrigo" />
                <Button type="submit">Salvar Dados</Button>
            </form>
        </Panel>
    );
} 