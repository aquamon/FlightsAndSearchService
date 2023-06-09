const { City } = require('../models/index');
const { Op } = require('sequelize');

class CityRepository{

    async createCity({ name }){
        try{
            const city = await City.create({name});
            return city;
        }catch(error){
            console.log("Something went wrong  in the repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where : {
                    id:cityId
                }
            }); 
            return true;
        }catch(error){
            console.log("Something went wrong  in the repository layer");
            throw {error};
        }
    }

   

    async updateCity(cityId, data) { // {name: "Prayagraj"}
        try {
            // The below approach also works but will not return updated object
            // if we are using Pg then returning: true can be used, else not
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     },
            //      
            // });
            // for getting updated data in mysql we use the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {

            // const city = await sequelize.query(
            //     'SELECT * FROM cities WHERE status = :cityId',
            //     {
            //       replacements: { cityId: 'active' },
            //       type: QueryTypes.SELECT
            //     }
            //   );

            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log(error);
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    // async getAllCities(){
    //     try{
    //         const cities = await City.findAll();
    //         return cities;
    //     }catch(error){
    //         console.log(error);
    //         console.log("Something went wrong in the repository layer");
    //         throw {error};
    //     }
    // }

    //This above code gives us the list of all the Cities in the DB.
    //now if there are thousands of data, its not good to flood the user
    //with all of these data at once.

    async getAllCities(filter){
        try{
            if(filter.name){
                const cities = await City.findAll({
                   where : {
                    name : {
                        [Op.startsWith] : filter.name
                    }
                   }     
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        }catch(error){
            console.log(error);
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = CityRepository;







