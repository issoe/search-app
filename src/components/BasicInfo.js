import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

import { Outlet, Link } from "react-router-dom";


export default function BasicInfo({ content, createdOn }) {
    return (
        <Card className="flex flex-row mt-4 border border-gray-400 bg-slate-100 mx-4">
            <img
                className="h-28 mx-2 m-auto"
                // src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                src="../../img.jpg"
                alt="nature image"
            />
        
            
            <CardBody className="w-full">
                <Link to="/document"><p className="text-lg font-semibold mx-2 py-2">Listening & Speaking for IELTS with Answer Key</p></Link>
                {/* <Link to="/document"><p className="text-lg font-semibold mx-2 underline">Introduction</p></Link> */}
                
                <div className='flex flex-row'>
                    <ul className="list-disc list-inside text-base font-normal mx-2">
                        <li className="flex justify-between items-center mt-3">
                            <div className="font-normal text-slate-700 hover:text-blue-600">File name: trying-my-best.pdf</div>
                        </li>
                        <li className="flex justify-between items-center mt-3">
                            <div className="font-normal text-slate-700 hover:text-blue-600"> Authors: Christona Anapher </div>
                        </li>
                        <li className="flex justify-between items-center mt-3">
                            <div className="font-normal text-slate-700 hover:text-blue-600"> Number of page: 12</div>
                        </li>
                        <li className="flex justify-between items-center mt-3">
                            <div className="font-normal text-slate-700 hover:text-blue-600"> Size: 12 MP</div>
                        </li>
                        <li className="flex justify-between items-center mt-3">
                            <div className="font-normal text-slate-700 hover:text-blue-600">Created on: Tue, 21-10-23</div>
                        </li>
                        <li className="flex justify-between items-center mt-3">
                            <div className="font-normal text-slate-700 hover:text-blue-600"> Created by: Quang Khanh</div>
                        </li>
                    </ul>
                </div>
            </CardBody>
        </Card>
    );
}