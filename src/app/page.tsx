
import NavigationBar from "./components/navigationBar";
import DBconnection from "./utils/config/db";


const HomePage= async()=>{
  await DBconnection()
  return (
   <>
<NavigationBar/>
   </>
  );
}
export default HomePage

