import React from "react";
import "./Pricing.css";
import ImageComponent from "../../components/ImageComponent";

const Card = ({ title, amount, text, features, className, color,buttonClass, textMargin='mt-[39.72px]'}) => {
  return (
    <div className={className}>
      <h3 className={`${color} font-bold text-xl px-8 pt-[35.1px]`}>
        {title}
      </h3>
      <div className='flex  px-8 items-center mt-[27.17px]'>
        <h1 className={`${color} text-[2.28rem] font-bold text-3xl `}>${amount}</h1>
        <p className='text-base text-[1.125rem]  ml-2 font-bold'>/ Month</p>
      </div>
      <p className={`${color} text-sm  mb-[33.57px] px-8 ${textMargin}`}>{text}</p>
      {features?.map((feature) => (
        <div className='flex  py-2 px-8'>
          <ImageComponent src='check.png' />
          <p className='ml-4'>{feature}</p>
        </div>
      ))}
      <button className={buttonClass}>
        Choose Plan
      </button>
    </div>
  );
};

const classicFeatures = [
  "Unlimited Products",
  "24/7 Support",
  "Discount Codes",
  "Gift Cards",
  "Professional Reports",
];
const Pricing = () => {
  return (
    <div className='px-8 md:px-16 py-16 bg-gradient-to-r from-[#e7e1f2] to-[#e9eaf5]'>
      <div className='flex flex-col md:py-16'>
        <h2 className='text-4xl font-bold text-PrimaryTextColor text-center'>
          Flexible plans
        </h2>
        <p className='text-center md:px-14 md:py-4'>
          Choose a prefered health price plan that works best for you and yours.
        </p>
      </div>

      <div className='flex flex-wrap justify-center items-center'>
        <Card
          className='bg-white z-5 p-4 py-4 text-white rounded-2xl md:h-[33.125rem] mb-28 w-80 lg:mb-2 lg:-rotate-[10deg]  m-4'
          title='Classic Afrihealth'
          amount='29'
          features={classicFeatures}
          textMargin={"mt-[20.72px]"}
          color="text-PrimaryTextColor"
          text='Choose a prefered health price plan that works best for you and yours.'
          buttonClass = {"p-4  w-full bg-afriSubHeader rounded-lg"}
        />
        <div className="relative"> 
          <ImageComponent src="Pills.png" className="absolute right-10 top-0 z-20" />
          <Card
            className='bg-PrimaryTextColor md:h-[36.625rem] z-10 p-4 text-white rounded-2xl md:w-[21.75rem] w-80  m-4'
            title='Classic Afrihealth'
            amount='29'
            features={classicFeatures}
            color="text-white"
            text='Choose a prefered health price plan that works best for you and yours.'
            buttonClass = {"p-4 mt-[51.71px] w-full bg-afriSubHeader rounded-lg"}
          />
        </div>
        <Card
          className='bg-white z-10 p-4 text-white rounded-2xl w-80 lg:rotate-12 h-max m-4'
          title='Classic Afrihealth'
          amount='29'
          features={classicFeatures}
          color="text-PrimaryTextColor"
          text='Choose a prefered health price plan that works best for you and yours.'
          buttonClass = "p-4  w-full bg-afriSubHeader rounded-lg"
        />
      </div>
    </div>
  );
};

export default Pricing;
