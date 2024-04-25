interface IFilterColumns {
    name: 'gender' | 'type' | 'size'
    title: string
    options: {
        value: string
        text: string
    }[]
}

export const filterColumns: IFilterColumns[] = [
    {
        name: 'type',
        title: 'Espécie',
        options: [
            {
                value: '',
                text: 'Todos'
            },
            {
                value: 'cachorro',
                text: 'Cachorro'
            },
            {
                value: 'gato',
                text: 'Gato'
            },
            {
                value: 'Parrot',
                text: 'Pássaro'
            }
        ]
    },
    {
        name: 'size',
        title: 'Tamanho',
        options: [{
            value: '',
            text: 'Todos'
        },
        {
            value: 'Small',
            text: 'Pequeno'
        },
        {
            value: 'Medium',
            text: 'Médio'
        },
        {
            value: 'Big',
            text: 'Grande'
        }
        ]
    },
    {
        name: 'gender',
        title: 'Gênero',
        options: [
            {
                value: '',
                text: 'Todos'
            },
            {
                value: 'Male',
                text: 'Macho'
            },
            {
                value: 'Female',
                text: 'Fêmea'
            }
        ]
    }

]