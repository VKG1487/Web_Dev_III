const tourModel = require("../model/tourRoute");

// Get all tours
const getAllTours = (req, res) => {
    const tours = tourModel.getAll();

    res.json(tours);
};

// Get tour by ID
const getTourById = (req, res) => {
    const id = parseInt(req.params.id);

    const tour = tourModel.getById(id);

    if (!tour) {
        return res.status(404).json({
            message: "Tour Not Found"
        });
    }

    res.json(tour);
};

// Get tours by query
const getByQuery = (req, res) => {
    const query = req.query.query || "";

    const tours = tourModel.getByQuery(query);

    res.json(tours);
};

const saveTours = (req,res)=>{
    tours=req.body;
    tourModel.save(tours);
    res.status(201).json({
        message:"Tours saved successfully"
    });
}

module.exports = {
    getAllTours,
    getTourById,
    getByQuery,
    saveTours
};