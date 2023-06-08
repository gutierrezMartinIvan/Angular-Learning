export interface Passenger {
    name: string,
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Yural',
}

const passenger2: Passenger = {
    name: 'Yural',
    children: ['Valna', 'Nakala']
}

const printChildren = ( passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;
    //const howManyChildren = passenger.children!.length;
    console.log(howManyChildren);
}

printChildren(passenger1);