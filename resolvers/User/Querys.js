const { User } = require('../../models');

// TODO: Pasar los parametros de graphql

const getAllUsers = async () => {
  const users = await User.find({is_active:true}).exec();
  if (!users) throw new Error('Error en los usuarios');
  return users;
};

const getUserByEmail = async (root,args) => {
  const { email } = args;
  const user = await User.findOne({ email,is_active:true }).exec();
  if (!user) throw new Error('No existe el usuario');
  return user;
};

const getUserById = async (root,args) => {
  const { id } = args;
  const user = await User.findOne({ _id: id, is_active:true }).exec();
  if (!user) throw new Error('No existe el usuario');
  return user;
};


const me = async (root, args, context) =>{
	return context.user;
}

module.exports = {
  getAllUsers,
  getUserByEmail,
  getUserById,
  me
};
