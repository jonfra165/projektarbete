import React from "react";
import Gif from "./Gif";

const Diary = (props) => {
    return (
        <>
            <h1 className='fw-bold mt-5' id="scrollspyDiary">Dagbok</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 text-center d-flex align-items-stretch mb-3">
                {props.gifList.map(el => {
                    return (
                        <div className="col">
                            <div className="card">
                                <Gif id={el.id} url={el.url} />
                                <div className="card-body d-flex flex-column">
                                    <div className="card-text">
                                        {new Date(el.date).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
        </>
    );
};

export default Diary;