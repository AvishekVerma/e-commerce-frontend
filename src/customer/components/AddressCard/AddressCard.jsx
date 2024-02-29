import React from 'react'

const AddressCard = () => {
    return (
        <div>
            <div className="space-y-3">
                <p className="font-semibold">
                    Raam Kapoor
                    {/* {`${address?.firstName} ${address?.lastName}`} */}
                    </p>

                <p>
                    Nankramguda, hyderabad, telengalna 500032
                    {/* {`${address?.streetAddress} ${address?.city} ${address?.state} ${address?.zipCode}`} */}
                </p>

                <div className="space-y-1">
                    <p className="font-semibold">Phone Number</p>
                    <p>
                        824579423455
                        {/* {address?.mobile} */}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AddressCard