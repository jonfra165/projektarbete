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
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 text-center d-flex align-items-stretch mb-3">
                {props.gifList.map(el => {
                    return (
                        <div className="col">
                            <div className="card">
                                <Gif id={el.id} url={el.url} />
                                <div class="card-body d-flex flex-column">
                                    <div className="card-text">
                                        2022-05-30
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
>>>>>>> feature_giphy
                }
                )}
            </div>
        </>
    );
};

export default Diary;