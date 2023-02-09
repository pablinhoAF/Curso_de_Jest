const authenticate = require('../src/middlewares/authenticate')
describe('testing authenticate',()=>{
    test(' id === 1',()=>{
        const req={
            header: jest.fn().mockReturnValue(1)
        }
        const res={
            sendStatus: jest.fn()
        }
        const next= jest.fn()

        authenticate(req, res, next)
        const requestValue = req.header.mock.calls
        const responseValue = res.sendStatus.mock.calls
        const nextValue = next.mock.calls

        expect(requestValue).toEqual([['user_id']])
        expect(responseValue).toEqual([])
        expect(nextValue).toEqual([[]])
    })
    test('ERROR, id is not 1',()=>{
        const req={
            header: jest.fn().mockReturnValue(2)
        }
        const res={
            sendStatus: jest.fn()
        }
        const next= jest.fn()

        authenticate(req, res, next)
        const requestValue = req.header.mock.calls
        const responseValue = res.sendStatus.mock.calls
        const nextValue = next.mock.calls

        expect(requestValue).toEqual([['user_id']])
        expect(responseValue).toEqual([[403]])
        expect(nextValue).toEqual([])
    })
})