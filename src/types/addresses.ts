export interface Address {
    _id: string;
    city: string;
    details: string;
    name: string;
    phone: string;
}

export interface AddressesResponse {
    data: Address[];
    results: number;
    status: string;
}

export interface SpecificAddressResponse {
    data: Address;
    status: string
}