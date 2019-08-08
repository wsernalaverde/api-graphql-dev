const { graphql } = require('graphql')
const { schema } = require('../app')
const { clearData } = require('./helpers')
const User = require('../models/User')
const mutations = require('../resolvers/User/Mutations')

const MUTATION_ADD_USER = `
  mutation add_user($data:createUser!) {
    createUser(user:$data){
      _id,
      name
    }
  }
`

describe('Test create user', () => {
  afterEach(async () => await clearData())

  it('Create one user', async () => {
    const data = {
      email: 'test@test.co',
      password: 'prueba123',
      phone: '5555555',
      name: 'Test'
    }

    const res = await graphql(schema, MUTATION_ADD_USER, {}, null, { data })

    expect(res.data.createUser).toHaveProperty('_id')
  })

  it('Error duplicate user', async () => {
    const data = {
      email: 'test@test.co',
      password: 'prueba123',
      phone: '5555555',
      name: 'Test'
    }
    await User.create(data)
    const res = await graphql(schema, MUTATION_ADD_USER, {}, null, { data })

    expect(res).toHaveProperty('errors')
    expect(res.errors[0].message).toMatch(/duplicate/)
  })
})

const MUTATION_UPDATE = `
  mutation update($data:updateOneUser!){
    updateUser(data:$data){
      email,
      password,
      name,
      phone
    }
  }
`

describe('Test update user', () => {
  afterEach(async () => await clearData())
  
  it('Update data user', async () => {
    const newUser = {
      email: 'test@test.co',
      password: 'prueba123',
      phone: '5555555',
      name: 'Test'
    }

    const user = await User.create(newUser)
    const data = { phone: '5554433' }
    const res = await graphql(schema, MUTATION_UPDATE, {}, { user }, { data })

    expect(res.data.updateUser.phone).toBe('5554433')
  })
})