import http from 'http'

const make = async () => {
    return 1
};

const Server = () => {
    const server = http.createServer(function (req, res) {
        make().then((data) => {
            console.log(data)
        });
        console.log('get the request asd asasdasdsad show asd')
        //console.log("NODE_APP_DATA_URL : ", process.env.NODE_APP_DATA_URL)
        res.end('hello world' + process.env.NODE_APP_DATA_URL)
    })

    server.listen(4002, () => {
        console.log('Listening on port 4000')
    })
}

Server()
export default Server
