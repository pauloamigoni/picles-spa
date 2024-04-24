
import { useSearchParams } from "react-router-dom";
import { Card } from "../../components/common/Card";
import { Header } from "../../components/common/Header";
import { Pagination } from "../../components/common/Pagination";
import { Skeleton } from "../../components/common/Skeleton/Skeleton";
import { Grid } from "../../components/layout/Grid/Grid";
import { usePetList } from "../../hook/usePetList";
import style from './Pets.module.css';
import { Select } from "../../components/common/Select";
import { Button, ButtonVariant } from "../../components/common/Button";
import { filterColumns } from "./Pets.constants";
import { ChangeEvent, FormEvent, useState } from "react";
import { GetPetsResquest } from "../../interfaces/pet";


export function Pets() {

    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams()

    const urlParams = {
        page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
        type: searchParams.get('type') ?? '',
        gender: searchParams.get('gender') ?? '',
        size: searchParams.get('size') ?? '',
        itemsPerPage: 5
    }

    const { data, isLoading } = usePetList(urlParams);

    function checkButtonStatus(event: ChangeEvent<HTMLFormElement>) {

        const { type, gender, size } = getFormValue(event.target.form)
        if (type !== urlParams.type || gender !== urlParams.gender || size !== urlParams.size) {
            setIsButtonEnabled(true)
        } else {
            setIsButtonEnabled(false)
        }

    }


    function changePage(page: number) {
        setSearchParams((params) => {
            params.set('page', String(page))
            return params
        })
    }

    function getFormValue(form: HTMLFormElement) {
        const formData = new FormData(form)
        return Object.fromEntries(formData)
    }

    function updateSearchParams(urlParams: GetPetsResquest) {
        const fields: (keyof GetPetsResquest)[] = ['type', 'size', 'gender']
        const newParams = new URLSearchParams()

        fields.forEach((field) => {
            if (urlParams[field]) {
                newParams.set(field, String(urlParams[field]))
            }
        })
        newParams.set('page', '1')

        return newParams
    }

    function applyFilters(event: FormEvent) {
        event.preventDefault()

        const formValues = getFormValue(event.target as HTMLFormElement)
        const newSearchParams = updateSearchParams(formValues)

        setSearchParams(newSearchParams)
        setIsButtonEnabled(false)
    }

    return (
        <Grid>
            <div className={style.container}>
                <Header />

                <form className={style.filters} onSubmit={applyFilters} onChange={checkButtonStatus}>
                    <div className={style.columns}>
                        {filterColumns.map((filter) => (

                            <div key={filter.name} className={style.filter}>
                                <Select
                                    label={filter.title}
                                    defaultValue={urlParams[filter.name]}
                                    name={filter.name}
                                    options={filter.options} />
                            </div>
                        ))}
                    </div>
                    <Button type="submit" variant={isButtonEnabled ? ButtonVariant.Default : ButtonVariant.Disabled}>Buscar</Button>
                </form>

                {
                    isLoading && (<Skeleton containerClassName={style.skeleton} count={10} />)
                }

                <main className={style.list}>
                    {
                        data?.items.map((pet) => (
                            <Card
                                key={pet.id}
                                href={`/pets/${pet.id}`}
                                text={<><span><strong>{pet.name}</strong></span><br /><span>{pet.bio.slice(0, 80)} ...</span></>}
                                thumb={pet.photo}
                            />
                        ))
                    }
                </main>

                {data?.currentPage && (
                    <Pagination
                        currentPage={data?.currentPage}
                        totalPages={data?.totalPages}
                        onPageChange={(number) => changePage(number)} />
                )}

            </div>
        </Grid>
    )
}