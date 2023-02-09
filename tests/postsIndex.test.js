
const postHandlers = require('../src/posts/index')
describe('testing post',()=>{
    test('method', async ()=>{
        const mockUsers=[
            {id: 1},
            {id: 2}
        ] 
        const post ={
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: "direccion"
        }
        const req={
            body: post,
        }
        const res={
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        } 
        const axios ={
            get: jest.fn().mockResolvedValue({data: mockUsers}),
            post: jest.fn().mockResolvedValue({data: {id:1000}})
        }

        await postHandlers({axios}).post(req, res);
        const responseValue= res.status.mock.calls
        expect(responseValue).toEqual([[201]])

        const axiosPost= axios.post.mock.calls
        expect(axiosPost).toEqual([['https://jsonplaceholder.typicode.com/posts', post]])

        const sendValue= res.send.mock.calls
        expect(sendValue).toEqual([[{id:1000}]])

        const axiosGet= axios.get.mock.calls
        expect(axiosGet).toEqual([['https://jsonplaceholder.typicode.com/users']])


    })
})