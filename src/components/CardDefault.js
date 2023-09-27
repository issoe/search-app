import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Outlet, Link } from "react-router-dom";

export function CardDefault({ content, createdOn }) {
    return (
        <Card className="flex flex-row mt-4 max-w-full bg-[#ccc] py-1">
            <img
                className="h-28 w-24"
                // src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                src="../../pdf.png"
                alt="nature image"
            />

            <CardBody>
                <Link to="/document"><p className="text-lg font-semibold mx-2 underline">file-name.pdf</p></Link>
                <div className='flex flex-row'>
                    <p className="text-base font-normal w-5/6 mx-2">{content}</p>
                    <div className="w-1/6 mx-2">
                        <p className="text-base font-normal">Created on: 2023-02-02</p>
                        <Link to="https://github.com/issoe"><p className="text-base font-normal underline">Created by: KhanhPQ</p></Link>



                    </div>
                </div>
            </CardBody>
        </Card>
    );
}