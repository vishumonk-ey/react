import React, { useRef } from "react";
import { Container, Input } from "./index";
import { Link } from "react-router-dom";
import databaseService from "../appwrite/databaseService";
import authService from "../appwrite/auth";
function Profile() {
  const ref = useRef();
  const invokeFileUploader = () => {
    ref.current.click();
  };
  const handleFileChange = (e) => {

  };
  return (
    <Container>
      <div className="w-full flex content-center">
        <div className="flex content-center">
          <div className="rounded-full relative">
            <img src={getProfile()} className="bg-cover" />
            <img
              height="32"
              width="32"
              onClick={invokeFileUploader}
              src="./pencil-line.svg"
              className="absolute bottom-5 right-5"
            />
            <Input
              onChange={handleFileChange}
              type="file"
              className="hidden"
              accept="image/*"
              ref={ref}
            ></Input>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Profile;
