const {Zone} = require('../../models');



const getAllZones = async(root,args) => {
	const zones = await Zone.find({is_active:true});
	return zones;
}

const getZoneById = async(root,args) => {
	const zone = await Zone.findOne({_id:args.id,is_active:true});
	if (!zone) throw new Error("Zone does not exist") 
	return zone
}

module.exports = {
	getAllZones,
	getZoneById
}