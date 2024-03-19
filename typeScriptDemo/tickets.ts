class Ticket {
    destination: string;
    price: number;
    status: string;

    constructor(destination: string, price: number, status: string){
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function giveInformation(data: string[], criteria: string){
    let objDestinations: Ticket[] = [];

    for (let row of data) {
        let splitData: string[] = row.split('|');
        let destination: string = splitData[0];
        let price: number = Number(splitData[1]);
        let status: string = splitData[2];

        let location: Ticket = new Ticket(destination, price, status);
        objDestinations.push(location);
    }

    objDestinations.sort((a, b) => {
        if (a[criteria] < b[criteria]) {
          return -1;
        }
        if (a[criteria] > b[criteria]) {
          return 1;
        }
        return 0;
    });

    console.log(objDestinations);
}

giveInformation([
    'Philadelphia|94.20|available',
     'New York City|95.99|available',
     'New York City|95.99|sold',
     'Boston|126.20|departed'
    ],
    'price'
);
