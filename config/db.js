const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      'mongodb+srv://damian1234:damian1234@buglogger.tsui8.mongodb.net/<dbname>?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      }
    );
    console.log('MongoDB Connected');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
