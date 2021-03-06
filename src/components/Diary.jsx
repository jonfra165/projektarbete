import React from "react";
import Gif from "./Gif";

const Diary = (props) => {
    return (
        <div className="container border-top p-3">
            <h1 className='fw-bold mt-2' id="scrollspyDiary">Dagbok</h1>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4 text-center d-flex align-items-stretch mb-3">
                {props.gifList.map((el, i) => {
                    return (
                        <div key={i} className="col">
                            <div className="card">
                                <Gif id={el.id} url={el.url} />
                                <div className="card-body d-flex flex-column p-1">
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
        </div>
    );
};

export default Diary;