import React from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

const Security = () => {
  return (
    <Box p={2}>
      <Grid container alignItems="center" width="100%">
        <Grid item xs>
          <Typography
            variant="h5"
            style={{ opacity: "0.5" }}
            color="text.primary"
          >
            Security
          </Typography>
        </Grid>

        <Grid item>
          <IconButton sx={{ display: { xs: "none", sm: "block" } }}>
            <InfoIcon />
          </IconButton>
        </Grid>
      </Grid>

      <div className="flex flex-col items-center">
        <h1 className="text-2xl">Security</h1>
        <p className="text-sm w-[96%] my-8 text-center md:w-[60%]">
          Settings and recommendations to help you keep your account secure
        </p>

        <div className="rounded border-gray-400 border-[1px] flex flex-col justify-between  pt-2 w-[96%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">You have security tips </h1>

              <br />
              <p className="pr-5 text-sm">
                Security tips is found in the Security Checkup
              </p>
              <br />
            </div>
            <div className="flex justify-center items-center  w-[150px] h-[100px]  p-0 m-0">
              <img
                src="./Assets/3dicons.png"
                className="w-[100px] h-auto"
                alt=""
              />
            </div>
          </section>
          <section className="border-t-[1px] px-2 py-4 text-blue-500">
            Review security tips
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] mt-10 flex flex-col justify-between  pt-2 w-[96%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col w-full py-4 pb-3">
              <h1 className=" text-xl py-2">Recent Security Activity </h1>

              <div className="flex justify-between   items-center">
                <p className=" text-sm">
                  Notion calender was given account access
                </p>
                <p>Mar 21</p>
                <h1 className="text-2xl">&gt;</h1>
              </div>
            </div>
          </section>
          <section className="border-t-[1px] px-2 py-4 text-blue-500">
            Review security activity
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex mt-10 flex-col w-[96%]">
          <section className="py-0 px-2">
            <h1 className="py-4 text-xl">How you sign in to Clikkle</h1>
            <p className=" text-sm mb-16">
              Make sure you can always access your Clikkle account by keeping
              this information up to date.
            </p>
          </section>
          <section className=" flex justify-between pt-4 pb-2 px-2 items-center">
            <div className="flex gap-4 items-center">
              <SecurityOutlinedIcon />
              <h1 className="text-sm">2 Steps Verification</h1>
            </div>
            <div className="flex gap-2 items-center">
              <CheckCircleIcon fontSize="small" />
              <h1>On since March 14,2024</h1>
            </div>
            <h1 className="text-2xl">&gt;</h1>
          </section>
          <section className=" flex justify-between pt-4 pb-2 px-2 border-t-[1px]">
            <div className="flex gap-4 items-center">
              <img
                src="./Assets/fluent_person-passkey-20-filled.png"
                className="w-6 h-6"
                alt=""
                srcset=""
              />
              <h1 className="text-sm">Passkeys & Security keys</h1>
            </div>
            <div className="flex gap-2 items-center  md:mr-40">
              <h1>1 Passkey</h1>
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
              <h1 className="text-sm">Passkeys & Security keys</h1>
            </div>
            <div className="flex gap-2 items-center  md:mr-8">
              <h1 className="text-sm md:text-base">Last changed Jan 20,2024</h1>
            </div>
            <h1 className="text-2xl">&gt;</h1>
          </section>

          <section className=" flex justify-between pt-4 pb-2 px-2 border-t-[1px]">
            <div className="flex gap-4 items-center">
              <img
                src="./Assets/material-symbols-light_password-2-off.png"
                className="w-6 h-6"
                alt=""
                srcset=""
              />
              <h1 className="text-sm">Skip password when possible</h1>
            </div>

            <div className="flex gap-2 items-center md:mr-52">
              <CheckCircleIcon fontSize="small" />
              <h1>On</h1>
            </div>

            <h1 className="text-2xl">&gt;</h1>
          </section>
          <section className=" flex justify-between pt-4 pb-2 px-2 border-t-[1px]">
            <div className="flex gap-4 items-center">
              <img
                src="./Assets/bi_phone.png"
                className="w-6 h-6"
                alt=""
                srcset=""
              />
              <h1 className="text-sm">Clikkle promt</h1>
            </div>

            <div className="flex gap-2 items-center md:mr-16">
              <CheckCircleIcon fontSize="small" />
              <h1>1 device</h1>
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
              <h1 className="text-sm">2-Step Verification phones</h1>
            </div>

            <div className="flex gap-2 items-center md:mr-32">
              <h1>0806 923 3491</h1>
            </div>

            <h1 className="text-2xl">&gt;</h1>
          </section>

          <section className=" flex justify-between pt-4 pb-2 px-2 border-t-[1px]">
            <div className="flex gap-4 items-center">
              <img
                src="./Assets/fluent_phone-chat-20-regular.png"
                className="w-6 h-6"
                alt=""
                srcset=""
              />
              <h1 className="text-sm">Recovery Phone</h1>
            </div>

            <div className="flex gap-2 items-center md:mr-16">
              <h1>0904 291 3817</h1>
            </div>

            <h1 className="text-2xl">&gt;</h1>
          </section>

          <section className=" flex md:flex-row flex-col justify-between pt-4 pb-2 px-2 border-t-[1px] ">
            <div className="flex gap-4 items-center">
              <img
                src="./Assets/iconoir_mail.png"
                className="w-6 h-6"
                alt=""
                srcset=""
              />
              <h1 className="text-sm">Recovery Email</h1>
            </div>

            <div className="flex gap-2 items-center md:ml-14 ">
              <h1>matthewadebayo@yahoo.com</h1>
            </div>

            <h1 className="text-2xl">&gt;</h1>
          </section>

          <section className="mx-2 flex flex-col gap-7">
            <h2 className="text-sm opacity-60">
              You can add more sign-in options
            </h2>
            <div className="flex  gap-16 ml-2 mb-3 flex-wrap">
              <button className=" rounded-lg border-[1px] px-4 py-[3px]">
                <div className="flex gap-4 items-center ">
                  <HistoryOutlinedIcon />
                  <h1 className="text-sm">Authenticator</h1>
                </div>
              </button>
              <button className=" rounded-lg border-[1px] px-4 py-[3px]">
                <div className="flex gap-4 items-center ">
                  <LocationOnIcon />
                  <h1 className="text-sm">Backup 2-step verifictaion phones</h1>
                </div>
              </button>
              <button className=" rounded-lg border-[1px] px-4 py-[3px]">
                <div className="flex gap-4 items-center ">
                  <YouTubeIcon />
                  <h1 className="text-sm">Backup codes</h1>
                </div>
              </button>
            </div>
          </section>
        </div>

        <div className="flex flex-col md:flex-row justify-between   mt-10 gap-8 w-full">
          <div className="mt-16 border-[1px] rounded w-full pb-4 ">
            <div className="flex flex-col gap-6 ">
              <h1 className="text-xl px-2 mt-10">Your devices</h1>
              <p className="px-2 ">Where you're signed in</p>
              <div className="flex justify-between items-center px-2">
                <div className="flex items-center gap-1">
                  <img
                    className="w-8 h-8"
                    src="./Assets/noto_laptop.png"
                    alt=""
                  />
                  <div className="flex items-center gap-3 ">
                    <div className="flex flex-col gap-2 ">
                      <h1 className="text-sm">
                        2 sessions on Windows computers(s)
                      </h1>
                      <h1 className="text-sm">Windows, windows</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center px-2">
                <div className="flex items-center gap-1">
                  <img
                    className="w-8 h-8"
                    src="./Assets/noto_laptop.png"
                    alt=""
                  />
                  <div className="flex items-center gap-3 ">
                    <div className="flex flex-col gap-2 ">
                      <h1 className="text-sm">
                        2 sessions on Windows computers(s)
                      </h1>
                      <h1 className="text-sm">Windows, windows</h1>
                    </div>
                  </div>
                </div>
              </div>

              <button className=" rounded border-[1px] px-4 py-[3px] w-max ml-2">
                <div className="flex gap-4 items-center ">
                  <LocationOnIcon />
                  <h1 className="text-sm">Maps Timeline</h1>
                </div>
              </button>
              <section className="border-t-[1px] px-2 py-4 text-blue-500">
                Manage all devices
              </section>
            </div>
          </div>

          <div className="mt-16 border-[1px] rounded  w-full ">
            <div className="flex flex-col gap-6 ">
              <h1 className="text-xl px-2 mt-10 pr-10">
                Your connections to third party apps & services
              </h1>
              <p className="px-2 text-sm mr-10">
                Keep track of your connections to third party apps & services.
              </p>
              <div className="flex justify-between items-center px-2">
                <div className="flex items-center gap-3">
                  <img
                    className="w-auto h-5"
                    src="./Assets/logos_figma.png"
                    alt=""
                  />

                  <h1 className="text-sm">Figma</h1>
                </div>
                <h1 className="text-2xl">&gt;</h1>
              </div>

              <div className="flex justify-between items-center px-2">
                <div className="flex items-center gap-3">
                  <img
                    className="w-auto h-5"
                    src="./Assets/cib_bitly.png"
                    alt=""
                  />

                  <h1 className="text-sm">Bitly</h1>
                </div>
                <h1 className="text-2xl">&gt;</h1>
              </div>

              <div className="flex justify-between items-center px-2">
                <div className="flex items-center gap-3">
                  <img
                    className="w-auto h-5"
                    src="./Assets/skill-icons_webflow.png"
                    alt=""
                  />

                  <h1 className="text-sm">Webflow</h1>
                </div>
                <h1 className="text-2xl">&gt;</h1>
              </div>

              <h1 className="text-sm px-2">+ 11 more</h1>
              <section className="border-t-[1px] px-2 py-4 text-blue-500">
                See all connections
              </section>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Security;
