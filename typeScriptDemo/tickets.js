var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function giveInformation(data, criteria) {
    var objDestinations = [];
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var row = data_1[_i];
        var splitData = row.split('|');
        var destination = splitData[0];
        var price = Number(splitData[1]);
        var status_1 = splitData[2];
        var location_1 = new Ticket(destination, price, status_1);
        objDestinations.push(location_1);
    }
    objDestinations.sort(function (a, b) {
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
], 'price');
