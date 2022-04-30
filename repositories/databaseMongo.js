import mongodb from 'mongodb'

function getClient() {
    const uri = 'mongodb+srv://mongodbuser:zXJhwkanPCLnT9CR@cluster0.qbcaf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    return new mongodb.MongoClient(uri)
}

export { getClient }