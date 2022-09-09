import React from 'react'
import './Careers.css'
import Bag from '../../assets/pngs/circleWork.png'
const Careers = () => {
  const careers = [
    {
      col1: { title: 'Backend Engineer', value: 'Technology & Innovation' },
      col2: { title: '3-5 Years', value: 'Experience' },
      col3: { title: 'Permanent', value: '' },
      col4: { title: 'Deadline - Oct 07, 2022', value: 'Few Days Left' },
    },
    {
      col1: { title: 'Front-End Engineer', value: 'Technology & Innovation' },
      col2: { title: '3-5 Years', value: 'Experience' },
      col3: { title: 'Contract', value: '' },
      col4: { title: 'Deadline - Oct 07, 2022', value: 'Few Days Left' },
    },
    {
      col1: { title: 'Product Manager', value: 'Technology & Innovation' },
      col2: { title: '3-5 Years', value: 'Experience' },
      col3: { title: 'Permanent', value: '' },
      col4: { title: 'Deadline - Oct 07, 2022', value: 'Few Days Left' },
    },
    {
      col1: { title: 'Marketer', value: 'Marketing Department' },
      col2: { title: '3-5 Years', value: 'Experience' },
      col3: { title: 'Permanent', value: '' },
      col4: { title: 'Deadline - Oct 07, 2022', value: 'Few Days Left' },
    },
  ]

  return (
    <div>
      {/* <div class="rotated">
        <div className="circle rounded-lg bg-[#49496c]" style = {{backgroundColor:"green",borderRadius:20,height:28.69,width:28.69}}>
          <img src = {bagIcon} alt = ""/>
        </div>
      </div> */}
      <div className="flex justify-center w-full pb-[153px] flex-col bg-gradient-to-r from-[#e7e1f2] to-[#e9eaf5]">
        <div className="flex justify-center flex-col pt-4 items-center mt-[72px] relative">
          <div className="rotated absolute top-0 right-[37%]">
            <img src={Bag} width={20} height={20} alt={'alt'} />
            <p>Vacancies</p>
          </div>

          <p className=" font-bold text-[3.25rem] text-[#090F47]">Careers</p>
          <p className="text-[1.125rem] leading-[28px] mt-[22px]">
            Know your worth and find a that role that qualifies your skills with
            us.
          </p>
        </div>

        <div className="flex justify-center mt-[62px] flex-col items-center ">
          {careers?.map((data, index) => (
            <div
              className="flex justify-around h-auto flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col items-center mt-[26px] bg-[#FFFFFF] w-[80%] xl:h-[115px] lg:h-[115px] md:h-[115px] sm:h-[115px] rounded-[17.81px]"
              key={index}
            >
              <div>
                <p className="font-semibold text-[1.125rem] leading-[22.86px] text-[#090F47]">
                  {data?.col1.title}
                </p>
                <p className="text-[0.875rem] leading-[22.86px] text-[#090F47]">
                  {data?.col1.value}
                </p>
              </div>
              <div>
                <p className="font-semibold text-[1.125rem] leading-[22.86px] text-[#090F47]">
                  {data?.col2.title}
                </p>
                <p className="text-[0.875rem] leading-[22.86px] text-[#090F47]">
                  {data?.col2.value}
                </p>
              </div>
              <div>
                <p className="font-semibold text-[1.125rem] leading-[22.86px] text-[#6B5DD3]">
                  {data?.col3.title}
                </p>
              </div>
              <div>
                <p className="font-semibold text-[1.125rem] leading-[22.86px] text-[#090F47]">
                  {data?.col4.title}
                </p>
                <p className="text-[0.875rem] leading-[22.86px] text-[#090F47]">
                  {data?.col4.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Careers
