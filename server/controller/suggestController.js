const Suggest = require('../models/suggestModel');


 const suggestCreate = async(req, res) => {
    try {
        const suggest = await Suggest.create(req.body);
        res.status(201).json(suggest)
    } catch (error) {
        
    res.status(500).json({error: 'Suggets is not Create !!'})
    }
}

const getSuggestPost = async (req, res) => {
    try {
        const suggests = await Suggest.find()
        res.status(200).json(suggests)
    } catch (error) {
        res.status(500).json({error: "suggests is not fetched !!"})
    }
}


module.exports = {suggestCreate, getSuggestPost}
