import React from "react";
import Gif from "./Gif";

const Diary = (props) => {
    return (
        <>
            <h1 className='fw-bold mt-5'>Dagbok</h1>
<<<<<<< HEAD
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
=======
                    return (
                }
                )}
            </div>
        </>
    );
};

export default Diary;