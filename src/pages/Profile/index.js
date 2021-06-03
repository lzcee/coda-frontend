import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../config/contexts/auth";
import api from "../../config/services/api";
import Header from "../../components/Header";
import InfoProfile from "../../components/InfoProfile";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      const payload = {
        access_token: user.access_token,
        id: user.id,
      };
      const response = await api.users.findOne(payload);
      if (response.data) {
        setProfile(response.data);
      }
    };
    getProfile();
  }, [user]);

  return (
    <>
      <Header />
      <InfoProfile {...profile} />
    </>
  );
};

export default Profile;
