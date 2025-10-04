import React from 'react'
import MedicalDasborad from '../MedicalDasborad'
import MedicalService from '../MedicalService'
import Emergency from '../../homepage/Emergency'

const MedicalLayout = () => {
    return (
        <div>
            <MedicalDasborad />
            <MedicalService />
            <Emergency />

        </div>
    )
}

export default MedicalLayout
