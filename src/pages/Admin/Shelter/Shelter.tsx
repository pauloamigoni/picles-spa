import { useForm } from "react-hook-form";
import { Button } from "../../../components/common/Button";
import { Input } from "../../../components/common/Input";
import { Panel } from "../../../components/layout/Panel";
import styles from './Shelter.module.css'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHookFormMask } from "use-mask-input";
import { toast } from "sonner";
import { updateShelter } from "../../../services/shelter/updateShelter";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const shelterSchema = z.object({
    name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres.')
                    .max(30, 'O nome deve ter no máximo 30 caracteres.'),
    email: z.string().email('Campo deve ser um email valido'),
    phone: z.string().refine(value => {
        const digits = value.replace(/\D/g, '').length
        return digits >= 10 && digits <= 11
    }, 'Campo deve ser um telefone valido'),
    whatsApp: z.string().refine(value => {
        const digits = value.replace(/\D/g, '').length
        return digits >= 10 && digits <= 11
    },'O campo deve ser um whatsApp valido'),
})

type ShelterSchema = z.infer<typeof shelterSchema>;

export function Shelter() {
const  { handleSubmit, register, formState } = useForm<ShelterSchema>({
  
    resolver: zodResolver(shelterSchema)
});

const registerWithMask = useHookFormMask(register)
const queryClient = useQueryClient()

async function submit ({name, email, phone, whatsApp}: ShelterSchema) {
    const toastId = toast.loading('Salvando dados...')
    try {
        
queryClient.invalidateQueries({queryKey: ['get-shelter']})
       await updateShelter({ 
        name, 
        email, 
        phone: phone.replace(/\D/g, ''),
        whatsApp: whatsApp.replace(/\D/g, '')
     })

       toast.success('Dados salvos com sucesso', {
           id: toastId,
           closeButton: true,
       })

    } catch (error) {
        toast.error('Erro ao salvar dados', {
            id: toastId,
            closeButton: true,
        })
    } 
}
    
 
    return (
        <Panel>
     
            <form className={styles.container} onSubmit={handleSubmit(submit)} >
                <div className={styles.content}>
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
                    <Input label="whatsApp"  {...registerWithMask('whatsApp', ['99 [9]9999-9999'])}/>
                    {formState.errors?.whatsApp && <p className={styles.formError}>{formState.errors?.whatsApp.message}</p>}
                </div>
                
                <Button type="submit">Salvar Dados</Button>
            </div>
            </form>
        </Panel>
    );
} 


