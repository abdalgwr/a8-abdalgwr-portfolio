// Models for the crochet Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Unable to connect to your crochet collection' });
    } else  {
        console.log('Success: Your crochet collection is now connected');
    }
});

// SCHEMA: Define the collection's schema.
const projectSchema = mongoose.Schema({
	projectName:    { type: String, required: true },
	hoursTook:     { type: Number, required: true },
	dateCreated:   { type: Date, required: true }
});

// Compile the model from the schema 
// by defining the collection name "crochet".
const project = mongoose.model('Project', projectSchema);


// CREATE model *****************************************
const createProject = async (projectName, hoursTook, dateCreated) => {
    const newProject = new project({ 
        projectName: projectName, 
        hoursTook: hoursTook, 
        dateCreated: dateCreated 
    });
    return newProject.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveProjects = async () => {
    const query = project.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveProjectName = async (_id) => {
    const query = project.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteProjects = async (_id) => {
    const result = await project.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateProject = async (_id, projectName, hoursTook, dateCreated) => {
    const result = await project.replaceOne({_id: _id }, {
        projectName: projectName,
        hoursTook: hoursTook,
        dateCreated: dateCreated
    });
    return { 
        _id: _id, 
        projectName: projectName,
        hoursTook: hoursTook,
        dateCreated: dateCreated 
    }
}

// EXPORT the variables for use in the controller file.
export { createProject, retrieveProjects, retrieveProjectName, updateProject, deleteProjects }