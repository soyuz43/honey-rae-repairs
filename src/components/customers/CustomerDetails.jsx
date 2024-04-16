// src/components/customers/CustomerDetails
import { useParams } from "react-router-dom"



export const CustomerDetails = () => {

    const { customerId } = useParams()

    return <div className="customer-header">Customer #{customerId}</div>
};