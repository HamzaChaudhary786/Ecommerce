import React from 'react'
import { useGlobalContext } from './Context'
let data = require('../MOCK_DATA.json');


const Suggestion_Box = () => {


    const onChange = (event) => {
        setQuery(event.target.value);
    };

    const onSearch = (searchTerm) => {
        setQuery(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
    };

    const { query, setQuery, fund } = useGlobalContext();


    return (
        <div className="dropdown fixed bg-white mt-14 px-2  w-72 cursor-pointer  ">
            {data
                .filter((item) => {
                    const searchTerm = query.toLowerCase();
                    const first_name = item.first_name.toLowerCase();

                    return (
                        searchTerm &&
                        first_name.startsWith(searchTerm) &&
                        first_name !== searchTerm
                    );
                })
                .slice(0, 10)
                .map((item) => (
                    <>
                        <div
                            onClick={() => onSearch(item.first_name)}
                            className="dropdown-row hover:text-indigo-700"
                            key={item.first_name}

                        >
                            {item.first_name}
                        </div>
                    </>
                ))}
        </div>
    )
}

export default Suggestion_Box