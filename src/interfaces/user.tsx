export interface IUser {
    id: number;
    name: string;
    email: string;
    phone: string;
    WhatsApp: string;
    cpf: string;
    password: string;
    type: number;
    username: string;
    avatar: string;
    description: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    birthplace: string;
    gender: string;
    language: string;
    profession: string;
    company: string;
    website: string;
    relationship: string;
    birthdate: string;
    status: number;
    active: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface IShelter {
    shelterName: string;
    shelterEmail: string;
    shelterPhone: string;
    shelterWhatsApp: string;
}

export interface IUpdateShelterRequest extends IUser {
    shelterName: string;
    shelterEmail: string;
    shelterPhone: string;
    shelterWhatsApp: string;
}

export interface IUpdateShelterResponse extends IUpdateShelterRequest {}
