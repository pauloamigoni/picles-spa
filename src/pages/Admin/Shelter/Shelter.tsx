import { useForm } from "react-hook-form";
import { Button, ButtonVariant } from '../../../components/common/Button';
import { Input } from "../../../components/common/Input";
import { Panel } from "../../../components/layout/Panel";
import styles from './Shelter.module.css'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHookFormMask } from "use-mask-input";
import { toast } from "sonner";
import { updateShelter } from "../../../services/shelter/updateShelter";
import { useQueryClient } from "@tanstack/react-query";

import { useEffect } from 'react'
import { Skeleton } from '../../../components/common/Skeleton'
import { useShelter } from "../../../hook/useShelter";

const shelterSchema = z.object({
    name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres.')
                    .max(30, 'O nome deve ter no máximo 30 caracteres.'),
    email: z.string().email('Campo deve ser um email valido'),
    phone: z.string().refine(value => {
        const digits = value.replace(/\D/g, '').length
        return digits >= 10 && digits <= 11
    }, 'Campo deve ser um telefone valido'),
    WhatsApp: z.string().refine(value => {
        const digits = value.replace(/\D/g, '').length
        return digits >= 10 && digits <= 11
    },'O campo deve ser um WhatsApp valido'),
})

type ShelterSchema = z.infer<typeof shelterSchema>;

export function Shelter() {
    const { handleSubmit, register, formState, reset } = useForm<ShelterSchema>({
  
    resolver: zodResolver(shelterSchema)
});

const registerWithMask = useHookFormMask(register)
const queryClient = useQueryClient()
    const { data, isLoading } = useShelter()

    useEffect(() => {
        if (!isLoading && data) {
            reset({
                name: data.shelterName,
                email: data.shelterEmail,
                phone: data.shelterPhone,
                WhatsApp: data.shelterWhatsApp,
            })
        }
    }, [data, isLoading, reset])

async function submit ({name, email, phone, WhatsApp}: ShelterSchema) {
    const toastId = toast.loading('Salvando dados...')
    try {
        
queryClient.invalidateQueries({queryKey: ['get-shelter']})
       await updateShelter({ 
        name, 
        email, 
        phone: phone.replace(/\D/g, ''),
        WhatsApp: WhatsApp.replace(/\D/g, '')
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
            {isLoading && <Skeleton count={4} width={320} height={32} />}
            {!isLoading && (
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
                    <Input label="WhatsApp"  {...registerWithMask('WhatsApp', ['99 [9]9999-9999'])}/>
                    {formState.errors?.WhatsApp && <p className={styles.formError}>{formState.errors?.WhatsApp.message}</p>}
                </div>
                
                        <Button
                            type="submit"
                            icon={true}
                            iconName="PiBone"
                            iconSize={14}
                            variant={
                                !formState.isDirty || formState.isSubmitting
                                    ? ButtonVariant.Disabled
                                    : ButtonVariant.Default
                            }
                        >
                            Salvar dados
                        </Button>
            </div>
            </form>
            )}
        </Panel>
    );
} 


