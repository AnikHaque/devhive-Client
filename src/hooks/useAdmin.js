import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = () => {
  const [admin, setAdmin] = useState(false);
  const [loadingAdmin, setLoadingAdmin] = useState(true);
  const uid = localStorage.getItem("user_id");

  useEffect(() => {
    // setLoadingAdmin(true);
    const user = localStorage.getItem("jwt");
    const config = {
      headers: {
        Authorization: `Bearer ${user}`,
      },
    };
    const fetchAdminData = async () => {
      try {
        const { data } = await axios.get(
          `https://devhiveserver.vercel.app/admin/${uid}`,
          config
        );
        setAdmin(data?.isAdmin);
        setLoadingAdmin(false);
      } catch (error) {
        console.log(error);
        setLoadingAdmin(false);
      }
    };
    if (uid) {
      fetchAdminData();
    } else {
      setLoadingAdmin(false);
    }
  }, [uid]);

  return [admin, loadingAdmin];
};

export default useAdmin;
