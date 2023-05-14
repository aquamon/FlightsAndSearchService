const { FlightRepository,AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService {

    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    
    async createFlight(data){
        try{

            //here we can put other business logic like our 
            //arrival time > departure time etc.

            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw {error : 'Arrival Time cannot be less than Departure Time'};
            }

            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data , totalSeats : airplane.capacity
            });
            return flight;
        }catch(error){
            console.log("Something went wrong in service layer.")
            throw error;
        }
    }

    async getAllFlightData(data){
        try{
            const flights = await this.flightRepository.getAllFlights(data)
            return flights;
        }catch(error){
            console.log("Something went wrong in service layer.")
            throw error;
        }

    }

    async getFlight(flightId){
        try{
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        }catch(error){
            console.log("Something went wrong in service layer.")
            throw error;
        }
    }

    async updateFlight(flightId,data){
        try{
            const response = await this.flightRepository.updateFlight(flightId,data);
            return response;
        }catch(error){
            console.log("Something went wrong in service layer.");
            throw error;
        }
    }
}

module.exports = FlightService;
/**
 * data object will be sent by controller to the service
 * layer
 * {
 *  flightNumber,
 *  airplaneId,
 *  departureAirportId,
 *  arrivalAirportId,
 *  arrivalTime,
 *  departureTime,
 *  price,
 *  totalSeats --> Fetch from Airplane (So we need airplane repository also)
 * 
 * }
 * 
 */