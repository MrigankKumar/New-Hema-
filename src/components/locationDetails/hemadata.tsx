import * as React from "react";



type services = {
  service: any; 
};


const Service = (props: services) => {
const {service}=props
  return (
    <>
      <div className="bg-gray-100 w-full mb-2">

        <div className=" services-list ">

          {service.map((i: any) => {
            return (
              <>
                <div className=" slebx">
                    <h1>{i.productDescription}</h1>
                  {/* <img  src={i.icon} alt="" /> */}
                  <span>{i.productHeading}</span> 
                  
                </div>
            {i.productImage.map((p:any)=>
{
    return(
    <img src={p.url}></img>
    )
}
)}
              </>
            )

          })

          }
      
        </div>
      </div>
     
    </>
  );
};

export default Service;