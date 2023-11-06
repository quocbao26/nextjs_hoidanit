'use client'

import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import CreateModal from './create.modal';
import UpdateModal from './update.modal';
import { useState } from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import { mutate } from 'swr';

interface IProps {
    blogs: IBlog[];
}

const AppTable  = (props: IProps) => {
    const {blogs} = props;

    const [blog, setBlog] = useState<IBlog | null>(null);
    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);

    const handleDeleteBlog = (id: number) => {
        if(confirm(`Are you sure to delete blog with (id = ${id})?`)) {
            fetch(`http://localhost:8000/blogs/${id}`, {
                method: "DELETE",
            }).then(res => res.json())
                .then(res => {
                    if (res) {
                        toast.success("Delete success!", {
                            position: "top-center",
                            autoClose: 5000,
                        });
                        mutate("http://localhost:8000/blogs");
                    }
                })
        }
    }


    return (
        <>
            <div className='mb-3'
                style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3>Table Content</h3>
                <Button variant="secondary" onClick={() => setShowModalCreate(true)}>Add New</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                <td>
                                    <Button>
                                        <Link style={{color: "white", textDecoration: "none"}} href={`/blogs/${item.id}`}>
                                            View
                                        </Link>
                                    </Button>
                                    <Button variant='warning' className='mx-3'
                                        onClick={() => {
                                            setBlog(item);
                                            setShowModalUpdate(true);
                                        }}
                                    >Edit</Button>
                                    <Button variant='danger'
                                        onClick={() => {
                                            handleDeleteBlog(item.id);
                                        }}
                                    >Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <CreateModal
                showModalCreate={showModalCreate}
                setShowModalCreate={setShowModalCreate}
            ></CreateModal>
            <UpdateModal
                showModalUpdate={showModalUpdate}
                setShowModalUpdate={setShowModalUpdate}
                blog={blog}
                setBlog={setBlog}
            ></UpdateModal>
        </>
    );
}

export default AppTable;

