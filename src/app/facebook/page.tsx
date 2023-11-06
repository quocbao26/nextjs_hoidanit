'use client'
import { useRouter } from 'next/navigation'
import { Button } from 'react-bootstrap'


const Facebook = () => {
    const router = useRouter()
    const handleBtn = () => {
        router.push('/')
    }
    return (
        <>
            Facebook Page
            <div>
                <Button variant='success'>Hỏi Dân IT</Button>
                <button onClick={() => handleBtn()}>Back Home</button>
            </div>
        </>
    )
}

export default Facebook;