import mongoose from "mongoose";

try {
    mongoose.connect(process.env.MONGODB).then(()=>{
        console.info('Se conecto a la base de datos')
    })
} catch (error) {
    console.log(error);
}

export default mongoose;