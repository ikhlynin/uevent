import React, { useState } from 'react';
import Pagination from '../../Product/Pagination/pagination';

const SubsList = ({ dataUserEvent }) => {
    const [subsPage, setSubsPage] = useState([0]);

    return (
        <div className='event_opened_subslist'>
            <p className='event_opened_description'>Список підписників</p>
            <div className='event_opened_flex_row'>
                {dataUserEvent.slice(subsPage * 5, subsPage * 5 + 5).map((item, index) =>
                    <div className='event_opened_flex_row' key={index}>
                        <div className='event_opened_circle'></div>
                        <p className='event_opened_subname'>{item.name}</p>
                    </div>
                )}
            </div>
            <Pagination quantity={dataUserEvent.length} numberForPage={5} current={subsPage} change={setSubsPage} />
        </div>
    )
}
export default SubsList;