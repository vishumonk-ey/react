import React, { useEffect, useRef, useState } from "react";
import { Container, Input, Button } from "./index";
import Logout from "./header/Logout";
import { Link, useSearchParams } from "react-router-dom";
import databaseService from "../appwrite/databaseService";
import authService from "../appwrite/auth";
import { LoadingPage } from "./index";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import defaultAvatar from "../default.svg";
import pencilIcon from "../pencil-line.svg";

function Profile() {
  const userData = useSelector((state) => state.auth.userData);
  // console.log(userData);
const navigate = useNavigate()
  const dispatch = useDispatch();
  const ref = useRef();
  const invokeFileUploader = () => {
    ref.current.click();
  };
  const [loading, setLoading] = useState(true);
  const [profileId, setProfileId] = useState(null);
  useEffect(() => {
    authService
      .getPreferences()
      .then((allPrefs) => {
        console.log("my all prefs object", allPrefs);

        setProfileId(allPrefs.profileImageId.$id);
      })
      .catch((err) => {
        console.log("error in getting pref", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [profileId]);
  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (profileId) {
      await databaseService.deleteFile(profileId);
    }

    const fileId = await databaseService.uploadFile(file);
    await authService.updatePreferences(fileId);
    setProfileId(fileId);
  };

  const handleDeleteAccount = async () => {
    await authService.deleteAccount();
    dispatch(logout());
    navigate("/login")
  };
  return loading ? (
    <LoadingPage />
  ) : (
    <Container>
      <div className="w-full flex justify-center ">
        <div className="flex flex-col items-center gap-y-8">
          <div className="rounded-full relative">
            <img
              src={
                profileId
                  ? databaseService.getFilePreview(profileId)
                  : defaultAvatar
              }
              className="rounded-full bg-cover"
              height="80"
              width="80"
            />
            <div className="bg-white absolute bottom-[-5px] right-[-5px] rounded-full border-black border p-[0.75px] hover:bg-blue-200">
              <img
                height="32"
                width="32"
                onClick={invokeFileUploader}
                src={pencilIcon}
              />
            </div>

            <Input
              onChange={handleFileChange}
              type="file"
              className="hidden"
              accept="image/*"
              ref={ref}
            ></Input>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <p className="bg-gray-200 py-1 px-3 rounded-lg">
              Name :{" "}
              <span className="italic text-blue-300">{userData.name}</span>
            </p>

            <p className="bg-gray-200 py-1 px-3 rounded-lg">
              Email :{" "}
              <span className="italic text-blue-300">{userData.email}</span>
            </p>

            <Logout></Logout>
          </div>
          <Button className="bg-red-400 mt-4" onClick={handleDeleteAccount}>
            Delete Account
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Profile;
