import React, { useState, useEffect} from 'react'

// Services
import { plantService } from '../service/api'

const PlantCare = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
      const fetchData = async()=>{
        try {
            const response = await plantService.plantCareDetails(2);
            
            if(!response){
                console.log("Error in API call 110");
                return;
            }

            console.log("Success data: ", response.data.data);
            

        } catch (error) {
            console.log("Error Message:", error.message);
            
        }

      };
      fetchData();
    }, [])
    

    return (
        <section className='w-full min-h-screen bg-[#E8F5E9] md:p-4 p-2'>
            {/*  Plant care info */}
            <div className='w-full md:h-70 border rounded-2xl'>

            </div>
        </section>
    )
}

export default PlantCare