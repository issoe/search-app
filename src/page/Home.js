/* eslint-disable no-sparse-arrays */
import { useEffect, useRef, useState } from 'react';
import { signOut, getAuth, onAuthStateChanged } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

import '../input.css';

import app from '../firebase';
// import Modal from '../components/Modal';
import CardDefault from '../components/CardDefault';
import useDebounce from '../hook/useDebounce';
import { Modal } from 'antd';

const myData = {
    took: 7,
    timed_out: false,
    _shards: {
        total: 1,
        successful: 1,
        skipped: 0,
        failed: 0,
    },
    hits: {
        total: {
            value: 1,
            relation: 'eq',
        },
        max_score: 1.0,
        hits: [
            {
                _index: 'posts',
                _id: '1',
                _score: 1.0,
                _source: {
                    is_deleted: false,
                    post_id: 1,
                    created_on: '2023-02-02T11:30:30.120Z',
                    is_accepted: true,
                    is_changed: false,
                    user_id: 1,
                    topic_id: 1,
                    post_content: 'Visit New Zealand for stunning landscapes and adventure.',
                    title: 'Travel Destination Recommendation',
                },
            },
            {
                _index: 'posts',
                _id: '1',
                _score: 1.0,
                _source: {
                    is_deleted: false,
                    post_id: 1,
                    created_on: '2023-02-02T11:30:30.120Z',
                    is_accepted: true,
                    is_changed: false,
                    user_id: 1,
                    topic_id: 1,
                    post_content:
                        'Travel Destination Recommendation, Travel Destination Recommendation, Travel Destination Recommendation, Visit New Zealand for stunning landscapes and adventure.',
                    title: 'Travel Destination Recommendation',
                },
            },
            {
                _index: 'posts',
                _id: '1',
                _score: 1.0,
                _source: {
                    is_deleted: false,
                    post_id: 1,
                    created_on: '2023-02-02T11:30:30.120Z',
                    is_accepted: true,
                    is_changed: false,
                    user_id: 1,
                    topic_id: 1,
                    post_content: 'Visit New Zealand for stunning landscapes and adventure.',
                    title: 'Travel Destination Recommendation',
                },
            },
            ,
            {
                _index: 'posts',
                _id: '1',
                _score: 1.0,
                _source: {
                    is_deleted: false,
                    post_id: 1,
                    created_on: '2023-02-02T11:30:30.120Z',
                    is_accepted: true,
                    is_changed: false,
                    user_id: 1,
                    topic_id: 1,
                    post_content: 'Visit New Zealand for stunning landscapes and adventure.',
                    title: 'Travel Destination Recommendation',
                },
            },
            ,
            {
                _index: 'posts',
                _id: '1',
                _score: 1.0,
                _source: {
                    is_deleted: false,
                    post_id: 1,
                    created_on: '2023-02-02T11:30:30.120Z',
                    is_accepted: true,
                    is_changed: false,
                    user_id: 1,
                    topic_id: 1,
                    post_content: 'Visit New Zealand for stunning landscapes and adventure.',
                    title: 'Travel Destination Recommendation',
                },
            },
            ,
            {
                _index: 'posts',
                _id: '1',
                _score: 1.0,
                _source: {
                    is_deleted: false,
                    post_id: 1,
                    created_on: '2023-02-02T11:30:30.120Z',
                    is_accepted: true,
                    is_changed: false,
                    user_id: 1,
                    topic_id: 1,
                    post_content: 'Visit New Zealand for stunning landscapes and adventure.',
                    title: 'Travel Destination Recommendation',
                },
            },
        ],
    },
};

