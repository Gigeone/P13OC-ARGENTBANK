const mongoose = require('mongoose')
const databaseUrl = "mongodb+srv://matthieugh:hzSA6epNUPoMCpLU@cluster0.alpnpmx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
