import React from 'react'
import { Navigate } from 'react-router-dom'

import { Iuser } from '../shared/interface/user.interface'

interface IProps {
    user:Iuser | null
    children: React.ReactNode
}

const Protected = ({ user, children }: IProps) => {
    if (!user) {
        return <Navigate to="/" replace />
    }
    return children
}

export default Protected