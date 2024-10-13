import React from 'react'


const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" />
      </div>
      <div className="userChat">
        {/* <img src={pfp} alt="" className='spfp'/> */}
        <div className="userInfo">
          <span className="">zero</span>
        </div>
      </div>
    </div>
  )
}

export default Search