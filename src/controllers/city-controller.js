const {CityService} = require('../services/index');

/**
 * 
 * POST
 * data -> req.body
 */

const cityService = new CityService();

const create = async (req,res)=>{
    try{
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : 'Successfully created a city',
            err : {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to create a city',
            err : error
        });
    }
}

//DELETE in REST : /city/:id
const destroy = async (req,res)=>{
    try{
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully deleted a city',
            err : {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to delete a city',
            err : error
        });
    }
}

//GET -> /city/:id

const get = async (req,res)=>{
    try{
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully got a city',
            err : {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to get a city',
            err : error
        });
    }
}

//PATCH => /city/:id

const update = async (req,res)=>{
    try{
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully updated a city',
            err : {}
        }); 
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to update a city',
            err : error
        });
    }
}

module.exports = {
    create,
    destroy,
    update,
    get
}