export default function Home() {
    // firebase
    const auth = getAuth(app);

    // navigate
    const navigate = useNavigate();

    // useState
    const [searchValue, setSearchValue] = useState('');
    const debounce = useDebounce(searchValue, 700);
    const [dataSearch, setDataSearch] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // Ref
    const inputRef = useRef();

    // useEffect
    // search
    useEffect(() => {
        setDataSearch(
            myData.hits.hits?.map((post) => {
                return { ...post._source };
            }),
        );
        // if (debounce.trim().length > 0) {
        //   const data = {
        //     "query": {
        //       "prefix": {
        //         "title": debounce.trim(),
        //       }
        //     }
        //   }

        //   axios.post('http://localhost:9200/posts/_search', data, {
        //     headers: {
        //       'Content-Type': 'application/json',
        //       // 'Access-Control-Allow-Origin': '*',
        //     }
        //   })
        //     .then((response) => {
        //       console.log("response", response.data.hits.hits);
        //       // setDataSearch(response.data.hits.hits?.map(post => { return { ...post._source } }));

        //       setDataSearch(myData.hits.hits?.map(post => { return { ...post._source } }));
        //     })
        //     .catch((error) => {
        //       console.log("Error", error);
        //     })
        // }
    }, [debounce]);

    // checking user who is logging in
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            // Having an user who logging in
            if (user) {
                console.log('Co nguoi dang dang nhap');
            } else {
                navigate('/login');
            }
        });
    }, []);

    // function
    function dropdown() {
        document.querySelector('#submenu').classList.toggle('hidden');
        document.querySelector('#arrow').classList.toggle('rotate-0');
    }
    // dropdown();

    function openSidebar() {
        document.querySelector('.sidebar').classList.toggle('hidden');
        console.log('HEllo');
    }

    // function search
    const handleChange = (e) => {
        const temp = e.target.value;
        if (!temp.startsWith(' ')) {
            setSearchValue(temp);
        }
        if (temp === '') {
        }
    };

    // function logout
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                alert('Đã đăng xuất');
                navigate('/login');
            })
            .catch((error) => {
                alert('không thể đăng xuất');
                console.log(error);
            });
    };

    //

    return (
        <>
            <Modal closeIcon={null} open={showModal} onClose={() => setShowModal(false)} footer={null}>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-full">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold">Modal Title</h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                                    </span>
                                </button>
                            </div>

                            <div class="flex items-center justify-center w-full">
                                <label
                                    for="dropzone-file"
                                    class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                >
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg
                                            class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 16"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                            />
                                        </svg>
                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                            <span class="font-semibold">Click to upload</span> or drag and drop
                                        </p>
                                        <p class="text-xs text-gray-500 dark:text-gray-400">
                                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                                        </p>
                                    </div>
                                    <input id="dropzone-file" type="file" class="hidden" />
                                </label>
                            </div>

                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <span className="absolute text-white text-4xl top-5 left-4 cursor-pointer" onClick={() => openSidebar()}>
                <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
            </span>

            <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
                <div className="text-gray-100 text-xl">
                    <div className="p-2.5 mt-1 flex items-center">
                        <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
                        <h1 className="font-bold text-gray-200 text-[15px] ml-3">AIQuest</h1>
                        <i className="bi bi-x cursor-pointer ml-28 lg:hidden" onClick={() => openSidebar()}></i>
                    </div>
                    <div className="my-2 bg-gray-600 h-[1px]"></div>
                </div>

                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                    <i className="bi bi-house-door-fill"></i>
                    <span className="text-[15px] ml-4 text-gray-200 font-bold">Profile</span>
                </div>
                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                    <i className="bi bi-house-door-fill"></i>
                    <span className="text-[15px] ml-4 text-gray-200 font-bold">Search</span>
                </div>

                <div
                    className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                    onClick={() => setShowModal(true)}
                >
                    <i className="bi bi-bookmark-fill"></i>
                    <span className="text-[15px] ml-4 text-gray-200 font-bold">Upload</span>
                </div>
                <div className="my-4 bg-gray-600 h-[1px]"></div>

                <div
                    onClick={handleLogout}
                    className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                >
                    {/* <i className="bi bi-box-arrow-in-right"></i> */}
                    <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
                </div>
            </div>

            <div className="relative flex justify-center mt-6 ml-[300px] mx-auto text-gray-600">
                <div className="relative flex w-[40%]">
                    <input
                        className="border-2 border-gray-300 bg-white w-full h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        type="search"
                        name="search"
                        placeholder="Search"
                        value={searchValue}
                        onChange={(e) => handleChange(e)}
                    />
                    <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                        <svg
                            className="text-gray-600 h-4 w-4 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 56.966 56.966"
                            style={{ enableBackground: '0 0 56.966 56.966' }}
                            width="512px"
                            height="512px"
                        >
                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                    </button>
                </div>
                {/* Dropdown here */}
            </div>

            <div className="ml-[300px] mt-[60px]">
                {dataSearch?.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 flex justify-items-center justify-center">
                        {dataSearch.map((data, index) => {
                            return <CardDefault key={index} content={data.post_content} createdOn={myData.created_on} />;
                        })}
                    </div>
                ) : (
                    <ul>emptyasdfasd</ul>
                )}
                {dataSearch?.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 flex justify-items-center justify-center">
                        {dataSearch.map((data, index) => {
                            return <CardDefault key={index} content={data.post_content} createdOn={myData.created_on} />;
                        })}
                    </div>
                ) : (
                    <ul>emptyasdfasd</ul>
                )}
                {dataSearch?.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 flex justify-items-center justify-center">
                        {dataSearch.map((data, index) => {
                            return <CardDefault key={index} content={data.post_content} createdOn={myData.created_on} />;
                        })}
                    </div>
                ) : (
                    <ul>emptyasdfasd</ul>
                )}
                <div className="flex flex-col w-full justify-items-center mt-[60px] mb-6">
                    <div className="relative m-auto text-left text-[rgb(159,157,157)] w-[80%] pb-2 after:absolute after:w-[100%] after:h-[2px] after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:border-t after:border-neutral-300">
                        More ways to shop: <Link className="underline text-blue-500">{` Find an Apple Store `}</Link> or{' '}
                        <Link className="underline text-blue-500">{` other retailer `}</Link> near you. Or call 1-800-My-Apple.
                    </div>
                    <div className="flex justify-between w-[80%] h-10 leading-10 m-auto">
                        <p className="">Copyright © 2023 Apple rights reserved.</p>
                        <div className="flex relative px-4">
                            <p className="relative px-3 after:w-[2px] after:h-7 after:top-[50%] after:translate-y-[-50%] after:right-0 after:absolute after:rounded-[2px] after:bg-[#ccc] after:border-neutral-300">
                                Privacy Policy
                            </p>
                            <p className="relative px-3 after:w-[2px] after:h-7 after:top-[50%] after:translate-y-[-50%] after:right-0 after:absolute after:rounded-[2px] after:bg-[#ccc] after:border-neutral-300">
                                Terms of Use
                            </p>
                            <p className="relative px-3 after:w-[2px] after:h-7 after:top-[50%] after:translate-y-[-50%] after:right-0 after:absolute after:rounded-[2px] after:bg-[#ccc] after:border-neutral-300">
                                Sales and Refunds
                            </p>
                            <p className="relative px-3 after:w-[2px] after:h-7 after:top-[50%] after:translate-y-[-50%] after:right-0 after:absolute after:rounded-[2px] after:bg-[#ccc] after:border-neutral-300">
                                Legal
                            </p>
                            <p className="relative px-3 after:w-[2px] after:h-7 after:top-[50%] after:translate-y-[-50%] after:right-0 after:absolute after:rounded-[2px] after:bg-[#ccc] after:border-neutral-300">
                                Site Map
                            </p>
                        </div>
                        <p className="">Việt Nam</p>
                    </div>
                </div>
            </div>
        </>
    );
}
