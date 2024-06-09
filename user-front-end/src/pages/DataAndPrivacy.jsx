import { Box, Grid, IconButton, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import React, { useState } from "react";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import SearchIcon from "@mui/icons-material/Search";


const DataAndPrivacy = () => {
  const [isOpen, setIsOpen] = useState(Array(4).fill(false));

  const toggleAccordion = (index) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = !updatedIsOpen[index];
    setIsOpen(updatedIsOpen);
  };
  return (
    <>
      <Box p={2}>
        <Grid container alignItems="center" width="100%">
          <Grid item xs>
            <Typography
              variant="h5"
              style={{ opacity: "0.5" }}
              color="text.primary"
            >
              Data & Privacy
            </Typography>
          </Grid>

          <Grid item>
            <IconButton sx={{ display: { xs: "none", sm: "block" } }}>
              <InfoIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>

      <div className="flex flex-col items-center gap-6">
        <h1 className="text-2xl">Data & Privacy</h1>
        <p className="text-sm px-2 md:px-0 md:w-[60%]">
          Essential privacy features allowing you to select the information
          stored in your account, control the advertisements you encounter,
          manage the information shared with others, and much more.
        </p>

        <div className="rounded border-gray-400 border-[1px] flex flex-col justify-between  pt-2 w-[96%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Privacy suggestions available </h1>

              <br />
              <p className="pr-5 text-sm">
                Take the Privacy Checkup and choose the seetings that are right
                for you.
              </p>
              <br />
            </div>
            <div className="flex justify-center items-center  w-[150px] h-[100px]  p-0 m-0">
              <img
                src="./Assets/security.png"
                className="w-[100px] h-auto"
                alt=""
              />
            </div>
          </section>
          <section className="border-t-[1px] px-2 py-4 text-blue-500">
            Review suggestions (3)
          </section>
        </div>

        <div className="flex flex-col w-[96%] mt-16">
          <h1 className="text-xl">Your data & Privacy Options</h1>
          <div className="w-[100%]">
            {isOpen.map((isOpenState, index) => (
              <div className=" " key={index}>
                <div className="w-full shadow-md rounded my-6">
                  <div
                    className="border-b cursor-pointer flex flex-row-reverse gap-4 justify-end p-4"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="text-lg">Question {index + 1}</span>
                    <img
                      src="./Assets/eva_arrow-downward-fill.png"
                      className={`h-6 w-6 ${isOpenState ? " rotate-180 " : "rotate-0"}`}
                      alt=""
                    />
                  </div>
                  {isOpenState && (
                    <div className="p-4 border-t">
                      <p className="text-gray-700">Answer Content Here</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center w-[96%]">
          <section className="flex flex-col gap-6 text-xl ">
            <h1>Things you have done and places you have been</h1>
            <p className=" text-sm md:pr-44 x  ">
              Explore your choices for browsing history, advertisements, and
              personalized content. Revisit past searches, articles you've read,
              and videos you've watched, and review the locations you've
              explored.
            </p>
          </section>
          <img
            className="w-40 h-auto"
            src="./Assets/Content management system on tablet.png"
            alt=""
          />
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col w-[96%]">
          <section className="py-0 px-2">
            <h1 className="py-4 text-xl">History Settings</h1>
            <p className=" text-sm mb-16">
              Decide whether to store your activities and visited locations for
              enhanced outcomes, customized maps, suggestions, and additional
              personalization.
            </p>
          </section>
          <section className=" flex justify-between pt-4 pb-2 px-2 items-center">
            <div className="flex gap-4 items-center">
              <HistoryOutlinedIcon />
              <h1 className="text-sm">Web & App activity</h1>
            </div>
            <div className="flex gap-2 items-center">
              <CheckCircleIcon fontSize="small" />
              <h1>On</h1>
            </div>
            <h1 className="text-2xl">&gt;</h1>
          </section>
          <section className=" flex justify-between pt-4 pb-2 px-2 border-t-[1px]">
            <div className="flex gap-4 items-center">
              <LocationOnIcon />
              <h1 className="text-sm">Timeline</h1>
            </div>
            <div className="flex gap-2 items-center ml-24">
              <PauseCircleOutlineOutlinedIcon fontSize="small" />
              <h1>Paused</h1>
            </div>
            <h1 className="text-2xl hidden md:block">&gt;</h1>
          </section>
          <section className=" flex justify-between pt-4 pb-2 px-2 border-t-[1px]">
            <div className="flex gap-4 items-center">
              <YouTubeIcon />
              <h1 className="text-sm">Youtube History</h1>
            </div>
            <div className="flex gap-2 ml-5 items-center">
              <CheckCircleIcon fontSize="small" />
              <h1>On</h1>
            </div>
            <h1 className="text-2xl">&gt;</h1>
          </section>

          <section className="mx-2 flex flex-col gap-7">
            <h2 className="text-sm opacity-60">
              See and delete your history anytime
            </h2>
            <div className="flex max-w-full flex-wrap  gap-16 ml-2 mb-3">
              <button className=" rounded border-[1px] px-4 py-[3px]">
                <div className="flex gap-4 items-center ">
                  <HistoryOutlinedIcon />
                  <h1 className="text-sm">My Activity</h1>
                </div>
              </button>
              <button className=" rounded border-[1px] px-4 py-[3px]">
                <div className="flex gap-4 items-center ">
                  <LocationOnIcon />
                  <h1 className="text-sm">Maps Timeline</h1>
                </div>
              </button>
              <button className=" rounded border-[1px] px-4 py-[3px]">
                <div className="flex gap-4 items-center ">
                  <YouTubeIcon />
                  <h1 className="text-sm">Youtube watch & search history</h1>
                </div>
              </button>
            </div>
          </section>
        </div>

        <div className="flex md:flex-row flex-col justify-between gap-10 w-full px-4">
          <div className="mt-16 border-[1px] rounded px-2 py-4">
            <div className="flex flex-col gap-8">
              <h1 className="text-xl">Personal Result in Research</h1>
              <p className="text-sm">
                You can decide whether Clikkle Search shows you personal results
                based on info in your Clikkle Account
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <CheckCircleIcon fontSize="small" />
                  <h1>On</h1>
                </div>

                <h1 className="text-2xl">&gt;</h1>
              </div>
            </div>
          </div>

          <div className="mt-16 border-[1px] rounded  ">
            <div className="flex flex-col gap-6 ">
              <h1 className="text-xl px-2 mt-10">Personalize Ads</h1>
              <p className="px-2 text-sm">
                You can choose whether the ads you see on Clikkle services and
                partner sites are personalized
              </p>
              <div className="flex justify-between items-center px-2">
                <div className="flex items-center gap-1">
                  <img
                    className="w-10 h-10"
                    src="./Assets/3dicons speaker.png"
                    alt=""
                  />
                  <div className="flex items-center gap-3 ">
                    <div className="flex flex-col gap-2 ">
                      <h1>My Ad center</h1>
                      <h1 className="text-sm">Personalized Ads on Clikkle</h1>
                      <div className="flex gap-2 items-center">
                        <CheckCircleIcon fontSize="small" />
                        <h1>On</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="text-2xl">&gt;</h1>
              </div>
              <div className="flex justify-between pt-6 items-center border-t-[1px] px-2">
                <div className="flex items-center gap-1">
                  <img
                    className="w-10 h-10"
                    src="./Assets/3dicons settings.png"
                    alt=""
                  />
                  <div className="flex items-center gap-3 ">
                    <div className="flex flex-col gap-2 ">
                      <h1>Partner ads settings</h1>
                      <h1 className="text-sm">
                        Options for ads on sites that partner with Clikkle
                      </h1>
                      <div className="flex gap-2 items-center">
                        <CheckCircleIcon fontSize="small" />
                        <h1>On</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="text-2xl">&gt;</h1>
              </div>
              <div className="flex justify-between pt-6 items-center border-t-[1px] px-2">
                <div className="flex items-center gap-1">
                  <img
                    className="w-10 h-10"
                    src="./Assets/3dicons.png"
                    alt=""
                  />
                  <h1 className="w-[70%] text-sm">
                    Your privacy is safeguarded. Content from Files, C-mail, and
                    Campaigns is never utilized for advertising purposes
                  </h1>
                </div>
                <h1 className="text-2xl">&gt;</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col justify-between  pt-2 w-[90%] md:w-[97%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Clikkle Fit Privacy </h1>

              <br />
              <p className="w-[65%] text-sm">
                Manage fit data saved in your Clikkle Account and see privacy
                settings for connected devices and services.
              </p>
              <br />
            </div>
            <div className="flex justify-center items-center w-[150px] h-[100px] ">
              <img
                src="./Assets/security.png"
                className="w-[100px] h-auto"
                alt=""
              />
            </div>
          </section>
          <section className="border-t-[1px] px-2 py-4 text-blue-500">
            Manage Clikkle fit Privacy
          </section>
        </div>
        <section className="mx-2 flex flex-col gap-7 items-start w-full px-4">
          <h2 className="text-sm opacity-60">Other relevant options</h2>
          <div className="flex  gap-2 md:gap-16 ml-2 mb-3 items-center">
            <button className=" rounded border-[1px] px-4 py-[3px]">
              <div className="flex gap-1 items-center ">
                <ShoppingBagOutlinedIcon
                  fontSize="small"
                  style={{ color: "blue" }}
                />
                <h1 className="text-sm">Purchase</h1>
              </div>
            </button>
            <button className=" rounded border-[1px] px-4 py-[3px]">
              <div className="flex gap-1 items-center ">
                <CalendarTodayOutlinedIcon
                  fontSize="small"
                  style={{ color: "blue" }}
                />
                <h1 className="text-sm">Reservations</h1>
              </div>
            </button>
          </div>
        </section>

        <div className="flex flex-col md:flex-row  justify-between items-center w-[96%]">
          <section className="flex  flex-col gap-6 text-xl ">
            <h1>Info you can share with others</h1>
            <p className=" text-sm md:pr-44">
              The personal information stored in your account, such as your
              birthdate or email address, and the tools available to manage it.
              While this information remains private to you, you have the option
              to share some of it with others on Clikkle services
            </p>
          </section>
          <img className="w-40 h-auto" src="./Assets/cuate.png" alt="" />
        </div>

        <div className="rounded border-gray-400 border-[1px] h-max flex flex-col   justify-between my-10 w-[98%]">
          <section className="flex flex-col justify-between px-2  ">
            <div className="flex justify-between items-center ">
              <div className="flex gap-2 text-sm items-center  py-4">
                <img src="./Assets/gg_profile.png" className="w-6 h-6" alt="" />
                <p>Profile</p>
              </div>
              <p>Your info and who can see it</p>
              <p className="text-2xl">&gt;</p>
            </div>
          </section>
          <section className="flex flex-col justify-between px-2 border-t-[1px] ">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 text-sm items-center py-4">
                <img
                  src="./Assets/ic_twotone-share-location.png"
                  className="w-6 h-6"
                  alt=""
                />

                <p>Location sharing</p>
              </div>
              <p className=" md:mr-[79px]">Not sharing with anyone</p>
              <p className="text-2xl">&gt;</p>
            </div>
          </section>
        </div>
        <section className="mx-2 flex flex-col gap-7 items-start w-full px-4">
          <h2 className="text-sm opacity-60">Other relevant options</h2>
          <div className="flex  gap-16 ml-2 mb-3 items-center max-w-full flex-wrap">
            <button className=" rounded-lg border-[1px] px-4 py-[4px]">
              <div className="flex gap-1 items-center ">
                <PaymentOutlinedIcon
                  fontSize="small"
                  style={{ color: "blue" }}
                />
                <h1 className="text-sm">Payment Methods</h1>
              </div>
            </button>
            <button className="rounded-lg border-[1px] px-4 py-[4px]">
              <div className="flex gap-1 items-center ">
                <SubscriptionsOutlinedIcon
                  fontSize="small"
                  style={{ color: "blue" }}
                />
                <h1 className="text-sm">Subscriptions</h1>
              </div>
            </button>
            <button className="rounded-lg border-[1px] px-4 py-[4px]">
              <div className="flex gap-1 items-center ">
                <DevicesOutlinedIcon
                  fontSize="small"
                  style={{ color: "blue" }}
                />
                <h1 className="text-sm">Your devices</h1>
              </div>
            </button>
            <button className=" rounded-lg border-[1px] px-4 py-[4px]">
              <div className="flex gap-1 items-center ">
                <Person2OutlinedIcon
                  fontSize="small"
                  style={{ color: "blue" }}
                />
                <h1 className="text-sm">Contacts</h1>
              </div>
            </button>
          </div>
        </section>

        <div className="rounded border-gray-400 border-[1px] flex flex-col w-[98%]">
          <section className="py-0 px-2 mb-10 mt-4">
            <h1 className="py-4 ">Interested in learning more?</h1>
          </section>
          <section className=" flex justify-between pt-4 pb-2 px-2 border-t-[1px]">
            <div className="flex gap-1 items-center">
              <VisibilityOutlinedIcon fontSize="small" />

              <h1 className="text-sm">Who can see your data</h1>
            </div>

            <h1 className="text-2xl">&gt;</h1>
          </section>
          <section className=" flex justify-between pt-4 pb-2 px-2 border-t-[1px]">
            <div className="flex gap-1 items-center">
              <LightbulbOutlinedIcon fontSize="small" />

              <h1 className="text-sm">
                How your data improves your experience
              </h1>
            </div>

            <h1 className="text-2xl">&gt;</h1>
          </section>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center my-10 w-[96%]">
          <section className="flex flex-col gap-6 text-xl ">
            <h1>Data from apps and services you use</h1>
            <p className=" text-sm nd:w-[60%]">
              The content you generate and your preferences concerning the
              Clikkle services you utilize, as well as third-party applications
              and services.
            </p>
          </section>
          <img
            className="w-40 h-auto"
            src="./Assets/undraw_watch_application_uhc9 1.png"
            alt=""
          />
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col w-[98%]">
          <section className="py-0 px-2 mb-10 mt-4">
            <h1 className="py-4 text-xl">Apps and Services</h1>
          </section>
          <section className=" flex  justify-between pt-4 pb-2 px-2">
            <h1 className="">Contents saved from Clikkle services</h1>
            <h1 className="text-sm">A summary of your services and data</h1>
            <h1 className="text-2xl">&gt;</h1>
          </section>

          <div className="flex flex-wrap max-w-[100vw]  gap-16 ml-2 mb-3 items-center">
            <button className=" rounded-lg border-[1px] px-4 py-[4px]">
              <div className="flex gap-1 items-center ">
                <PaymentOutlinedIcon
                  fontSize="small"
                  style={{ color: "blue" }}
                />
                <h1 className="text-sm">Files</h1>
              </div>
            </button>
            <button className="rounded-lg border-[1px] px-4 py-[4px]">
              <div className="flex gap-1 items-center ">
                <SubscriptionsOutlinedIcon
                  fontSize="small"
                  style={{ color: "blue" }}
                />
                <h1 className="text-sm">E-sign</h1>
              </div>
            </button>
            <button className="rounded-lg border-[1px] px-4 py-[4px]">
              <div className="flex gap-1 items-center ">
                <DevicesOutlinedIcon
                  fontSize="small"
                  style={{ color: "blue" }}
                />
                <h1 className="text-sm">Compain</h1>
              </div>
            </button>
          </div>

          <section className=" flex justify-between pt-10 mb-14 items-center  pb-2 px-2 border-t-[1px]">
            <h1 className="">Third party app and services</h1>
            <h1 className="text-sm w-1/3">
              Keep track of your connections with third party apps and services.
            </h1>
            <h1 className="text-2xl">&gt;</h1>
          </section>

          <div className="flex max-w-[100vw] flex-wrap  gap-16 ml-2 mb-3 items-center">
            <button className=" rounded-lg border-[1px] px-4 py-[4px]">
              <div className="flex gap-1 items-center ">
                <PaymentOutlinedIcon
                  fontSize="small"
                  style={{ color: "blue" }}
                />
                <h1 className="text-sm">Bitly</h1>
              </div>
            </button>
            <button className="rounded-lg border-[1px] px-4 py-[4px]">
              <div className="flex gap-1 items-center ">
                <SubscriptionsOutlinedIcon
                  fontSize="small"
                  style={{ color: "blue" }}
                />
                <h1 className="text-sm">Figma</h1>
              </div>
            </button>
            <button className="rounded-lg border-[1px] px-4 py-[4px]">
              <div className="flex gap-1 items-center ">
                <DevicesOutlinedIcon
                  fontSize="small"
                  style={{ color: "blue" }}
                />
                <h1 className="text-sm">Framer</h1>
              </div>
            </button>
            <button className="rounded-lg border-[1px] px-4 py-[4px]">
              <div className="flex gap-1 items-center ">
                <DevicesOutlinedIcon
                  fontSize="small"
                  style={{ color: "blue" }}
                />
                <h1 className="text-sm">Webflow</h1>
              </div>
            </button>
            <button className="rounded-lg border-[1px] px-4 py-[4px]">
              <div className="flex gap-1 items-center ">
                <DevicesOutlinedIcon
                  fontSize="small"
                  style={{ color: "blue" }}
                />
                <h1 className="text-sm">Freepik</h1>
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 justify-between my-10 mx-2">
          <div className="rounded border-gray-400 border-[1px] flex flex-col justify-between  pt-2 w-full">
            <section className="flex px-2 py-2  ">
              <div className="flex flex-col">
                <h1 className=" text-xl py-2">Email from Clikkle services</h1>

                <br />
                <p className="pr-5 text-sm">
                  See and unsubscribe from emails you get from Clikkle services,
                  such as newsletters, product tips & more.
                </p>
                <br />
              </div>
              <div className="flex justify-center items-center b w-[150px] h-[100px]  p-0 m-0">
                <img
                  src="./Assets/security.png"
                  className="w-[100px] h-auto"
                  alt=""
                />
              </div>
            </section>
            <section className="border-t-[1px] px-2 py-4 text-blue-500">
              Manage email preferences
            </section>
          </div>

          <div className=" border-[1px] rounded  py-4 ">
            <div className="flex flex-col gap-10 ">
              <h1 className="text-xl px-2">Download or delete your data</h1>

              <div className="flex justify-between  px-2 gap-10">
                <CloudDownloadOutlinedIcon />
                <div className="flex flex-col">
                  <h1>Download your data</h1>
                  <h1 className="text-sm">
                    Make a copy of your data to back it up.
                  </h1>
                </div>
                <h1 className="text-2xl">&gt;</h1>
              </div>

              <div className="flex justify-between items-center px-2 pt-2 gap-10 border-t-[1px]">
                <DeleteOutlinedIcon />
                <div className="flex flex-col">
                  <h1>Delete a Clikkle service</h1>
                  <h1 className="text-sm">
                    Remove a service you no longer use.
                  </h1>
                </div>
                <h1 className="text-2xl">&gt;</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center  w-[96%]">
          <section className="flex  flex-col gap-6 text-xl ">
            <h1>More Options</h1>
            <p className=" text-sm md:w-[60%]">
              Alternative methods for managing your data, such as selecting
              preferences for its treatment upon account inactivity or opting to
              delete your account.
            </p>
          </section>
          <img
            className="w-52 h-auto"
            src="./Assets/Settings-rafiki 1.png"
            alt=""
          />
        </div>


        <div className="rounded border-gray-400 border-[1px] h-max flex flex-col   justify-between my-10 w-[98%]">
          <section className="flex flex-col justify-between px-2  ">
            <div className="flex justify-between items-center ">
              <div className="flex gap-2 text-sm items-center  py-4">
                <img src="./Assets/ph_hand.png" className="w-6 h-6" alt="" />
                <p>Make a plan for your digital legacy</p>
              </div>
              <p>Plan what happens to your data</p>
              <p className="text-2xl">&gt;</p>
            </div>
          </section>
          <section className="flex flex-col justify-between px-2 border-t-[1px] ">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 text-sm items-center py-4">
                <img
                  src="./Assets/memory_trash.png"
                  className="w-6 h-6"
                  alt=""
                />

                <p>Delete your Clikkle account</p>
              </div>
              <p className=" ml-20">Delete your entire acoount and data</p>
              <p className="text-2xl">&gt;</p>
            </div>
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] h-max flex flex-col   pt-2 justify-between my-10 w-[98%]">
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
    </>
  );
};

export default DataAndPrivacy;
