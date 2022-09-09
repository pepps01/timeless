import React from "react";
import "./Pricing.css";
import ImageComponent from "../../components/ImageComponent";

const Card = ({ title, amount, text, features, className, color }) => {
  return (
    <div className={className}>
      <h3 className={`${color} font-bold text-xl pl-8 pt-4`}>
        {title}
      </h3>
      <div className='flex py-4 pl-8 items-center'>
        <h1 className={`${color} font-bold text-3xl`}>${amount}</h1>
        <p className='text-base ml-2 font-bold'>/ Month</p>
      </div>
      <p className={`${color} text-sm py-4 pl-8`}>{text}</p>
      {features?.map((feature) => (
        <div className='flex  py-2 pl-8'>
          <ImageComponent src='check.png' />
          <p className='ml-4'>{feature}</p>
        </div>
      ))}
      <button className='mt-8 p-4 w-full bg-afriSubHeader rounded-lg'>
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
    <div className='px-8 md:px-16 py-16'>
      <div className='flex flex-col md:py-28'>
        <h2 className='text-4xl font-bold text-afriTextHeader text-center'>
          Flexible plans
        </h2>
        <p className='text-center md:px-14 md:py-4'>
          Choose a prefered health price plan that works best for you and yours.
        </p>
      </div>

      <div className='flex flex-wrap relative justify-center items-center'>
        <Card
          className='bg-white z-5 p-4 text-white rounded-2xl w-72 lg:-rotate-12 h-max m-4'
          title='Classic Afrihealth'
          amount='29'
          features={classicFeatures}
          color="text-afriTextHeader"
          text='Choose a prefered health price plan that works best for you and yours.'
        />
        <Card
          className='bg-afriTextHeader z-10 p-4 text-white rounded-2xl w-72 h-max m-4'
          title='Classic Afrihealth'
          amount='29'
          features={classicFeatures}
          color="text-white"
          text='Choose a prefered health price plan that works best for you and yours.'
        />
        <Card
          className='bg-white z-10 p-4 text-white rounded-2xl w-72 lg:rotate-12 h-max m-4'
          title='Classic Afrihealth'
          amount='29'
          features={classicFeatures}
          color="text-afriTextHeader"
          text='Choose a prefered health price plan that works best for you and yours.'
        />
      </div>
    </div>
  );
};

export default Pricing;
