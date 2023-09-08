import React from "react";
import { Link } from "react-router-dom";


const Search = ({ data, hideSearch }) => {
    return (
      <SearchContainer>
        <div className="searchWrapper">
          <div className="users">
            {data?.users?.map((u) => (
              <Link
                style={{ textDecoration: "none" }}
                to={`/profile/${u.username}`}
                onClick={hideSearch}
              >
                <div key={u._id} className="user">
  
                  <div className="userLeft">
                    <span>{u.username}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SearchContainer>
    );
  }

  export default Search;