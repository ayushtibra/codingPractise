// hook to fetch an api
// filter the data based on input
// How to initialze state wthout using setState - use Callback
// How to pass ref
// Why class based component dont need forward re and functional does
// HOC and HOF
// fundamental difference between routing of SPA and nextjs

// https://codesandbox.io/s/elastic-cdn-04i7jq?file=/src/App.js

import React, { useEffect, useRef, useState } from "react";
import { useFetchRandomUser } from "../hooks/useFetchRandomUser";
import "./styles.css";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const { data, loading, error } = useFetchRandomUser();
  const [filterData, setFilterData] = useState(data?.results || []);

  const handleSearchChange = (searchString) => {
    setSearchValue(searchString.target.value);
  };

  // const [state] = useState(() => {
  //   return location.storage.token;
  // });

  const ref = useRef(null);

  useEffect(() => {
    setFilterData(data);

    const filterData = (searchValue) => {
      return data?.results?.filter((item, key) => {
        if (
          item.name.first
            .toString()
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          item.name.last
            .toString()
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          item.location.country
            .toString()
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        ) {
          return item;
        }
      });
    };

    const newData = filterData(searchValue);
    setFilterData(newData);
  }, [searchValue]);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Soemthing went wrong! Please try again later</p>;
  }

  // ForwardRef
  // React.memo()

  // Fundam
  // src > pages > contactUs >
  // [...searchValue].tsx
  // index.tsx

  return (
    <div className="App">
      {/* <Button ref={ref} /> */}
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        value={searchValue}
        onChange={handleSearchChange}
      />
      {/* <ul>
        {data?.results?.map((item, key) => (
          <li key={key}>
            <p>
              {item.name.first} {item.name.last} {item.location.country}
            </p>
          </li>
        ))}
      </ul> */}
      <ul>
        {filterData?.map((item, key) => (
          <li key={key}>
            <p>
              {item.name.first} {item.name.last} {item.location.country}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useEffect, useState } from "react";

export const useFetchRandomUser = (user = 50) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRandomUser = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://randomuser.me/api/?results=${user}`);
        if (res.ok) {
          const result = await res.json();
          setLoading(false);
          setData(result);
        } else {
          throw new Error("Something Went Wrong!");
        }
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    };

    fetchRandomUser();
  }, [user]);

  return {
    data,
    error,
    loading,
  };
};

// --------------------------------------------------------------------------------------------------

// Round 2

// Build a progress bar
// useEffect vs useLayoutEffevt
// usememo vs usecallback
// useRef usecasees

// --------------------------------------------------------------------------------------------------
