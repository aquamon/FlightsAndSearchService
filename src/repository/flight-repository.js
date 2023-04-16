const {Flights} = require('../models/index');

class FlightRepository{

    async createFlight(data){
        try{
            const flight = await Flights.create(data);
            return flight;

        }catch(error){
            console.log(error);
            console.log("Something went wrong in the Repository layer");
            throw error;
        }
    }
}

module.exports = FlightRepository;
