const {Zone} = require('../../models');


const createOneZone = async(root,args) =>{
	const zone = await Zone.create(args.data).catch(e => {throw e});
	return zone
}

const updateOneZone = async(root, args) => {
	const updatedZone = await Zone.findByIdAndUpdate(args.id,{$set:{...args.data}},{new:true})
	if (!updatedZone) throw new Error("Zone not found");
	return updatedZone;
}

const deleteZone =  async(root,args) => {
	await Zone.findByIdAndUpdate(args.id,{is_active:false},{new:true});
	return "Zone deleted succesfully"
}

module.exports = {
	createOneZone,
	updateOneZone,
	deleteZone
}