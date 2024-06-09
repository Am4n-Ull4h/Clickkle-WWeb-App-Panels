import { Box, Grid, IconButton, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { imgContext } from "../context/ImgContext";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const PersonalInfo = () => {
  const { imgFile, changeImg } = useContext(imgContext);
  const query = useQuery();
  const userId = query.get("userId");

  // console.log(userId);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      setFile(newFile);
      changeImg(URL.createObjectURL(newFile)); // Update context with the new image URL
    }
  };

  const [data, setData] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [recoveryEmail, setRecoveryEmail] = useState("");

  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingDob, setIsEditingDob] = useState(false);

  useEffect(() => {
    // Retrieve userId from local storage
    const userId = localStorage.getItem("userId");
    if (userId) {
      // Define an async function to fetch data
      const fetchData = async () => {
        try {
          const response = await axios.post(
            "http://localhost:5000/api/auth/get_user_profile",
            { id: userId }
          );
          setData(response.data.user); // Save the response data to state
          setFirstName(response.data.user.firstName);
          setLastName(response.data.user.lastName);
          setBirthdate(response.data.user.dob);
          setEmail(response.data.user.email);
          setRecoveryEmail(response.data.user.recoveryEmail);
        } catch (error) {
          console.error("Error fetching the user profile:", error);
        }
      };

      // Call the async function
      fetchData();
    }
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
    setIsEditingEmail(true);
    setIsEditingDob(true);
    setIsEditingName(true);
  };

  const handleSaveClick = async () => {
    try {
      // Retrieve userId from local storage
      const userId = localStorage.getItem("userId");
      if (userId) {
        // Simulate a backend API call
        const response = await axios.post(
          "http://localhost:5000/api/auth/update_user_profile",
          {
            userId,
            updates: {
              firstName,
              lastName,
              dob: birthdate,
              email,
              recoveryEmail,
            },
          }
        );
        console.log("User profile updated:", response.data);
        setIsEditing(false);
        setIsEditingEmail(false);
        setIsEditingName(false);
        setIsEditingDob(false);
      } else {
        console.error("User ID not found in local storage");
      }
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  return (
    <Box p={2}>
      <Grid container alignItems="center" width="100%">
        <Grid item xs>
          <Typography
            variant="h5"
            style={{ opacity: "0.5" }}
            color="text.primary"
          >
            Personal Info
          </Typography>
        </Grid>

        <Grid item>
          <IconButton sx={{ display: { xs: "none", sm: "block" } }}>
            <InfoIcon />
          </IconButton>
        </Grid>
      </Grid>

      <div className="flex flex-col mx-2">
        <div className="flex flex-col items-center gap-4 my-4">
          <Typography variant="h5" color="text.primary">
            Personal Info
          </Typography>
          <p className="text-sm text-center">
            Info about you and your preferences across Clikkle services.
          </p>
        </div>

        <div className="flex md:flex flex-col md:flex-row justify-between items-center  gap-28">
          <div className="flex flex-col gap-10">
            <h1 className="text-base ">
              Your profile info in Clikkle services
            </h1>
            <p className="text-sm">
              Personal info and options to manage it. You can make some of this
              info, like your contact details, visible to others so they can
              reach you easily. You can also see a summary of your profiles.
            </p>
          </div>
          <img
            className="w-60 h-auto"
            src="./Assets/Avatars of different smiling people.png"
            alt=""
          />
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col">
          <section className="py-0 px-2">
            <h1 className="py-4">Basic Info</h1>
            <p className="w-[75%] text-sm mb-16">
              Some info may be visible to other people using Clikkle services.
              <span className="text-blue-500">
                &nbsp;Learn more &nbsp;
                <HelpOutlineIcon fontSize="small" />
              </span>
            </p>
            <div className="flex justify-between ">
              <h1 className="text-sm">Profile Picture</h1>
              <h1 className="text-sm">
                Add a profile picture to personalize your account
              </h1>
              <div className="flex items-end relative ">
                <img
                  className="w-12 h-12 rounded-[50%]"
                  src={file ? URL.createObjectURL(file) : imgFile}
                  alt=""
                />
                <label
                  htmlFor="file"
                  className="absolute rounded-b-3xl bg-[#00000060] w-full text-center "
                >
                  <CameraAltOutlinedIcon />
                </label>
                <input
                  type="file"
                  id="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </section>

          <section className="flex justify-between pt-4 pb-2 px-2 border-t-[1px]">
            <h1 className="text-sm w-[42%]">Name</h1>{" "}
            {/* Fixed width for consistent alignment */}
            <div className="flex items-center flex-grow">
              {" "}
              {/* Utilize flex-grow for dynamic width */}
              {isEditingName ? (
                <div className="flex items-center">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="text-sm text-gray-500 bg-transparent px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mr-2"
                  />
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="text-sm text-gray-500 bg-transparent px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mr-2"
                  />
                  <button
                    onClick={handleSaveClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md focus:outline-none"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="flex items-center">
                  <h1 className="text-sm">
                    {firstName} {lastName}
                  </h1>
                </div>
              )}
            </div>
            <h1
              onClick={() => setIsEditingName(true)}
              className="text-2xl cursor-pointer"
            >
              &gt;
            </h1>
          </section>

          <section className="flex justify-between pt-4 pb-2 px-2 border-t-[1px]">
            <h1 className="text-sm w-[42%]">Birthday</h1>{" "}
            {/* Fixed width for consistent alignment */}
            <div className="flex items-center flex-grow">
              {" "}
              {/* Utilize flex-grow for dynamic width */}
              {isEditingDob ? (
                <div className="flex items-center">
                  <input
                    type="date"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    className="text-sm text-gray-500 bg-transparent px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mr-2"
                  />
                  <button
                    onClick={handleSaveClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md focus:outline-none"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="flex items-center">
                  <h1 className=" text-sm">{birthdate}</h1>
                </div>
              )}
            </div>
            <h1
              onClick={() => setIsEditingDob(true)}
              className="text-2xl cursor-pointer"
            >
              &gt;
            </h1>
          </section>

          <section className="flex justify-between pt-4 pb-2 px-2 border-t-[1px]">
            <h1 className="text-sm w-[42%]">Gender</h1>{" "}
            {/* Fixed width for consistent alignment */}
            <div className="flex items-center flex-grow">
              {" "}
              {/* Utilize flex-grow for dynamic width */}
              <h1 className=" text-sm mr-[36px]">{data.gender}</h1>
            </div>
            <h1 className="text-2xl">&gt;</h1>
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16">
          <section className="py-0 px-2">
            <h1 className="py-4 ">Contact Info</h1>
          </section>
          <section className="flex md:flex-row flex-col justify-between pt-4 pb-2 px-2">
            <div className="flex-grow ">
              <div className="flex justify-between">
                <h1 className="text-sm">Email</h1>
                <div className="flex items-center ">
                  {isEditingEmail ? (
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="text-sm text-gray-500 bg-transparent px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mr-2"
                      />
                      <input
                        type="text"
                        value={recoveryEmail}
                        onChange={(e) => setRecoveryEmail(e.target.value)}
                        placeholder="Last Name"
                        className="text-sm text-gray-500 bg-transparent px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mr-2"
                      />
                      <button
                        onClick={handleSaveClick}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md focus:outline-none"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <h1 className="text-sm">
                      {email}
                      <br />
                      {recoveryEmail}
                    </h1>
                  )}
                </div>
                <h1
                  className="text-2xl cursor-pointer"
                  onClick={() => setIsEditingEmail(true)}
                >
                  &gt;
                </h1>
              </div>
            </div>
          </section>
          <section className=" flex justify-between pt-4 pb-2 px-2 border-t-[1px]">
            <h1 className="text-sm">Phone Number</h1>
            <h1 className="mr-12 text-sm">+234 904 945 3391</h1>
            <h1 className="text-2xl">&gt;</h1>
          </section>
          <section className=" flex flex-col gap-4 pt-4 pb-2 px-2 border-t-[1px]">
            <h1 className="text-sm">More Options</h1>
            <button className="border-[1px] flex gap-2 rounded-lg w-max py-2 px-4 mb-3">
              <EmailOutlinedIcon style={{ color: "blue" }} />
              <p className="text-sm">Manage emails from Clikkle</p>
            </button>
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16 px-2">
          <section className="py-0 px-2">
            <h1 className="py-4 ">Addresses</h1>
            <p className="w-[95%] text-sm mb-8">
              Your residential and workplace locations are utilize to tailor
              your interactions across Clikkle services and to provide you with
              more pertinent advertisements.
            </p>
            <p className="w-[95%]  mb-16 text-sm">
              Additionally, you have the option to include addresses in your
              Clikkle Profile, with the ability to control whether others can
              view them.
              <span className="text-blue-500">
                &nbsp;Learn more &nbsp;
                <HelpOutlineIcon fontSize="small" />
              </span>
            </p>
          </section>
          <section className=" flex justify-between pt-4 pb-2 px-2">
            <h1 className="text-sm">Home</h1>
            <h1 className="text-sm">Not set</h1>
            <h1 className="text-2xl">&gt;</h1>
          </section>
          <section className=" flex justify-between pt-4 pb-2 px-2 border-t-[1px]">
            <h1 className="text-sm">Work</h1>
            <h1 className="text-sm">Not set</h1>
            <h1 className="text-2xl">&gt;</h1>
          </section>
          <section className=" flex justify-between pt-4 pb-2 px-2 border-t-[1px]">
            <h1 className="text-sm">Other addresses</h1>
            <h1 className="mr-[90px] text-sm">None</h1>
            <h1 className="text-2xl">&gt;</h1>
          </section>
        </div>

        <div className="mt-16">
          <div className="flex flex-col md:flex-row  gap-5 w-[100%] px-2">
            <div className="rounded border-gray-400 border-[1px] flex flex-col justify-between  pt-2 w-full ">
              <section className="flex px-2 py-2 ">
                <div className="flex flex-col ">
                  <h1 className="text-xl">Your profiles</h1>

                  <br />
                  <p className=" text-sm w-[70%]">
                    Observe the appearance of your various profiles across
                    Clikkle services
                  </p>
                  <br />
                </div>
              </section>
              <section className="border-t-[1px] px-2 py-4  text-blue-500">
                See profiles
              </section>
            </div>
            <div className="rounded border-gray-400 border-[1px] flex flex-col justify-between  pt-2 w-full">
              <section className="flex px-2 py-2  ">
                <div className="flex flex-col">
                  <h1 className=" text-xl py-2">Choose what others see</h1>

                  <br />
                  <p className="pr-5 text-sm">
                    Choose which personal details you want to share with others
                    while using your primary Clikkle Account profile across all
                    Clikkle services.
                  </p>
                  <br />
                </div>
                <div className="flex justify-center items-center bg-slate-500 border-8 rounded-[50%] border-gray-800 md:w-[150px] md:h-[100px] h-24  p-0 m-0 mt-10">
                  <img
                    src="./Assets/security.png"
                    className="md:w-[100px] md:h-auto"
                    alt=""
                  />
                </div>
              </section>
              <section className="border-t-[1px] px-2 py-4 text-blue-500">
                Go to about me
              </section>
            </div>
          </div>
        </div>

        <div className="mt-2 flex md:flex-row flex-col justify-between px-2 items-center">
          <div className="flex flex-col gap-10">
            <h1 className="text-xl">
              Additional details and preferences for Clikkle Services
            </h1>
            <p className="text-sm">
              Methods for confirming your identity and preferences for web
              settings
            </p>
          </div>
          <img
            className="w-52 h-52"
            src="./Assets/Planning with kanban board and notepad notes.png"
            alt=""
          />
        </div>

        <div className="flex flex-col md:flex-row w-full justify-between">
          <div className="mt-16 border-[1px] rounded px-2 py-4">
            <div className="flex flex-col gap-8">
              <h1 className="text-xl">Password</h1>
              <p>A secure password helps project your Clikkle Account</p>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <h1>*********</h1>
                  <h1>Last changed March 15th, 2024</h1>
                </div>
                <h1 className="text-2xl">&gt;</h1>
              </div>
            </div>
          </div>

          <div className="mt-16 border-[1px] rounded  py-4">
            <div className="flex flex-col gap-10 ">
              <h1 className="text-xl px-2">General preference for the web</h1>
              <p className="px-2">
                Manage services for Clikkle services from the web
              </p>
              <div className="flex justify-between items-center px-2">
                <div className="flex items-center gap-3 ">
                  <h1>
                    <PublicOutlinedIcon />
                  </h1>
                  <div className="flex flex-col ">
                    <h1>Language (US)</h1>
                    <h1 className="text-sm">Last changed March 15th, 2024</h1>
                  </div>
                </div>
                <h1 className="text-2xl">&gt;</h1>
              </div>
              <div className="flex justify-between items-center border-t-[1px] px-2">
                <div className="flex items-center gap-3 pt-6 ">
                  <h1>
                    <KeyboardOutlinedIcon />
                  </h1>
                  <div className="flex flex-col ">
                    <h1>Input Tools </h1>
                    <h1 className="text-sm">
                      Type more easily in your language
                    </h1>
                  </div>
                </div>
                <h1 className="text-2xl">&gt;</h1>
              </div>
              <div className="flex justify-between items-center border-t-[1px] pt-4 px-2">
                <div className="flex items-center gap-3">
                  <h1>
                    <AccessibilityNewOutlinedIcon />
                  </h1>
                  <div className="flex flex-col ">
                    <h1>Accessibility</h1>
                    <h1 className="text-sm">Last changed March 15th, 2024</h1>
                  </div>
                </div>
                <h1 className="text-2xl">&gt;</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded border-gray-400 border-[1px] h-max flex flex-col  pt-2 justify-between my-10 w-full">
          <section className="flex flex-col justify-between px-2 pt-8 py-2">
            <h1 className="pb-12  ">Looking for something else?</h1>
            <div className="flex justify-between">
              <div className="flex gap-2 text-sm">
                <SearchIcon />
                <p>Search Clikkle Account</p>
              </div>
              <p className="text-2xl">&gt;</p>
            </div>
          </section>
          <section className="flex flex-col justify-between px-2 border-t-[1px] py-4">
            <div className="flex justify-between">
              <div className="flex gap-2 text-sm">
                <HelpOutlineIcon />
                <p>Search Help options</p>
              </div>
              <p className="text-2xl">&gt;</p>
            </div>
          </section>
          <section className="flex flex-col justify-between px-2 border-t-[1px] py-4">
            <div className="flex justify-between">
              <div className="flex gap-2 text-sm">
                <FeedbackOutlinedIcon />
                <p>Send Feedback</p>
              </div>
              <p className="text-2xl">&gt;</p>
            </div>
          </section>
        </div>
      </div>
    </Box>
  );
};

export default PersonalInfo;
