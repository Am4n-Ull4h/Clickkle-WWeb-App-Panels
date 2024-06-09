import React, { useState } from "react";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import "./Storage.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckIcon from '@mui/icons-material/Check';

// import material_sample from './images/material-symbols-light_cloud-outline.png';
// import storage_bar from './images/storage_bar.png';
// import solar_square from './images/solar_square-forward-broken.png';
// import cleaning_supplies from './images/cleaning_supplies.png';
// import tdesign from './images/tdesign_backup.png';
// import fluent_cloud from './images/fluent_cloud-backup-24-regular.png';
// import flowbite_code from './images/flowbite_code-merge-outline.png';

const Storage = () => {
  const [selectedPackage, setSelectedPackage] = useState("monthly");



  return (
    <div className="">
      <div className=" p-2">
        <div className="mx-auto flex-col  justify-center items-center text-center mt-4">
          <h1 className="opacity-50 text-left text-xl">Storage</h1>
          <img
            src="./Assets/material-symbols-light_cloud-outline.png"
            className="w-16 mx-auto "
            alt="material-sample"
          />
          <h2 className="text-xl my-3">You've got 100GB of storage</h2>
          <p className="text-sm">
            Storage in Clikkle E-sign, Files, and Clikkle Campaigns
          </p>
          <button className=" rounded px-3 py-2 text-sm bg-[#3B84D9] my-3">
            Get more storage
          </button>
          <div className="col-12 col-md-10 mx-auto text-left mt-4 p-4 md:w-[70%]">
            <div className="flex justify-between mb-3 px-4">
              <p className="opacity-70 text-sm">43.75 GB used of 100 GB</p>
              <InfoIcon />
            </div>
            <img src="./Assets/storage bar.png" alt="Storage_bar" />
          </div>

          <div className="md:w-[60%] flex flex-col mx-auto gap-4 ">
            <h1 className="text-start text-sm">STORAGE DETAILS</h1>
            <div className="flex flex-col gap-2">

            <div className="flex justify-between items-center">
                <section className="flex gap-2">
                  <div className="flex items-center gap-2">
                    <section className="w-3 h-3 rounded-[50%] bg-blue-600"></section>
                    <h1 className="text-sm">Swiprr</h1>
                  </div>
                </section>
                <div className="flex gap-4">
                  <h1 className="text-sm">31.07GB</h1>
                  <img
                    src="./Assets/iconoir_mail.png"
                    className="w-5 h-5"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <section className="flex gap-2">
                  <div className="flex items-center gap-2">
                    <section className="w-3 h-3 rounded-[50%] bg-red-600"></section>
                    <h1 className="text-sm">Hivrr</h1>
                  </div>
                </section>
                <div className="flex gap-4">
                  <h1 className="text-sm">4.97GB</h1>
                  <img
                    src="./Assets/iconoir_mail.png"
                    className="w-5 h-5"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <section className="flex gap-2">
                  <div className="flex items-center gap-2">
                    <section className="w-3 h-3 rounded-[50%] bg-green-600"></section>
                    <h1 className="text-sm">Clikkle Ads</h1>
                  </div>
                </section>
                <div className="flex gap-4">
                  <h1 className="text-sm">16.74GB</h1>
                  <img
                    src="./Assets/iconoir_mail.png"
                    className="w-5 h-5"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <section className="flex gap-2">
                  <div className="flex items-center gap-2">
                    <section className="w-3 h-3 rounded-[50%] bg-cyan-600"></section>
                    <h1 className="text-sm">Clikkle SMS</h1>
                  </div>
                </section>
                <div className="flex gap-4">
                  <h1 className="text-sm">2.73GB</h1>
                  <img
                    src="./Assets/iconoir_mail.png"
                    className="w-5 h-5"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <section className="flex gap-2">
                  <div className="flex items-center gap-2">
                    <section className="w-3 h-3 rounded-[50%] bg-yellow-600"></section>
                    <h1 className="text-sm">KeptUp</h1>
                  </div>
                </section>
                <div className="flex gap-4">
                  <h1 className="text-sm">1.22 GB</h1>
                  <img
                    src="./Assets/iconoir_mail.png"
                    className="w-5 h-5"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <section className="flex gap-2">
                  <div className="flex items-center gap-2">
                    <section className="w-3 h-3 rounded-[50%] bg-purple-600"></section>
                    <h1 className="text-sm">Device Backup</h1>
                  </div>
                </section>
                <div className="flex gap-4">
                  <h1 className="text-sm">0.10GB</h1>
                  <img
                    src="./Assets/iconoir_mail.png"
                    className="w-5 h-5"
                    alt=""
                  />
                </div>
              </div>
         
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-[80%] flex flex-col justify-center  mx-auto my-4 px-2 py-2 ">
        <h1>YOUR DEVICE BACKUP (1)</h1>
        <div className="flex justify-between border-[1px] items-center border-gray-500 rounded px-2 py-2">
            <div>
                <div className="flex items-center gap-6">
                    <img src="./Assets/bi_phone.png" className="w-5 h-5" alt="" />
                    <div className="flex flex-col  ">
                        <h1>Galaxy A14</h1>
                        <p className="text-sm text-red-500">Backup incomplete</p>
                    </div>
                </div>
            </div>
            <h1 className="text-2xl">&gt;</h1>

        </div>
      </div>

      {/* page 2 */}

      <div className="rounded border-gray-400 border-[1px] flex flex-col justify-between  pt-2 w-[96%] mx-auto">
          <section className="flex px-2 py-2 justify-between  ">
            <div className="flex flex-col">
              <h1 className=" text-xl py-2">Get Your Space Back </h1>

              <br />
              <p className="pr-5 text-sm">
                See ways to free up space in Clikke Files, E-sign and Ads.
              </p>
          
            </div>
            <div className="flex justify-center items-center  w-[150px] h-[100px]  p-0 m-0">
              <img
                src="./Assets/cleaning supplies.png"
                className="w-[100px] h-auto"
                alt=""
              />
            </div>
          </section>
          <section className=" px-2 py-4 text-blue-500">
            Free up account storage
          </section>
        </div>


        <div className="flex flex-col gap-4 mx-auto md:w-1/2 my-14 justify-center items-center">
            <h1 className="text-xl"> Ways to use your Clikkle Account storage</h1>
            <p className="text-sm ">Back up your phone, upload photos and more</p>
        </div>



        <div className="rounded border-gray-400 border-[1px] flex mt-10 flex-col w-[96%] mx-auto">
       
          <section className=" flex justify-between pt-4 pb-2 px-2 items-center">
            <div className="flex gap-4 items-center">
            <img
                src="./Assets/iconoir_mail.png"
                className="w-6 h-6"
                alt=""
                srcset=""
              />
              <h1 className="text-sm">Back-Up your devices</h1>
            </div>
            
           <KeyboardArrowDownIcon/>
          </section>
       



          <section className=" flex justify-between pt-4 pb-2 px-2 border-t-[1px]">
            <div className="flex gap-4 items-center">
              <img
                src="./Assets/fluent_phone-chat-20-regular.png"
                className="w-6 h-6"
                alt=""
                srcset=""
              />
              <h1 className="text-sm">Import photos from Swipper to Clikkle Files</h1>
            </div>


           
            <KeyboardArrowDownIcon/>
          </section>

          <section className=" flex md:flex-row flex-col justify-between pt-4 pb-2 px-2 border-t-[1px] ">
            <div className="flex gap-4 items-center">
              <img
                src="./Assets/iconoir_mail.png"
                className="w-6 h-6"
                alt=""
                srcset=""
              />
              <h1 className="text-sm">Import photos from iCloud to Clikkle Files</h1>
            </div>

          

            <KeyboardArrowDownIcon/>
          </section>

        </div>

      {/* page 3 */}

      <div className="flex flex-col mx-auto my-10">
        <div className=" flex flex-col gap-2  mx-auto text-center my-4">
          <h1 className="text-xl">Upgrade for more storage</h1>
          <p className="text-sm">More space, extra benefits</p>
          <p className="text-sm">
            Cancel anytime. By subscribing, you agree to{" "}
            <span className="text-sm underline text-blue-500 cursor-pointer">
              Clikkle Plus
            </span>{" "}
            terms and conditions
          </p>
        </div>
      </div>

      <div className="flex justify-center  ">
        <button onClick={()=>setSelectedPackage("monthly")} className={`px-6 py-2 border-[1px] ${selectedPackage==="monthly"?"bg-[#2a2abd35] text-blue-600":""}`}>
            Monthly
        </button>
        <button onClick={()=>setSelectedPackage("annualy")} className={`px-6 py-2 border-[1px] ${selectedPackage==="annualy"?"bg-[#2a2abd35] text-blue-600":""}`}>
            <h1 >

            Annualy
            </h1>
          
            <h1 className="text-xs">Save <span className="text-blue-500 ">30%</span> </h1>

        </button>
      </div>

      {/* page 4 */}

      <div className="flex md:flex-row flex-col my-20">
        <div className="mx-auto">
          <div className="flex flex-col md:flex-row gap-2 mx-auto items-center">
            <div className="">
              <div className=" mx-auto border border-gradient-blue-cyan  rounded p-5">
                <div className="text-center">
                  <p className="opacity-50 text-sm">Current Plan</p>
                  <h5>Basic</h5>
                  <h4 className="text-xl">100 GB</h4>
                  <p className="mt-4">
                    {selectedPackage === "monthly"
                      ? "CA$ 2.79 / month"
                      : "CA$ 27.99 / Year"}
                  </p>
                  <p className="opacity-70 text-sm">
                    {selectedPackage === "monthly" ? (
                      "Billed Monthly"
                    ) : (
                      <>
                        Billed Annually{" "}
                        <span className="text-blue-500">Save 30%</span>
                      </>
                    )}
                  </p>
                  <button className="my-8 px-6 py-2 rounded bg-[#3f3f3f54]">Current Plan</button>
                  <hr className="border-1 my-5" />
                </div>

                <div className=" flex flex-col gap-4" style={{ minHeight: "35vh" }}>
                  <div className="flex gap-2 items-center">
                  <CheckIcon style={{color:"blue"}}/>
                   
                    <p className="text-sm">200 GB of storage for Files, E-sign and C-mail</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon style={{color:"blue"}}/>
                    <p className="text-sm">Share with up to 5 others</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon style={{color:"blue"}}/>
                    <p className="text-sm">3% back in Clikkle Store</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="">
              <div className=" mx-auto border  p-5 border-gradient-blue-cyan rounded-xl">
                <div className="text-center">
                  <p className="opacity-50 text-sm">Current Plan</p>
                  <h5>Standard</h5>
                  <h4 className="text-xl">200 GB</h4>
                  <p className="mt-4">
                    {selectedPackage === "monthly"
                      ? "CA$ 3.99 / month"
                      : "CA$ 39.99 / Year"}
                  </p>
                  <p className="opacity-70 text-sm">
                    {selectedPackage === "monthly" ? (
                      "Billed Monthly"
                    ) : (
                      <>
                        Billed Annually{" "}
                        <span className="text-blue-500">Save 30%</span>
                      </>
                    )}
                  </p>
                  <button className="my-8 px-6 py-2 rounded bg-blue-500">Upgrade</button>
                  <hr className="border-1 my-5" />
                </div>

                <div className=" flex flex-col gap-4" style={{ minHeight: "35vh" }}>
                  <div className="flex gap-2 items-center">
                  <CheckIcon style={{color:"blue"}}/>
                   
                    <p className="text-sm">100 GB of storage for Files, E-sign and C-mail</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon style={{color:"blue"}}/>
                    <p className="text-sm">Share with up to 5 others</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="">
              <div className=" mx-auto border-2  border-gradient-blue-cyan rounded-xl p-5">
                <div className="text-center">
                  <p className="opacity-50 text-sm">Current Plan</p>
                  <h5>Premium</h5>
                  <h4 className="text-xl">2TB</h4>
                  <p className="mt-4">
                    {selectedPackage === "monthly"
                      ? "CA$ 13.99 / month"
                      : "CA$ 139.99 / Year"}
                  </p>
                  <p className="opacity-70 text-sm">
                    {selectedPackage === "monthly" ? (
                      "Billed Monthly"
                    ) : (
                      <>
                        Billed Annually{" "}
                        <span className="text-blue-500">Save 30%</span>
                      </>
                    )}
                  </p>
                  <button className="my-8 px-6 py-2 rounded text-blue-500 border-blue-500 border-[1px] bg-[#3f3f3f54]">Upgrade</button>
                  <hr className="border-1 my-5" />
                </div>

                <div className=" flex flex-col gap-4" style={{ minHeight: "35vh" }}>
                  <div className="flex gap-2 items-center">
                  <CheckIcon style={{color:"blue"}}/>
                   
                    <p className="text-sm">2 TB of storage for Files, E-sign and C-mail</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon style={{color:"blue"}}/>
                    <p className="text-sm">Share with up to 5 others</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon style={{color:"blue"}}/>
                    <p className="text-sm">10% back in the Clikkle store</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon style={{color:"blue"}}/>
                    <p className="text-sm">Clikkle Plus premium features</p>
                  </div>
                </div>

                
              </div>
            </div>

        
          </div>
        </div>
      </div>

      {/* page 5 */}
    </div>
  );
};

export default Storage;
