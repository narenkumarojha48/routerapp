import { useParams } from "react-router-dom";
const users = [
  {id:1,name:'Raju', email:'Raju@gmal',phone:2345565,city:'Delho'},
  {id:2,name:'Harish',email:'Harish@gmal',phone:2345555,city:'Mumbai'},
  {id:3,name:'Ishan',email:'erswh@gmal',phone:123455,city:'Seol'},
  {id:4,name:'Rajesh',email:'Rajesh@gmal',phone:123455,city:'Odisha'},
  {id:5,name:'Ishan',email:'Ishan@gmal',phone:123455,city:'Rajesthan'},
]
export default function UserDetail(){
    const {userid} = useParams();
   let userdata = users.find(item=>item.id=== +userid);
    console.log(userdata)
    return(<>
      <article className="userdetail">
        <h4>This is user details page {userid}</h4>
        <p><span className="label">Name:-</span> {userdata.name}</p>
        <p><span className="label">Email:- </span>{userdata.email}</p>
        <p><span className="label">Phone:-</span> {userdata.phone}</p>
        <p><span className="label">City:-</span> {userdata.city}</p>
      </article>
    </>)
}