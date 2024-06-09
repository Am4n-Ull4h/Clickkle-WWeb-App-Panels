import { Box, Grid, IconButton, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import React, { useEffect, useState } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SearchIcon from "@mui/icons-material/Search";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import axios from "axios";
import { useLocation } from "react-router-dom";


const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Home = () => {
  const [file, setFile] = useState("");

  const query = useQuery();
  const userId = query.get("userId");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/get_user_profile",
          { id: userId }
        );
        // Save the response data to state
        // console.log(response.data.user);
        setFirstName(response.data.user.firstName);
        setLastName(response.data.user.lastName);
      } catch (error) {
        console.error("Error fetching the user profile:", error);
      }
    };

    // Call the async function
    fetchData();
  }, [userId]); // Add userId as a dependency

  return (
    <Box p={2}>
      <Grid container alignItems="center" width="100%">
        <Grid item xs>
          <Typography variant="h5" color="text.primary">
            Home
          </Typography>
        </Grid>

        <Grid item>
          <IconButton sx={{ display: { xs: "none", sm: "block" } }}>
            <InfoIcon />
          </IconButton>
        </Grid>
      </Grid>
      <div className="flex flex-col items-center ">
        <div className="flex flex-col justify-evenly items-center gap-4">
          <div className="flex flex-col justify-center items-center gap-4">
            <img
              className="w-16 h-16 rounded-[50%]"
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://img.freepik.com/premium-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg"
              }
              alt=""
            />

            {/* <input
              type="file"
              id="file"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            /> */}

            <h1 className="text-2xl font-medium">
              Welcome, {firstName} {lastName}
            </h1>
            <h1 className="text-center md:text-nowrap text-sm">
              Manage your info,privacy and security to make Clikkle work better
              for you.{" "}
              <span className="text-blue-500">
                Learn more{" "}
                <HelpOutlineIcon className=" mb-1" fontSize="small" />
              </span>
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-5 w-[100%] px-2">
            <div className="rounded border-gray-400 border-[1px] flex flex-col  pt-2 w-full md:w-1/2">
              <section className="flex px-2 py-2">
                <div className="flex flex-col">
                  <h1 className=" ">
                    Privacy & <br /> Personalizations
                  </h1>

                  <br />
                  <p className=" text-sm w-[70%]">
                    See the data in your Clikkle Account and choose what
                    activity is saved to personalize your Clikkle experience
                  </p>
                  <br />
                </div>
                <div className="flex justify-center items-center bg-slate-500 border-8 rounded-[50%] border-gray-800 md:w-auto w-48 h-28 md:h-auto  p-0 m-0 mt-10">
                  <img
                    src="./Assets/security.png"
                    className=" w-48 md:w-[100px] h-auto"
                    alt=""
                  />
                </div>
              </section>
              <section className="border-t-[1px] px-2 py-4 text-blue-500">
                Manage Your data & privacy
              </section>
            </div>
            <div className="rounded border-gray-400 border-[1px] flex flex-col justify-between  pt-2 w-full md:w-1/2">
              <section className="flex px-2 py-2  ">
                <div className="flex flex-col">
                  <h1 className="  py-2">You have security tips</h1>

                  <br />
                  <p className="w-[70%] text-sm">
                    Security tips are found in the security checkup.
                  </p>
                  <br />
                </div>
                <div className="flex justify-center items-center bg-slate-500 border-8 rounded-[50%] border-gray-800 md:w-auto w-48 h-28 md:h-auto  p-0 m-0 mt-10">
                  <img
                    src="./Assets/security.png"
                    className=" w-48 md:w-[100px] h-auto"
                    alt=""
                  />
                </div>
              </section>
              <section className="border-t-[1px] px-2 py-4  text-blue-500">
                Manage Your data & privacy
              </section>
            </div>
          </div>
        </div>

        <div className="w-full h-1/3 flex flex-col justify-between  rounded border-gray-400 border-[1px] mt-16">
          <section className="flex justify-between py-3 px-2">
            <div className="flex flex-col gap-8 py-4">
              <h1 className=" text-xl">Privacy suggestions available</h1>
              <p className="text-sm">
                Take the privacy checkup and select the settings that are just
                right for you.{" "}
              </p>
            </div>
            <img
              src="./Assets/Home.png"
              className=" w-28 md:w-40 h-auto"
              alt=""
            />
          </section>
          <section className="text-blue-500 border-t-[1px]  py-4 px-2">
            Review suggestions (4)
          </section>
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

        <div className="flex px-2 py-2">
          <p className="w-[70%]  text-sm">
            Only you can see your settings. You might also want to review your
            settings for E-sign, Campaign or whichever Clikkle services you use
            most. Clikkle keeps your data private, safe, and secure.{" "}
            <span className="text-blue-500">
              Learn more &nbsp;
              <HelpOutlineIcon fontSize="small" />
            </span>
          </p>
          <img
            src="./Assets/3dicons.png"
            className="md:w-16 md:h-auto w-28 h-28 "
            alt=""
          />
        </div>
      </div>
    </Box>
  );
};

export default Home;
