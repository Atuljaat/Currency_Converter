import React from "react";
function Cards ({
    heading="HEADING",
    context="content",
    bgcolor="transparent",
    imgLink="https://i.pinimg.com/736x/e4/6e/2a/e46e2add9fb03a486d973ddd3c8ae3b4.jpg",
    textColor="black",
}){
    return (
        <>
            <div className="flex rounded-lg flex-col  border border-slate-950 m-10 w-auto" style={{backgroundColor : bgcolor , color : textColor}}>
                <div className="m-5">
                    <img className="aspect-square w-36 rounded-lg" src={imgLink} alt="img" />
                </div>
                <div className="m-5">
                <div className="text-lg font-semibold underline">
                    {heading}
                </div>
                <div className="text-sm ">
                    {context}
                </div>
                </div>
            </div>
        </>
    )
}

export default Cards