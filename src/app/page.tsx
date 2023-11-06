import { url } from 'inspector';
import Link from 'next/link'
import x from '@/styles/app.module.css'
import y from '@/styles/test.module.css'
import { Metadata } from 'next';

export const metadata: Metadata = {
     title: 'Homepage',
     description: 'Bla Bla',
}


export default function Home() {
    return (
        <div>
            <ul>
                <li style={{ margin: "20px 0" }}>
                    <Link href={'/facebook'}>
                        Facebook
                    </Link>
                </li>
                <li style={{ margin: "20px 0" }}>
                    <Link href={'/youtube'}>
                        Youtube
                    </Link>
                </li>
                <li style={{ margin: "20px 0" }}>
                    <Link href={'/tiktok'}>
                        Tiktok
                    </Link>
                </li>
            </ul>
           
        </div>
        
    );
}