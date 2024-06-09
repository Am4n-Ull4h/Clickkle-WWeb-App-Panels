import React from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ScreenShareOutlinedIcon from "@mui/icons-material/ScreenShareOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import SearchIcon from "@mui/icons-material/Search";


const PeopleAndSharing = () => {
  return (
    <Box p={2}>
      <Grid container alignItems="center" width="100%">
        <Grid item xs>
          <Typography variant="h5" color="text.primary">
            People & Sharing
          </Typography>
        </Grid>

        <Grid item>
          <IconButton sx={{ display: { xs: "none", sm: "block" } }}>
            <InfoIcon />
          </IconButton>
        </Grid>
      </Grid>

      <div className="flex flex-col items-center gap-8 mt-10 ">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-2xl">People & Sharing</h1>
          <p className="text-sm  mx-auto ">
            Settings and recommendations to help you keep your account secure
          </p>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col justify-between  pt-2 w-[96%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Your family on Clikkle </h1>

              <br />
              <p className="pr-10 text-sm ">
                You can create a family group with up to 6 people and get more
                out of Clikkle together.
              </p>
              <br />
            </div>
            <div className="flex justify-center items-center  w-[150px] h-[100px]  p-0 m-0">
              <img
                src="./Assets/cuate.png"
                className="w-[100px] h-auto"
                alt=""
              />
            </div>
          </section>
          <section className="border-t-[1px] px-2 py-4 text-blue-500">
            Get started
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex mt-10 flex-col w-[96%]">
          <section className="py-0 px-2">
            <h1 className="py-4 text-xl">Contacts</h1>
            <div className="flex justify-between items-center">
              <p className=" text-sm mb-16">
                Organize your Clikkle contacts so you can connect with people on
                Clikkle Services like C-mail.
              </p>
              <img
                src="./Assets/cuate.png"
                className="w-[100px] h-auto"
                alt=""
                srcset=""
              />
            </div>
          </section>
          <section className=" flex justify-between pt-4 pb-2 px-2 items-center">
            <div className="flex gap-4 items-center">
              <Person2OutlinedIcon style={{ color: "green" }} />
              <h1 className="text-sm">Contact</h1>
            </div>
            <div className="flex gap-2 items-center">
              <h1 className="px-32 ml-48 text-sm">
                No contacts yet, but some contact info saved for autocomplete
                suggestions
              </h1>
            </div>
            <ScreenShareOutlinedIcon />
          </section>
          <section className=" flex justify-between pt-4 pb-2 px-2 border-t-[1px]">
            <div className="flex gap-4 items-center">
              <img
                src="./Assets/fluent_person-passkey-20-filled.png"
                className="w-6 h-6"
                alt=""
                srcset=""
              />
              <h1 className="text-sm">Contact info saved from interactions</h1>
            </div>
            <div className="flex gap-2 items-center md:mr-52">
              <CheckCircleIcon fontSize="small" />
              <h1 className="text-sm">On</h1>
            </div>
            <h1 className="text-2xl">&gt;</h1>
          </section>

          <section className=" flex justify-between pt-4 pb-2 px-2 border-t-[1px]">
            <div className="flex gap-4 items-center">
              <img
                src="./Assets/material-symbols-light_password.png"
                className="w-6 h-6"
                alt=""
                srcset=""
              />
              <h1 className="text-sm">Contact info from your device</h1>
            </div>
            <div className="flex gap-2 items-center md:mr-40">
              <CheckCircleIcon fontSize="small" />
              <h1 className="text-sm">Off</h1>
            </div>
            <h1 className="text-2xl">&gt;</h1>
          </section>

          <section className=" flex justify-between pt-4 pb-2 px-2 border-t-[1px]">
            <div className="flex gap-4 items-center">
              <img
                src="./Assets/arcticons_com-phone.png"
                className="w-6 h-6"
                alt=""
                srcset=""
              />
              <h1 className="text-sm">Blocked</h1>
            </div>

            <div className="flex gap-2 items-center ml-12 text-sm">
              <h1>No blocked users</h1>
            </div>

            <h1 className="text-2xl">&gt;</h1>
          </section>
        </div>

        <div className="flex md:flex-row flex-col justify-between  gap-6 mx-4 mt-10">
          <div className="rounded border-gray-400 border-[1px] flex flex-col justify-between  pt-2 w-full">
            <section className="flex px-2 py-2 justify-between  ">
              <div className="flex flex-col">
                <h1 className=" text-xl py-2">Location Sharing </h1>

                <br />
                <p className="pr-10 text-sm ">
                  You aren't sharing your real-time location with anyone on
                  Clikkle.
                </p>
                <br />
              </div>
              <div className="flex justify-center items-center  w-[150px] h-[100px]  p-0 m-0">
                <img
                  src="./Assets/cuate.png"
                  className="w-[100px] h-auto"
                  alt=""
                />
              </div>
            </section>
            <section className="border-t-[1px] px-2 py-4 text-blue-500">
              Manage location sharing
            </section>
          </div>

          <div className=" border-[1px] rounded w-full border-gray-400">
            <div className="flex flex-col gap-6 ">
              <h1 className="text-xl px-2 mt-4">Choose what others see</h1>

              <div className="flex justify-between items-center px-2 ">
                <div className="flex items-center gap-1">
                  <img
                    className="w-20 h-20"
                    src="./Assets/3dicons speaker.png"
                    alt=""
                  />

                  <div className="flex flex-col gap-2 ">
                    <h1>About me</h1>
                    <h1 className="text-sm pb-10">
                      What personal info you make visible to others across
                      Clikkle Services.
                    </h1>
                  </div>
                </div>
                <h1 className="text-2xl">&gt;</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between gap-5 mt-10 px-4">
          <div className="border-gray-500 flex flex-col border-[1px] rounded  py-3">
            <div className="flex justify-between px-2">
              <section>
                <h1 className="text-xl">Business features</h1>
                <p className="text-sm">
                  You can add your business and products to Clikkle and get
                  recommendations that will help you connect with customers.
                </p>
              </section>
              <section>
                <img
                  className="md:w-20 md:h-20"
                  src="./Assets/3dicons speaker.png"
                  alt=""
                />
              </section>
            </div>
            <div className=" flex items-center justify-between py-4 px-2">
              <div className="flex items-center gap-2">

            
              <img
                className="w-6 h-6"
                src="./Assets/3dicons speaker.png"
                alt=""
              />
              <div>
                <h1>Business personalizations</h1>
                <div className="flex gap-2 items-center">
                  <img
                    className="w-5 h-5"
                    src="./Assets/3dicons speaker.png"
                    alt=""
                  />
                  <h1>Off</h1>
                </div>
              </div>
              </div>
              <h1 className="text-2xl">&gt;</h1>
            </div>
            <div className=" flex items-center justify-between border-t-[1px]   pt-4 pb-2 px-2">
              <img
                className="w-6 h-6"
                src="./Assets/3dicons speaker.png"
                alt=""
              />
              <div>
                <h1 className=" mb-1 w-1/2">
                  Add your business and products to Clikkle
                </h1>
                <h1 className="text-sm w-[55%]">
                  Get discovered by customers shopping locally and online
                </h1>
              </div>
              <h1 className="text-2xl">&gt;</h1>
            </div>
          </div>

          <div className="border-gray-500 flex flex-col justify-between border-[1px] rounded  py-3">
            <div className="flex flex-col justify-between">
              <div className=" flex flex-col px-2">
                <h1 className="text-xl">Share recommendations in ads</h1>
                <p className="text-sm  w-[85%]">
                  You can choose to show your name, profile photo, and activity
                  in shared endorsement in ads to help others find things you're
                  interested in.
                </p>
              </div>
              <div className=" flex items-center  py-4 px-2 gap-4">
                <img
                  className="w-6 h-6"
                  src="./Assets/3dicons speaker.png"
                  alt=""
                />
                <div>
                  <h1>Share endorsement in ads</h1>
                  <div className="flex gap-2 items-center">
                    <img
                      className="w-5 h-5"
                      src="./Assets/3dicons speaker.png"
                      alt=""
                    />
                    <h1>Off</h1>
                  </div>
                </div>
              </div>
            </div>
          <div className="px-2 border-t-[1px] border-gray-500 pt-2 text-sm text-blue-500">Manage Shared endorsements </div>
          </div>
        </div>
        <div className="rounded border-gray-400 border-[1px] h-max flex flex-col   pt-2  justify-between my-10 w-[98%]">
          <section className="flex flex-col justify-between px-2 pt-8 py-2">
            <h1 className="pb-12  ">
              Looking for something else?
            </h1>
            <div className="flex justify-between">
              <div className="flex gap-2 text-sm">
                <SearchIcon />
                <p >Search Clikkle Account</p>
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

export default PeopleAndSharing;
