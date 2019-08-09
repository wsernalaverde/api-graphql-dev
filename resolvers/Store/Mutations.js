const { Store } = require('../../models')

const createStore = async (root, args) => {
  const store = await Store.create(args.data).catch(e => { throw e })
  return store 
}

// const deleteStore = async (root, args) => {
//   await Store.findByIdAndUpdate()
// }

module.exports = {
  createStore
}
