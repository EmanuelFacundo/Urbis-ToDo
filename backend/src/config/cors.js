module.exports = {
    origin: process.env.ORIGIN,
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type',' Accept', 'Authorization']
}