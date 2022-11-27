import { Header } from "../components/Header";
import { Navbox } from "../components/Navbox/Navbox";
import { TopUsers } from "../components/TopUsers/TopUsers";
import { useSelector } from "react-redux";
import { Profile } from "../components/Profile";

export function MyAccount() {
 const userData = useSelector((state) => state.auth.data);
 console.log(userData.avatarUrl);
 return (
  <>
   <Header />
   <div className="flex mt-20">
    <Navbox />
    <Profile
     name={userData.fullName}
     avatar={userData.avatarUrl}
     streak={userData.streak}
    />
    <TopUsers />
   </div>
  </>
 );
}
