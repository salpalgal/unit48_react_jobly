import React from "react";
import {useParams} from "react-router-dom"

const CompanyDetails =(companies)=>{
    const {id} = useParams()
    let company = companies.find(company=>company.id === id)
    return(
        <div>
            {company.handle}
            {company.name}
            {company.num_employees}
            {company.description}
            <img src={company.logo_url}></img>
        </div>
    )
}

export default CompanyDetails;