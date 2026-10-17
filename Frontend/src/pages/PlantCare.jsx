import React, { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

// Services
import { plantService } from '../service/api'

import CareGuide from '../components/CareGuide'

const PlantCare = () => {
    const { plantId } = useParams();
    
    const navigate = useNavigate();

    const [careDetails, setCareDetails] = useState(null);
    const [plantInfo, setPlantInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
      let cancelled = false;

      const loadCareDetails = async() => {
        setLoading(true);
        setError(" ");

        try {
            const plantData = await plantService.plantDetails(plantId)
            const response = await plantService.plantCareSearch(plantId);
            
            const plantInfo = plantData.data;
            const result = response.data;

            if(!result?.success){
                throw new Error("Unable to load plant care details.");
            }
            
            setCareDetails(result.data);
            setPlantInfo(plantInfo.data);
            console.log("Plant data: ", plantInfo.data);
            

        } catch (error) {
            setError(error.message);
            console.log(error.message);
        }
        finally{
            if(!cancelled){
                setLoading(false);
            }
        }
      }
    
      loadCareDetails();

      return () => {
        cancelled = true;
      }
    }, [plantId]);

    if(loading) return <p>Loading plant care details....</p>

    // if(error){
    //     return (
    //         <div>
    //             <p>{error}</p>
    //             <button onClick={() => navigate("/gallery")}>
    //                 Back to Gallery
    //             </button>
    //             <h1>
    //                 {careDetails? `<p>${JSON.stringify(careDetails, null, 2)}</p>`: "something went wrong"}
    //             </h1>
    //         </div>
    //     );
    // }
    

    return (
        <>
            <CareGuide 
                careDetails={careDetails}
                onClose={()=>navigate(-1)}
                plantImage={plantInfo[0].image}
                plantName={plantInfo[0].name}
                scanDate={plantInfo[0].scan}
                score={plantInfo[0].score}
            />
        </>
    )
}

export default PlantCare