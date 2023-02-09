const headers = {
    "Accept-Encoding": "*"
  }


const handlers=({axios})=>({
    get : async (req, res) => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users',
        {
          headers,
        })
        res.status(200).send(data);
    },
    post : async(req,res)=>{
        const {body}= req
        const {data} = await axios.post('https://jsonplaceholder.typicode.com/users', body,
        {
          headers,
        })
          res.status(201).send(data)
    },
    put : async(req,res)=>{
        const {body}= req
        const {id} = req.params
        const {data} = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, body,
        {
          headers,
        })
         res.status(204).send(data)
    
    },
    delete : async(req,res)=>{
        const {id} = req.params
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`,
        {
          headers,
        })
        
         res.sendStatus(204)
    
    },
    

}) 
module.exports = handlers