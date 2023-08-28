let restaurant = {
    name: 'Chuck-E Cheese',
    guestCapacity: 150,
    guestCount: 0,
    seatParty: function (partySize) {
        if(partySize <= this.guestCapacity) {
            this.guestCapacity -= partySize
            this.guestCount += partySize
            return true
        } else {return false}
    },
    removeParty: function (partySize) {
        this.guestCount -= partySize
        this.guestCapacity += partySize
    },
    checkAvailability: function (partySize) {
        if(this.seatParty(partySize) == true) {
            return this.guestCapacity
        } else {return "doodoo"}
    }
}

restaurant.seatParty(30)
restaurant.removeParty(15)
console.log(restaurant.checkAvailability(150))