import React from 'react'

import { FaArrowRight } from "react-icons/fa";

import test from '../assets/Desktop_image/test1.jpg';
import bg from '../assets/Phone_image/bgcare.jpg';

const CarePhone = () => {
  return (
    <section className='md:hidden flex p-1 gap-1 items-center w-full h-screen overflow-x-auto overflow-y-hidden scrollbar-none bg-center bg-cover relative snap-x snap-mandatory' style={{backgroundImage:`url(${bg})`}}>
     
      <div  className='w-full shrink-0 snap-start flex flex-col items-center border-2 pb-2 overflow-hidden rounded-xl'>
      {/*  Plant Image and info card  */}

        <div className='w-full h-70 bg-center bg-cover rounded-bl-[55%] shadow-black/70 shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.06)]' style={{backgroundImage:`url(${test})`}}></div>
        
        <h1 className='w-full h-fit flex my-1 flex-col py-1 pl-3 text-[24px] leading-tight font-["nunito"] font-extrabold text-[#353f35]'>
          Plant Name Too Long
          <p className='font-medium text-xl text-gray-800'>
            scientific name also here, down
          </p>
        </h1>

        <div className='w-[97%] h-fit min-h-80 border border-black/40 rounded-2xl  bg-white/40 p-1 font-medium text-gray-700 leading-relaxed shadow-black/50 shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.06)]'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, similique nulla aspernatur quae repudiandae sapiente ratione. Alias repellat, cum quia molestias temporibus saepe unde doloremque cumque eaque in vitae ratione ab laborum explicabo ad natus error, sapiente minima repudiandae. Incidunt quia veniam, laborum molestias quae natus ipsa odio ipsum voluptatibus aut delectus repellendus veritatis autem accusantium at. Ea, dolorem quis?
        </div>

        <button className='w-fit h-fit px-3 py-1.5 border mt-5 relative rounded-2xl flex items-center gap-1 text-xl font-semibold text-white bg-[#2b532a]'>
          Next
          <FaArrowRight className='realtive mt-0.5' />
        </button>
      </div>

      <div className='relative w-full shrink-0 h-full gap-3 snap-start flex flex-col items-center border-2 pb-2 overflow-hidden rounded-xl'> 
        <h1 className='w-fit relative -left-15 z-10 flex items-center h-fit p-3 text-2xl font-["nunito"] bg-linear-to-l from-[#E8F5E9] via-[#a2d2a7] to-[#86c48a] rounded-br-4xl px-10 font-bold text-[#2b532a]'>Basic Info,</h1>
      
        {/*  Water block  */}
        <div className='w-[97%] h-fit max-h-60 border rounded-2xl overflow-hidden bg-white/40 backdrop-blur-sm pb-3 font-["nunito"]'>
          <h1 className='w-fit h-fit border px-4 py-1 rounded-br-xl text-xl font-["nunito"] font-semibold text-[#2b532a] bg-linear-to-l from-[#E8F5E9] via-[#a2d2a7] to-[#86c48a]'>Watering</h1>

          <p className='text-[17px] font-medium text-gray-800 p-2 leading-4.5 font-["nunito"]'>
            Regular deep watering, about 1 inch per week
          </p>

          <p className='p-2 text-[17px] font-medium text-gray-800 leading-4.5'>
            <h1 className='font-bold'>Benchmark:</h1>
            top 2-3 cm of soil dry
          </p>
        
        </div>

        {/*  Soile & Sunlight */}
        <div className='w-[97%] h-fit border rounded-2xl overflow-hidden bg-white/40 backdrop-blur-sm pb-3 font-["nunito"]'>
          <h1 className='w-fit h-fit border px-4 py-1 rounded-br-xl text-xl font-["nunito"] font-semibold text-[#2b532a] bg-linear-to-l from-[#E8F5E9] via-[#a2d2a7] to-[#86c48a]'>Soil & Sunlight</h1>

          <p className='p-2 text-[17px] font-medium text-gray-800 leading-4.5'>
            <h1 className='font-bold'>Sunlight Requirements:</h1>
            Full sun to partial shade
          </p>

          <p className='p-2 text-[17px] font-medium text-gray-800 leading-4.5'>
            <h1 className='font-bold'>Soil Type:</h1>
            Well-draining fertile loam or sandy loam
          </p>

          <div className='w-full h-fit flex flex-col gap-1.5 border-y-4 py-1.5 border-dotted'>
            <p className='pl-2 text-[17px] font-medium text-gray-800 leading-4.5 flex items-center gap-2'>
              <h1 className='font-bold'>Hardiness( min & max ):</h1>
              -34 | 35
            </p>
            <p className='pl-2 text-[17px] font-medium text-gray-800 leading-4.5 flex items-center gap-2'>
              <h1 className='font-bold'>Drought:</h1>
              Plant is not Drought tolerant
            </p>
            <p className='pl-2 text-[17px] font-medium text-gray-800 leading-4.5 flex items-center gap-2'>
              <h1 className='font-bold'>Salt:</h1>
              Plant is not salt tolerant
            </p>
          </div>

        </div>

        <p className='p-2 w-[97%] flex items-center border gap-2 rounded-2xl backdrop-blur-sm text-[17px] font-medium text-gray-800 leading-5.5 bg-white/30'>
            <h1 className='font-bold'>Maintenance:</h1>
            Low to moderate
        </p>
        <p className='p-2 w-[97%] flex items-center border gap-2 rounded-2xl backdrop-blur-sm text-[17px] font-medium text-gray-800 leading-5.5 bg-white/30'>
            <h1 className='font-bold'>Growth Rate:</h1>
            moderate to fast
        </p>
        <p className='p-2 w-[97%] flex items-center border gap-2 rounded-2xl backdrop-blur-sm text-[17px] font-medium text-gray-800 leading-5.5 bg-white/30'>
            <h1 className='font-bold'>Care Required:</h1>
            Intermediate
        </p>

      </div>

      <div className='relative w-full shrink-0 h-full gap-3 snap-start flex flex-col items-center border-2 pb-2 overflow-hidden rounded-xl'> 
        <h1 className='w-fit relative -left-15 z-10 flex items-center h-fit p-3 text-2xl font-["nunito"] bg-linear-to-l from-[#E8F5E9] via-[#a2d2a7] to-[#86c48a] rounded-br-4xl px-10 font-bold text-[#2b532a]'>Cultivation,</h1>
    
        <div className='w-[97%] h-fit border rounded-2xl overflow-hidden bg-white/40 backdrop-blur-sm pb-4 font-["nunito"]'>
          <h1 className='w-fit h-fit border px-4 py-1 rounded-br-xl text-xl font-["nunito"] font-semibold text-[#2b532a] bg-linear-to-l from-[#E8F5E9] via-[#a2d2a7] to-[#86c48a]'>Pruning</h1>

          <div className='w-[97%] relative left-1.5 top-1.5 grid grid-cols-2 gap-2'>

            <p className='p-2 text-[17px] font-medium rounded-2xl text-gray-800 leading-4.5 border w-fit'>
              <h1 className='font-bold'>Pruning months:</h1>
              February-March
            </p>
            <p className='p-2 text-[17px] font-medium rounded-2xl text-gray-800 leading-4.5 border w-fit'>
              <h1 className='font-bold'>Pruning amount:</h1>
              Not fixed
            </p>

            <p className='p-2 text-[17px] font-medium rounded-2xl text-gray-800 leading-4.5 border w-fit'>
              <h1 className='font-bold'>Pruning interval:</h1>
              as needed
            </p>
            <p className='p-2 text-[17px]  font-medium rounded-2xl text-gray-800 leading-4.5 border w-fit'>
              <h1 className='font-bold'>Propagation:</h1>
              Grafting (bud grafting)
            </p>

          </div>
        </div>

        <div className='w-[85%] relative -left-4.5 h-fit border rounded-2xl overflow-hidden bg-white/40 backdrop-blur-sm pb-4 font-["nunito"]'>
          <h1 className='w-fit h-fit border px-4 py-1 rounded-br-xl text-xl font-["nunito"] font-semibold text-[#2b532a] bg-linear-to-l from-[#E8F5E9] via-[#a2d2a7] to-[#86c48a]'>Harvesting</h1>

          <div className='w-[97%] relative left-1.5 top-1.5 flex flex-col'>

            <p className='p-2 text-[17px] w-full font-medium rounded-2xl text-gray-800 leading-5'>
              <h1 className='font-bold'>Flowering season:  </h1>
              Year-round in warm climates
            </p>
            <p className='p-2 text-[17px] w-full font-medium rounded-2xl text-gray-800 leading-5'>
              <h1 className='font-bold'>Fruiting season:  </h1>
              Year-round in warm climates
            </p>
            <p className='p-2 text-[17px] w-full font-medium rounded-2xl text-gray-800 leading-5'>
              <h1 className='font-bold'>Harvest season:  </h1>
              Year-round in warm climates
            </p>
            <p className='p-2 text-[17px] w-full font-medium rounded-2xl text-gray-800 leading-5'>
              <h1 className='font-bold'>Harvest method:  </h1>
              Year-round in warm climates
            </p>
            

          </div>
        </div>

        <p className='p-2 w-[97%] flex items-center border gap-1 rounded-2xl backdrop-blur-sm text-[17px] font-medium text-gray-800 leading-5.5 bg-white/30'>
            <h1 className='font-bold'>Human toxicity level:</h1>
            Not toxic
        </p>
        <p className='p-2 w-[97%] flex items-center border gap-1 rounded-2xl backdrop-blur-sm text-[17px] font-medium text-gray-800 leading-5.5 bg-white/30'>
            <h1 className='font-bold'>Pet toxicity level:</h1>
            Not toxic
        </p>

      </div>

      <div className='relative w-full shrink-0 h-full gap-3 snap-start flex flex-col items-center border-2 pb-2 overflow-hidden rounded-xl'>
        <h1 className='w-fit relative -left-15 z-10 flex items-center h-fit p-3 text-2xl font-["nunito"] bg-linear-to-l from-[#E8F5E9] via-[#a2d2a7] to-[#86c48a] rounded-br-4xl px-10 font-bold text-[#2b532a]'>More details,</h1>

        <div className='w-[85%] relative -left-4.5 h-fit border rounded-2xl overflow-hidden bg-white/40 backdrop-blur-sm pb-4 font-["nunito"]'>
          <h1 className='w-fit h-fit border px-4 py-1 rounded-br-xl text-xl font-["nunito"] font-semibold text-[#2b532a] bg-linear-to-l from-[#E8F5E9] via-[#a2d2a7] to-[#86c48a]'>Attracts:</h1>
          <p className='pl-2 font-medium'>Aphids, spider mites, whiteflies, hibiscus mealybug, Butterflies, hummingbirds</p>
        </div>

        <div className='w-[95%] relative h-fit border rounded-2xl gap-y-4 overflow-hidden bg-white/40 backdrop-blur-sm p-4 font-["nunito"] grid grid-cols-2'>
        
          <h1 className='w-full h-fit flex items-center gap-2 text-[18px] font-["nunito"] font-bold'>
            Fruits:
            <p className='font-medium text-gray-700'>true</p>
          </h1>
          <h1 className='w-full h-fit flex items-center gap-2 text-[18px] font-["nunito"] font-bold'>
            Flowers:
            <p className='font-medium text-gray-700'>true</p>
          </h1>

          <h1 className='w-full h-fit flex items-center gap-2 text-[18px] font-["nunito"] font-bold'>
            Cones:
            <p className='font-medium text-gray-700'>true</p>
          </h1>
          <h1 className='w-full h-fit flex items-center gap-2 text-[18px] font-["nunito"] font-bold'>
            Leafs:
            <p className='font-medium text-gray-700'>true</p>
          </h1>

          <h1 className='w-full h-fit flex items-center gap-2 text-[18px] font-["nunito"] font-bold'>
            Edible:
            <p className='font-medium text-gray-700'>true</p>
          </h1>
          <h1 className='w-full h-fit flex items-center gap-2 text-[18px] font-["nunito"] font-bold'>
            Thorny:
            <p className='font-medium text-gray-700'>true</p>
          </h1>

          <h1 className='w-full h-fit flex items-center gap-2 text-[18px] font-["nunito"] font-bold'>
            Invasive:
            <p className='font-medium text-gray-700'>true</p>
          </h1>
          <h1 className='w-full h-fit flex items-center gap-2 text-[18px] font-["nunito"] font-bold'>
            Rare:
            <p className='font-medium text-gray-700'>true</p>
          </h1>

          <h1 className='w-full h-fit flex items-center gap-2 text-[18px] font-["nunito"] font-bold'>
            Tropical:
            <p className='font-medium text-gray-700'>true</p>
          </h1>
          <h1 className='w-full h-fit flex items-center gap-2 text-[18px] font-["nunito"] font-bold'>
            Cuisine:
            <p className='font-medium text-gray-700'>true</p>
          </h1>

        </div>
        
        
      </div>


    </section>
  )
}

export default CarePhone