
const Auto = require('../models/auto');


const autoCtrl = {};


autoCtrl.getAutos = async(req, res) => {
   const auto = await Auto.find();
   res.json(auto);
};

autoCtrl.createAuto = async(req, res) => {
    const auto = new Auto({
        marca: req.body.marca,
        modelo: req.body.modelo,
        km: req.body.km,
        precio: req.body.precio,
        duenio: req.body.duenio,
        contacto: req.body.contacto
    }
    );
    await auto.save();
    res.json({
        'status': 'Auto saved'
    });
};


autoCtrl.getAuto = async(req, res) => {
    const auto = await Auto.findById(req.params.id);
    res.json(auto);

};

autoCtrl.editAuto = async(req, res) =>{
    const { id } = req.params;
    const auto = {
        marca: req.body.marca,
        modelo: req.body.modelo,
        km: req.body.km,
        precio: req.body.precio,
        duenio: req.body.duenio,
        contacto: req.body.contacto
    };
    await Auto.findByIdAndUpdate(id, {$set: auto }, {new: true});
    res.json({status: 'auto actualizado'});
}

autoCtrl.deleteAuto = async(req, res) =>{
    await Auto.findByIdAndDelete(req.params.id);
    res.json({status: 'auto eliminado'});

}

module.exports = autoCtrl;