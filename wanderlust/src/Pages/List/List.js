import React from 'react'
import './List.css'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns';

const List = () => {
  const location=useLocation()
  console.log(location);
  return (
    <div className='hotel-list-container'>
        <div className='hotel-list-wrapper'>
            <div className="filter-container">
                <h1>Filter</h1>
                <div>
                <label>Destination</label>
                <input type="text" placeholder={location.state.destination}/>
                </div>

                <div className='checkin-date-container'>
                  <div className='checkin-date'>
                    <label className='date-label'>Check-in date:</label>
                    {/*<input type="date" placeholder={`${format(location.state.date[0].endDate,"MM/dd/yyyy")}`}/>*/}
                    <span className='date-span'> {`${format(location.state.date[0].startDate,"MM/dd/yyyy")}`}</span>
                  </div>
                  <div className='checkin-date'>
                    <label className='date-label'>Check-out date:</label>
                    <span className='date-span'> {`${format(location.state.date[0].endDate,"MM/dd/yyyy")}`}</span>
                  </div>
                </div>
            </div>

            <div className="search-result-container">
                  result
            </div>
        </div>
    </div>
  )
}

export default List