import React from 'react'
import './Careers.css'
import Bag from '../../assets/pngs/circleWork.png'
import {useNavigate } from "react-router";

const CareerDetails = () => {
    const navigate = useNavigate();

    const goBack = ()=>{
        navigate("/careers")
    }

  return (
    <div className="h-full">
      <div className="flex justify-center w-full pb-[153px] px-9 xl:pl-[165px] lg:pl-[165px] md:pl-[165px] xl:pr-[170px] lg:pr-[170px] ld:pr-[170px] flex-col bg-gradient-to-r from-[#e7e1f2] to-[#e9eaf5]">
        <div className="flex justify-center flex-col pt-4 items-center mt-[72px] relative">
          <div className="rotated absolute top-0 right-[37%]">
            <img src={Bag} width={20} height={20} alt={'alt'} />
            <p>Vacancies</p>
          </div>

          <p className=" font-bold text-[3.25rem] text-[#090F47]">Careers</p>
          <p className="text-[1.125rem] leading-[28px] mt-[22px] ">
            Know your worth and find a that role that qualifies your skills with
            us.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row justify-around mt-[62px] h-full">
          <div className=" h-full bg-white  xl:w-[35%] lg:w-[35%] md:w-[35%]  rounded-lg p-9">
            <div className="flex cursor-pointer" onClick = {goBack}>
              <div className=" ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9998 19.92L8.47984 13.4C7.70984 12.63 7.70984 11.37 8.47984 10.6L14.9998 4.07996"
                    stroke="#6B5DD3"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="font-semibold text-[1.125rem] text-[#6B5DD3] ">
                Back to vacancies
              </p>
            </div>

            <div>
              <p className="font-semibold text-[1.125rem] mt-[58.5px] leading-[22.86px] text-[#090F47]">
                Frontend Engineer
              </p>

              <p className="text-[0.625rem] xl:text-[0.875rem] lg:text-[0.875rem] md:text-[0.875rem] sm:text-[0.875rem] leading-[22.86px] text-[#090F47]">
                Technology & Innovation
              </p>
            </div>

            <div className="mt-[49px]">
              <p className="font-semibold text-[1.125rem] leading-[22.86px] text-[#090F47]">
                3-5 Years
              </p>

              <p className="text-[0.625rem] xl:text-[0.875rem] lg:text-[0.875rem] md:text-[0.875rem] sm:text-[0.875rem] leading-[22.86px] text-[#090F47]">
                Experience
              </p>
            </div>

            <div className="mt-[49px]">
              <p className="font-semibold text-[1.125rem] leading-[22.86px] text-[#6B5DD3]">
                Permanent
              </p>
            </div>

            <div className="mt-[49px]">
              <p className="font-semibold text-[1.125rem] leading-[22.86px] text-[#090F47]">
                Deadline - Oct 07, 2022
              </p>

              <p className="text-[0.625rem] xl:text-[0.875rem] lg:text-[0.875rem] md:text-[0.875rem] sm:text-[0.875rem] leading-[22.86px] text-[#090F47]">
                30 Days Left
              </p>
            </div>
          </div>

          <div className="mt-[52px] xl:w-[55%] lg:w-[55%] md:w-[55%] xl:mt-0 lg:mt-0 md:mt-0 bg-white rounded-lg p-9">
            <p className=" font-semibold text-[1.125rem] text-[#090F47]">
              About the Role
            </p>
            <p className="mt-[30px] text-[0.875rem] leading-[26px]">
              We are looking for an experienced developer to work alongside our
              design team on projects ranging from single page websites to large
              content managed websites. You will be taking static designs and
              will deliver fully built websites, working alongside our
              designers. We are looking for a candidate who has an eagerness to
              learn new skills and to push our technical abilities.
            </p>

            <p className="mt-[57px] font-semibold text-[1.125rem] text-[#090F47]">
              Skills Required
            </p>

            <ul className="mt-[57px]">
              <li className="text-[#8487A3] text-[0.875rem]">
                Responsive - Mobile First
              </li>
              <li className="text-[#8487A3] text-[0.875rem]">HTML</li>
              <li className="text-[#8487A3] text-[0.875rem]">CSS</li>
              <li className="text-[#8487A3] text-[0.875rem]">Javascript</li>
              <li className="text-[#8487A3] text-[0.875rem]">React</li>
              <li className="text-[#8487A3] text-[0.875rem]">
                Experience in UI/UX translation
              </li>
            </ul>

            <p className="font-semibold text-[1.125rem] mt-[57px] text-[#090F47]">
              Bonus / Non Essential Skills
            </p>

            <ul className="mt-[30px]">
              <li className="text-[#8487A3] text-[0.875rem]">
                Google Analytics
              </li>
              <li className="text-[0.875rem] text-[#8487A3]">Google Ads</li>
            </ul>

            <p className="mt-[57px] text-[#090F47]">How to Apply 📌</p>

            <p className="text-[0.875rem] text-[#8487A3] mt-[30px]">
              To apply email: afriRecruit@afri-health.com
            </p>

            <p className="mt-[30px] text-[#090F47] ">
              Please ensure you attach a CV and work samples, quoting reference:
              Salary based on relevant experience. Due to the volume of
              applications we receive, we’re not able to get back to everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareerDetails
