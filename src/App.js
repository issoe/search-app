import './input.css';
import useDebounce from './hook/useDebounce';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import CardDefault from './components/CardDefault';
import Modal from './components/Modal';

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

export default function App() {
    const [searchValue, setSearchValue] = useState('');
    const debounce = useDebounce(searchValue, 700);
    const [dataSearch, setDataSearch] = useState(false);

    // Ref
    const inputRef = useRef();

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

    return (
        <>
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

                {/* <div
          className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white"
        >
          <i className="bi bi-search text-sm"></i>
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div> */}

                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                    <i className="bi bi-house-door-fill"></i>
                    <span className="text-[15px] ml-4 text-gray-200 font-bold">Profile</span>
                </div>
                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                    <i className="bi bi-house-door-fill"></i>
                    <span className="text-[15px] ml-4 text-gray-200 font-bold">Search</span>
                </div>

                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                    <i className="bi bi-bookmark-fill"></i>
                    <span className="text-[15px] ml-4 text-gray-200 font-bold">Import</span>
                </div>
                <div className="my-4 bg-gray-600 h-[1px]"></div>

                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                    <i className="bi bi-box-arrow-in-right"></i>
                    <span className="text-[15px] ml-4 text-gray-200 font-bold">Login</span>
                </div>
            </div>

            <div className=" relative  flex justify-center pt-2 ml-[300px] mx-auto text-gray-600">
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

            <div className="ml-[300px]">
                <Modal />
            </div>

            <div className="ml-[300px] mt-[100px]">
                {dataSearch?.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 flex justify-items-center justify-center">
                        {dataSearch.map((data, index) => {
                            return <CardDefault key={index} content={data.post_content} createdOn={myData.created_on} />;
                        })}
                    </div>
                ) : (
                    <ul>emptyasdfasd</ul>
                )}
            </div>

            {/* <div className='ml-[300px] mt-[100px]'>
        <h1>Recently-----</h1>
        <ul>
          <li> -{'>'} travel</li>
          <li> -{'>'} Invention</li>
          <li> -{'>'} Destination</li>
        </ul>
      </div>
      <div className='ml-[300px] mt-[100px]'>
        <h1>Suggestion</h1>
        <ul>
          <li> -{'>'} travel</li>
          <li> -{'>'} Invention</li>
          <li> -{'>'} Destination</li>
        </ul>
      </div> */}
        </>
    );
}
