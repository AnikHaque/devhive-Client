import React, { useEffect, useState } from "react";
import DeveloperIntro from "../../Components/DeveloperProfile.js/DeveloperIntro";
import { useLoaderData } from "react-router-dom";

const DeveloperProfile = () => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/developers/`)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);
  console.log(profile)
  return (
    <div>
      <DeveloperIntro></DeveloperIntro>
    </div>
  );
};

export default DeveloperProfile;
