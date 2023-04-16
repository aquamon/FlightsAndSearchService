const {Flights} = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository{

    //private function in JS
    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }

        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }

        if(data.minPrice && data.maxPrice){
            Object.assign(filter, { 
                [Op.and]: [ 
                            {price : {[Op.lte]:data.maxPrice}} , 
                            {price : {[Op.gte]:data.minPrice}} 
                        ] 
            });
        }
        if(data.minPrice){
            Object.assign(filter,{price : {[Op.gte]:data.minPrice}});
        }

        if(data.maxPrice){
            Object.assign(filter,{price : {[Op.lte]:data.maxPrice}});
        }

        // Object.assign(filter, { [Op.and]: [ {price : {[Op.lte]:data.maxPrice}} , {price : {[Op.gte]:data.minPrice}} ] });

        return filter;
    }

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

    async getFlight(flightId){
        try{
            const flight = await Flights.findByPk(flightId);
            return flight;

        }catch(error){
            console.log(error);
            console.log("Something went wrong in the Repository layer");
            throw error;
        }
    }

    //In the getAllFlights there will be many filters
    //like flights between src and dest.
    //price
    //arrival and dept. time etc.
    //We cannot do something like writing all the filters in the if-else chain
    //
    async getAllFlights(filter){
        try{
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where:filterObject 
            });
            return flight;

        }catch(error){
            console.log(error);
            console.log("Something went wrong in the Repository layer");
            throw error;
        }
    }
}

module.exports = FlightRepository;
