const mongoose = require('mongoose')

const clearData = () => {
  return new Promise((resolve, reject) => {
    let count = 0
    let collections = mongoose.connection.collections
    const maxObjects = Object.keys(collections).length

    for (const i in collections) {
      collections[i].deleteMany(() => {
        count++
        if (count === maxObjects) resolve()
      })
    }
  })
}

module.exports = {
  clearData: async () => await clearData()
}
