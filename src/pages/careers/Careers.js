import React from 'react'
import './Careers.css'
import bagIcon from "../../assets/pngs/bag.png" 

const Careers = () => {

  const careers = [
        {
          col1:{title:"Backend Engineer",value:"Technology & Innovation"},
          col2:{title:"3-5 Years",value:"Experience"},
          col3:{title:"Permanent",value:""},
          col4:{title:"Deadline - Oct 07, 2022",value:"Few Days Left"},
        },
        {
          col1:{title:"Front-End Engineer",value:"Technology & Innovation"},
          col2:{title:"3-5 Years",value:"Experience"},
          col3:{title:"Contract",value:""},
          col4:{title:"Deadline - Oct 07, 2022",value:"Few Days Left"},
        },
        {
          col1:{title:"Product Manager",value:"Technology & Innovation"},
          col2:{title:"3-5 Years",value:"Experience"},
          col3:{title:"Permanent",value:""},
          col4:{title:"Deadline - Oct 07, 2022",value:"Few Days Left"},
        },
        {
          col1:{title:"Marketer",value:"Marketing Department"},
          col2:{title:"3-5 Years",value:"Experience"},
          col3:{title:"Permanent",value:""},
          col4:{title:"Deadline - Oct 07, 2022",value:"Few Days Left"},
        }
      ]
    
    // {
    //   data:[
    //     {
    //       title:"Backend Engineer",
    //       value:"Technology & Innovation"
    //     }
    //   ]

    // },
    // {
    //   data:[
    //     {
    //       title:"Backend Engineer",
    //       value:"Technology & Innovation"
    //     }
    //   ]
    // },
    // {
    //   data:[
    //     {
    //       title:"Backend Engineer",
    //       value:"Technology & Innovation"
    //     }
    //   ]
    // },
    // {
    //   data:[
    //     {
    //       title:"Backend Engineer",
    //       value:"Technology & Innovation"
    //     }
    //   ]

    // }


  return (
    <div>
      {/* <div class="rotated">
        <div className="circle rounded-lg bg-[#49496c]" style = {{backgroundColor:"green",borderRadius:20,height:28.69,width:28.69}}>
          <img src = {bagIcon} alt = ""/>
        </div>
      </div> */}
      <div className = "flex justify-center flex-col " >
        <div className = "flex justify-center flex-col items-center">
          <p className = " font-bold text-[2.75rem]">Careers</p>
          <p className = "text-[1.125rem] leading-[28px] mt-[22px]">Know your worth and find a that role that qualifies your skills with us.</p>
        </div>
        <div className = "flex justify-center flex-col items-center ">
          {careers?.map((data,index)=>(

          
          <div className = "flex justify-around items-center bg-slate-400 w-[1001px] h-[115px] rounded-[17.81px]" key ={index}>
            <div>
              <p className = "font-semibold text-[1.125rem] leading-[22.86px]">{data?.col1.title}</p>
              <p className = "text-[0.875rem] leading-[22.86px] text-[#090F47]">{data?.col1.value}</p>
            </div>
            <div>
              <p className = "font-semibold text-[1.125rem] leading-[22.86px]">{data?.col2.title}</p>
              <p className = "text-[0.875rem] leading-[22.86px] text-[#090F47]">{data?.col2.value}</p>
            </div>
            <div>
              <p className = "font-semibold text-[1.125rem] leading-[22.86px] text-[#6B5DD3]">{data?.col3.title}</p>
            </div>
            <div>
              <p className = "font-semibold text-[1.125rem] leading-[22.86px]">{data?.col4.title}</p>
              <p className = "text-[0.875rem] leading-[22.86px] text-[#090F47]">{data?.col4.value}</p>
            </div>
            
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Careers