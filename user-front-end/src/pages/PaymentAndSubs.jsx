import React from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SearchIcon from "@mui/icons-material/Search";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";


const PaymentAndSubs = () => {
  return (
    <Box p={2}>
      <Grid container alignItems="center" width="100%">
        <Grid item xs>
          <Typography
            variant="h5"
            color="text.primary"
            style={{ opacity: "0.6" }}
          >
            Payments & Subscriptions
          </Typography>
        </Grid>

        <Grid item>
          <IconButton sx={{ display: { xs: "none", sm: "block" } }}>
            <InfoIcon />
          </IconButton>
        </Grid>
      </Grid>

      <div className="flex flex-col px-2">
        <div className="flex flex-col justify-center items-center gap-4 mt-4">
          <h1 className="text-2xl font-medium">Payments & Subscriptions</h1>
          <h1 className="md:text-nowrap text-sm ">
            Your payment info, transactions, recurring payments, and
            reservations 
          </h1>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16 justify-between  pt-2 w-[100%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Payment methods </h1>

              <br />
              <p className="pr-5 text-sm">
                Payment methods are saved in your Clikkle Account so you can use
                them across Clikkle Services like Campaign or Ads.
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
            Manage payment methods
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16 justify-between  pt-2 w-[100%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Payment Info </h1>

              <br />
              <p className="pr-5 text-sm">
                Payment methods and transactions you've made using Clikkle pay.
              </p>
              <br />
            </div>
          </section>
          <section className="border-t-[1px] px-2 py-4 text-blue-500">
            Manage experience
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16 justify-between  pt-2 w-[100%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Purchases </h1>

              <p className="pr-5 text-sm">
                Your transactions, encompassing deliveries and other online
                purchases, conducted with any of our products.
              </p>
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
            Manage payment purchases
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16 justify-between  pt-2 w-[100%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Account storage </h1>

              <div className="flex flex-col gap-4">
                <p className="pr-5 text-sm w-[80%]">
                  Your account storage is shared across Clikkle services, like
                  Files, Ads, Campaign, E-sign, Host, C-mail, Projects and
                  Pitch.
                </p>
                <div className="relative rounded-xl mt-10">
                  <section className="absolute rounded-xl w-[65vw] bg-[#3b85d954] h-[6px]"></section>
                  <section className="absolute rounded-xl w-1/5 bg-[#3B84D9] h-[6px]"></section>
                </div>
                <h1 className="text-sm">8.85 GB used of 40 GB</h1>
              </div>
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
            Manage purchases
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16 justify-between  pt-2 w-[100%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Subscriptions </h1>
              <p className="pr-5 text-sm">
                Your recurring payments for subscription services.
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
            Manage Subscriptions
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16 justify-between  pt-2 w-[100%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Clikkle Ads </h1>

              <p className="pr-5 text-sm w-[75%]">
                Maximize your ad ROl with Clikkle's Al-powered platform.
                Real-time programmatic buying, dynamic retargeting, and
                hyper-targeted geofencing.
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
            Manage Clikkle ads subscriptions
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16 justify-between  pt-2 w-[100%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Clikkle Host </h1>

              <p className="pr-5 text-sm md:w-[80%]">
                NVMe SSD for Lightning-Fast Performance. Advanced DDoS
                Protection and WAF for Website Security. Scalable Resources for
                Cost-Efficient Hosting. 99.9% Uptime Guarantee.
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
            Manage Clikkle Host subscription
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16 justify-between  pt-2 w-[100%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Clikkle Compaigns </h1>

              <p className="pr-5 text-sm md:w-[80%]">
                Clikkle Campaigns offers smart content tools to improve writing
                and prevent spam, along with powerful Al features for secure
                business promotion. Perfect for businesses of all sizes.
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
            Manage Clikkle Compaigns subscription
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16 justify-between  pt-2 w-[100%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Clikkle Files </h1>

              <p className="pr-5 text-sm md:w-[85%]">
                Secure and efficient file storage with Clikkle. Seamless file
                management, flexible sharing options, advanced encryption, and
                two-factor authentication. Unleash your potential with Clikkle.
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
            Manage Clikkle Files subscription
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16 justify-between  pt-2 w-[100%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Clikkle E-sign </h1>

              <p className="pr-5 text-sm md:w-[85%]">
                Streamline document workflows with our e-signature technology.
                Sign and manage documents securely, with advanced features and
                audit trails. Collaborate effectively, anywhere, anytime.
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
            Manage Clikkle E-sign subscription
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16 justify-between  pt-2 w-[100%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Clikkle Pitch </h1>

              <p className="pr-5 text-sm md:w-[90%]">
                Clikkle elevates your pitch with storytelling, strategic
                brilliance, visual symphonies, dynamic delivery and flawless
                execution. Trust us to bring your ideas to life and leave an
                impression.
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
            Manage Clikkle Pitch subscription
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16 justify-between  pt-2 w-[100%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Clikkle C-mail </h1>

              <p className="pr-5 text-sm md:w-[90%]">
                Get the best in secure email and collaboration with C-Mail.
                Advanced features, top-of-the-line security, and easy
                file-sharing. Join now for businesses and individuals alike.
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
            Manage Clikkle C-mail subscription
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16 justify-between  pt-2 w-[100%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Clikkle Projects </h1>

              <p className="pr-5 text-sm md:w-[90%]">
                Discover our innovative project management solutions, powered by
                cutting-edge technology. Streamline workflows, foster
                collaboration and achieve enhanced success in your projects
                effortlessly.
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
            Manage Clikkle Projects subscription
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16 justify-between  pt-2 w-[100%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Clikkle Launch </h1>

              <p className="pr-5 text-sm md:w-[90%]">
                Clikkle is dedicated to simplifying legal processes for
                startups, providing efficient solutions to streamline compliance
                and enable business growth.
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
            Manage Clikkle Launch subscription
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16 justify-between  pt-2 w-[100%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Clikkle Chat </h1>

              <p className="pr-5 text-sm md:w-[90%]">
                Clikkle chat swiftly resolves issues, boosting team efficiency
                while also enhancing customer satisfaction.
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
            Manage Clikkle Chat subscription
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16 justify-between  pt-2 w-[100%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Clikkle Social </h1>

              <p className="pr-5 text-sm md:w-[90%]">
                Millions of people having fun and making new friends on Clikkle
                Social every day. You can too!
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
            Manage Clikkle Social subscription
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16 justify-between  pt-2 w-[100%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Clikkle Watsup </h1>

              <p className="pr-5 text-sm md:w-[90%]">
                Connect seamlessly with loved ones through Clikkle Watsup,
                accessing premium features such as voice-to-text, swift replies,
                in-app video, and a host of others secure services on our
                platform.
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
            Manage Clikkle Watsup subscription
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16 justify-between  pt-2 w-[100%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Clikkle Crew </h1>

              <p className="pr-5 text-sm md:w-[90%]">
                Clikkle Crew is one service for secure high-quality video
                meetings and calls available for everyone. On any device.
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
            Manage Clikkle Crew subscription
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16 justify-between  pt-2 w-[100%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Swippr </h1>

              <p className="pr-5 text-sm md:w-[90%]">
                Adding more of your authentic self to create a dating experience
                that feels genuinely wonderful.
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
            Manage Swippr subscription
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16 justify-between  pt-2 w-[100%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">KeptUp </h1>

              <p className="pr-5 text-sm md:w-[90%]">
                Simplify home maintenance like never before with KeptUp - your
                comprehensive solution for interior and exterior upkeep.
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
            Manage KeptUp subscription
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16 justify-between  pt-2 w-[100%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Hivrr </h1>

              <p className="pr-5 text-sm md:w-[90%]">
                Hivrr:Where Real Love Finds You. Discover deeper connections
                where hearts meet.
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
            Manage Hivrr subscription
          </section>
        </div>

        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16 justify-between  pt-2 w-[100%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Clikkle News </h1>

              <p className="pr-5 text-sm md:w-[90%]">
                Stay ahead of the curve with Clikkle News, your go-to source for
                the freshest trends and breaking stories. Explore, engage, and
                be in the know with Clikkle News.
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
            Manage Clikkle News subscription
          </section>
        </div>

        
        <div className="rounded border-gray-400 border-[1px] flex flex-col mt-16 justify-between  pt-2 w-[100%]">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Reservations </h1>

              <p className="pr-5 text-sm md:w-[90%]">
                Your past and upcoming reservations for flights, hotels, and events using our services.
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
            Manage reservations
          </section>
        </div>


        
        <div className="rounded border-gray-400 border-[1px] h-max flex flex-col  pt-2 justify-between my-10 w-[100%]">
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

export default PaymentAndSubs;
