'use client'
import Link from "next/link"
import { Table } from "react-bootstrap";
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";
import useSWR, {Fetcher} from "swr";

const ViewDetailBlog = ({params}: {params: {id: string}}) => {

    const fetcher: Fetcher<IBlog, string> = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        `http://localhost:8000/blogs/${params.id}`, 
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );
    if (isLoading) {
        return <div>loading......</div>
    }

    return (
        <div>
            <Link href={'/blogs'}>
                Go to Blogs
            </Link>
            <Card className="text-center">
                <Card.Header>{data?.id}</Card.Header>
                <Card.Body>
                    <Card.Title> Title: {data?.title}</Card.Title>
                    <Card.Text>
                        {data?.content}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">Author: {data?.author}</Card.Footer>
            </Card>
        </div>
        );
}

export default ViewDetailBlog