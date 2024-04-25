import { useForm } from "react-hook-form";
import { Button } from "../../../components/common/Button";
import { Input } from "../../../components/common/Input";
import { Panel } from "../../../components/layout/Panel";
import styles from './Shelter.module.css'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHookFormMask } from "use-mask-input";

const shelterSchema = z.object({
    name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres.')
                    .max(30, 'O nome deve ter no máximo 30 caracteres.'),
    email: z.string().email('Campo deve ser um email valido'),
    phone: z.string().refine(value => {
        const digits = value.replace(/\D/g, '').length
        return digits >= 10 && digits <= 11
    }, 'Campo deve ser um telefone valido'),
    whatsapp: z.string().refine(value => {
        const digits = value.replace(/\D/g, '').length
        return digits >= 10 && digits <= 11
    },'O campo deve ser um WhatsApp valido'),
})

type ShelterSchema = z.infer<typeof shelterSchema>;

export function Shelter() {
const  { handleSubmit, register, formState } = useForm<ShelterSchema>({
    resolver: zodResolver(shelterSchema)
});

const registerWithMask = useHookFormMask(register)

function submit ({name, email, phone, whatsapp}: ShelterSchema) {
    console.log(name, email, phone, whatsapp)
}
 
    return (
        <Panel>
            <form className={styles.container} onSubmit={handleSubmit(submit)} >
                <div>
                    <Input label="Nome"  {...register('name')}/>
                    {formState.errors?.name && <p className={styles.formError}>{formState.errors?.name.message}</p>}
                </div>
                <div>
                    <Input label="Email"  {...register('email')}/>
                    {formState.errors?.email && <p className={styles.formError}>{formState.errors?.email.message}</p>}
                </div>
                <div>
                    <Input label="Telefone"  {...registerWithMask('phone', ['99 9999-9999', '99 99999-9999'])}/>
                    {formState.errors?.phone && <p className={styles.formError}>{formState.errors?.phone.message}</p>}
                </div>
                <div>
                    <Input label="Whatsapp"  {...registerWithMask('whatsapp', ['99 [9]9999-9999'])}/>
                    {formState.errors?.whatsapp && <p className={styles.formError}>{formState.errors?.whatsapp.message}</p>}
                </div>
                
                <Button type="submit">Salvar Dados</Button>
            </form>
        </Panel>
    );
} 


