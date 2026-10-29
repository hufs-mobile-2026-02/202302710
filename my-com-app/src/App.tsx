import { useState, useEffect } from "react";
import "./App.css";
import type { GitHubUser } from "./GitHubUser";
import UserInfo from "./UserInfo";
import { getUserProfile } from "./api";

function App() {
  const [user, setUser] = useState<GitHubUser>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // //통신
    // fetch("https://api.github.com/users/jaejoonoh")
    //   .then((response)=>response.json())
    //   .then((data)=>setUser(data))
    //   .catch((error)=>console.log(error))
    //   .finally(()=>setLoading(false));

    getUserProfile("parksam0413-beep")
      .then((res) => setUser(res.data))
      .finally(() => setLoading(false));
      
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && !user && <p>No user found.</p>}
      {user && <UserInfo user={user} />}
    </>
  );
}

export default App;