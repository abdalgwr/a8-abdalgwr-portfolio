// Controllers for the crochet Collection

import 'dotenv/config';
import express from 'express';
import * as crochet from './crochet-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/crochet', (req,res) => { 
    crochet.createProject(
        req.body.projectName, 
        req.body.hoursTook, 
        req.body.dateCreated
        )
        .then(project => {
            console.log(`"${project.projectName}" was added to the collection.`);
            res.status(201).json(project);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Sorry! Unable to add to collection.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/crochet', (req, res) => {
    crochet.retrieveProjects()
        .then(crochet => { 
            if (crochet !== null) {
                console.log(`All crochet projects were successfully retrieved from collection.`);
                res.json(crochet);
            } else {
                res.status(404).json({ Error: 'Unable to reach collection.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Oops! Unable to retrieve collection.' });
        });
});


// RETRIEVE by ID controller
app.get('/crochet/:_id', (req, res) => {
    crochet.retrieveProjectName(req.params._id)
    .then(project => { 
        if (project !== null) {
            console.log(`"${project.projectName}" was retrieved, based on its project name.`);
            res.json(project);
        } else {
            res.status(404).json({ Error: 'Unable to retrieve project name.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Sorry! There was an error processing your request.' });
    });

});


// UPDATE controller ************************************
app.put('/crochet/:_id', (req, res) => {
    crochet.updateProject(
        req.params._id, 
        req.body.projectName, 
        req.body.hoursTook, 
        req.body.dateCreated
    )
    .then(project => {
        console.log(`"${project.projectName}" was updated.`);
        res.json(project);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Oop! Unable to retrieve your projects!' });
    });
});


// DELETE Controller ******************************
app.delete('/crochet/:_id', (req, res) => {
    crochet.deleteProjects(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} projects was deleted.`);
                res.status(200).send({ Success: 'Your projects were successfully deleted!' });
            } else {
                res.status(404).json({ Error: 'Sorry! Unable to delete this project!' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'An error has occurred, please try again.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});