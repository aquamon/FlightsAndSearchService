const { CityRepository } = require('../repository/index');

class CityService {
    
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try{
            const city = await this.cityRepository.createCity(data);
            return city;
        }catch(error){
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try{
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        }catch(error){
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }

    async updateCity(cityId,data){
        try{
            const response = await this.cityRepository.updateCity(cityId,data);
            return response;
        }catch(error){
            console.log("Not able to update the city");
            throw {error};
        }
    }

    async  getAllCities() {
        try {
            const cities = await this.cityRepository.getAllCities();
            return cities;
        } catch (error) {
            console.log("Not able to fetch the cities : ServiceLayer");
            throw {error};
        }
    }

   

    
}

module.exports = CityService;