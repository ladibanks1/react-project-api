import "dotenv/config"
// Verify API KEY
const verifyAccess = (req , res , next) => {
    const apiKey = req.headers["x-api-key"]
    console.log(apiKey)
    if(apiKey === process.env.API_PASS){
        next()
    }else{
        res.sendStatus(403)
    }
}
export default verifyAccess