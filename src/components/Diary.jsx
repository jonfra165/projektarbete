import React from "react";
import Gif from "./Gif";

const Diary = (props) => {
    return (
        <div className="container">
            <h1 className='fw-bold mt-5'>Dagbok</h1>
            <div className="row">
             {props.gifList.map( el => {
                 return (
                    <div className="card mt-2" style={{width: '10rem'}} >
                    <Gif id={el.id} url={el.url} />
                    <div className="card-body">
                        <p className="card-text">{el.date}</p>
                    </div>
                </div>
                 )
                }
             )}
            </div>
        </div>
    );
};

export default Diary;