
import MeetupList from "../components/meetups/MeetupList";
const Dummy_MeetUps = [
    {
       id: 'm1',
       title: ' A first meetup',
       image:  'https://upload.wikimedia.org/wikipedia/commons/4/45/RUS-2016-SPB-Monument_to_Nicholas_I_of_Russia.jpg',
       address: 'somewhere in earth',
       description: 'this is first meetup'
    },
    {
        id: 'm2',
        title: ' A second meetup',
        image:  'https://upload.wikimedia.org/wikipedia/commons/4/45/RUS-2016-SPB-Monument_to_Nicholas_I_of_Russia.jpg',
        address: 'somewhere in second earth',
        description: 'this is second meetup'
     }
]





const HomePage = (props) => {
   
  return (

  <MeetupList meetups={props.meetups}/>

  )
  
}
// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;
//     //fetch data from an API
//     return {
//         props: {
//             meetups:Dummy_MeetUps
//         }
//     }

// }
export async function getStaticProps(){
    return{
        props:{
            meetups:Dummy_MeetUps
        },
        revalidate:1
    }
}

export default HomePage;
