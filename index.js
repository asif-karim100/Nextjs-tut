import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient,ObjectId } from 'mongodb';
import Head from 'next/head'
function MeetupDetails(props){

    return (
        <>
        <Head>
        <title>{props.meetupData.title}</title>
        
        <meta name="description" 
        content={props.meetupData.description}
        />

       
      </Head>

      <MeetupDetail
         image={props.meetupData.image}
         title={props.meetupData.title}
         address= {props.meetupData.address}
         description = {props.meetupData.description}
        />
      
        
        
        </>
       
        
        
        
        
    )

}
export async function getStaticPaths(){
    const client=await MongoClient.connect('mongodb+srv://asifkarim:karim100@cluster0.rh2ajng.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();

    const meetupsCollection =db.collection('meetups')
     
    const meetups = await meetupsCollection.find({}, { _id: 1}).toArray();

    client.close();

    return{
        fallback: true,

        paths: meetups.map(meetup =>({params:{meetupId:meetup._id.toString()},
    })),
        
    }
}
export async function getStaticProps(context){
    //fetch data for single meetup
    const meetupId = context.params.meetupId;
    const client=await MongoClient.connect('mongodb+srv://asifkarim:karim100@cluster0.rh2ajng.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();

    const meetupsCollection =db.collection('meetups')
     
    const selectdMeetup = await meetupsCollection.findOne({
        _id: new ObjectId(meetupId),
    });
    console.log(selectdMeetup)

    client.close();
    
    return{
        props:{
            meetupData:{
                id: selectdMeetup._id.toString(),
                title:selectdMeetup.title,
                address:selectdMeetup.address,
                image:selectdMeetup.image,
                description:selectdMeetup.description,
            }
        }
    }
}

export default MeetupDetails;