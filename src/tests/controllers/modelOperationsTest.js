const chai = require('chai')
const assert = chai.assert
const assertArrays = require('chai-arrays')
chai.use(assertArrays)
const { expect } = require('chai')

const mongoose = require('mongoose')
const MongoDB = 'mongodb://127.0.0.1/test_database'
mongoose.connect(MongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
mongoose.set('useCreateIndex', true);

const User = require('../../models/User')

const modelOperations = require('../../controllers/modelOperations');


describe('modelOperations test', () => {

    before(async () => {
        await User.deleteMany({})
    })

    after(async () => {
        await mongoose.connection.close()
    })

    describe('Create Pedro Santos', () => {
        it('should create an user called Pedro Santos', async () => {
            const user = new User({
                name: "Pedro Santos",
                rg: 42344232,
                cpf: 42342234,
                account_number: 1004,
                balance: 5000
            })

            const savedUser = await modelOperations.createOne(User, user)

            const actual = savedUser.name
            const expected = user.name

            assert.equal(actual, expected)
        }).timeout(10000)
    })

    describe('Create Ana de Oliveira', () => {
        it('should create an user called Ana de Oliveira', async () => {
            const user = new User({
                name: "Ana de Oliveira",
                rg: 41443214,
                cpf: 4141414,
                account_number: 1003,
                balance: 2000
              })

            const savedUser = await modelOperations.createOne(User, user)

            const actual = savedUser.name
            const expected = user.name

            assert.equal(actual, expected)
        }).timeout(10000)
    })

    describe('Find user', () => {
        it('should find an user', async () => {

            const expected = 'Pedro Santos'

            const user = await modelOperations.findByName(User, expected)

            const actual = user.name

            assert.equal(actual, expected)
        }).timeout(10000)
    })

    describe('Update user', () => {
        it('should update an user', async () => {

            const name = 'Pedro Santos'
            
            const update = {
                balance: 7000
            }

            const user = await modelOperations.updateOne(User, name, update)

            const actual = user.balance
            const expected = 7000

            assert.equal(actual, expected)
        }).timeout(10000)
    })

    describe('Find users', () => {
        it('should find all users', async () => {

            const users = await modelOperations.findAll(User)

            expect(users).to.be.ofSize(2)
        }).timeout(10000)
    })

    describe('Delete user', () => {
        it('should delete an user', async () => {

            const name = 'Pedro Santos'

            const user = await modelOperations.findByName(User, name)

            await modelOperations.deleteOne(User, name)

            const users = await modelOperations.findAll(User)

            expect(users).not.to.be.containing(user)

        }).timeout(10000)
    })
})