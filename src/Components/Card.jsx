import React from "react";

const Card = ({ data }) => {
  return (
    <>
    <div className="container">
      <div className="row row-cols-md-3 row-cols-lg-3 g-4">
        {data.map((element, index) => {
          return (
            <div key={index}>
              <div className="card mt-5 p-1">
                <div className="card-body">
                  <h5 className="card-title text-center">{element.title}</h5>
                  <h1 className="text-center">{element.price}</h1>
                  <hr/>
                  <p className={"card-text "+(element.check ? element.check : "")}> {element.users}</p> <br />
                  <p className={"card-text "+(element.check ? element.check : "")}> {element.storage}</p><br />
                  <p className={"card-text "+(element.check ? element.check : "")}> {element.public}</p><br />
                  <p className={"card-text "+(element.check ? element.check : "")}> {element.access}</p><br />
                  <p className={"card-text "+(element.disabledPrivate ? element.disabledPrivate : "")+" "+(element.disabledPrivate ? element.cross : element.check)}> {element.private}</p><br />
                  <p className={"card-text "+(element.disabledSupport ? element.disabledSupport : "")+" "+(element.disabledSupport ? element.cross : element.check)}> {element.support}</p><br />
                  <p className={"card-text "+(element.disabledSubdomain ? element.disabledSubdomain : "")+" "+(element.disabledSubdomain ? element.cross : element.check)}> {element.subdomain}</p><br />
                  <p className={"card-text "+(element.disabledReport ? element.disabledReport : "")+" "+(element.disabledReport ? element.cross : element.check)}> {element.report}</p>
                  <div className="text-center d-grid gap-2">
                  <button className="btn btn-primary rounded-pill">Button</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Card;
