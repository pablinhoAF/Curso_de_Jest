const handlers = require('../src/users/index')
describe('Testing index',()=>{
    const headers = {
        "Accept-Encoding": "*"
      }
    test('GET method',async ()=>{
        const axios={
             get: jest.fn().mockResolvedValue({data: 1})
        }
        const res={
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        }
        await handlers({axios}).get({}, res);
        const responseStatus = res.status.mock.calls;
        const responseSend = res.send.mock.calls;
        expect(responseStatus).toEqual([[200]])
        expect(responseSend).toEqual([[1]])
        
    })
    test('POST method',async ()=>{
        const axios={
             post: jest.fn().mockResolvedValue({data: 1})
        }
        const res={
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        }
        const req ={
            body: 'request body'
        }
        await handlers({axios}).post(req, res);
        const responseStatus = res.status.mock.calls;
        const responseSend = res.send.mock.calls;
        
        const request = axios.post.mock.calls;
        const expectValue = [['https://jsonplaceholder.typicode.com/users','request body',{headers}]]

        expect(responseStatus).toEqual([[201]])
        expect(responseSend).toEqual([[1]])
        expect(request).toEqual(expectValue)
        
    })
    test('PUT method',async ()=>{
        const axios={
             put: jest.fn().mockResolvedValue({data: 1})
        }
        const res={
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        }
        const req ={
            body: 'request body',
            params: {
                id: 12
            }
        }
        await handlers({axios}).put(req, res);
        const responseStatus = res.status.mock.calls;
        const responseSend = res.send.mock.calls;
        
        const request = axios.put.mock.calls;
        console.log(request);
        const expectValue = [['https://jsonplaceholder.typicode.com/users/12','request body',{headers}]] 

        expect(responseStatus).toEqual([[204]])
        expect(responseSend).toEqual([[1]])
        expect(request).toEqual(expectValue)
        
    })
    test('DELETE method',async ()=>{
        const axios={
             delete: jest.fn().mockResolvedValue({data: 1})
        }
        const res={
            sendStatus: jest.fn(),
        }
        const req ={
            params: {
                id: 24
            }
        }
        await handlers({axios}).delete(req, res);
        const responseStatus = res.sendStatus.mock.calls;
        
        const request = axios.delete.mock.calls;
        console.log(request);
        const expectValue = [['https://jsonplaceholder.typicode.com/users/24',{headers}]] 

        expect(responseStatus).toEqual([[204]])
        expect(request).toEqual(expectValue)
        
    })

})