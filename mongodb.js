
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL='mongodb://127.0.0.1:27017';
const databaseName='task-manager';

MongoClient.connect(connectionURL,{ useNewUrlParser:true },(error,client)=>{
    if(error){
        return console.log("error");
    }
    const db= client.db(databaseName);

    // db.collection('users').findOne({_id:new ObjectID('5d1eb3907896ec3353320975')},(error,result)=>{
    //     if(error){
    //         return console.log(error);
    //     }
    //     console.log(result);
    // });
    
    // db.collection('tasks').findOne({ _id:new ObjectID('5d1eb0dd78a7ce329cfb5b3f')},(error,result)=>{
    //     console.log(result);
    // })
    // db.collection('tasks').find({ completed:false }).toArray((error,documents)=>{
    //     console.log(documents);
    // })

    db.collection('users').deleteOne({
        name: 'kumar'
    }).then((result)=>{
        console.log(result.deletedCount);
    }).catch((error)=>{
        console.log("error!!!!"+error);
    });
});