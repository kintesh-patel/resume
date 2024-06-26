import React from "react";
import PortfolioData from "../portfolioData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Modal = ({ modalId, setGetModal }) => {

  return (
    <div className="modal_portfolio ">
      <div
        className="modal__outside"
        onClick={() => setGetModal(false)}
      ></div>
      <div></div>
      <div className="modal__content">
        {PortfolioData.filter((item) => item.id === modalId).map((item) => {
          return (
            <div key={item.id} data-aos="fade">
              <h2 className="heading mb-2">{item.type}</h2>
              <div className="modal__details">
                {item.modalDetails.map((details, i) => {
                  return (
                    <div key={i} className="row open-sans-font">
                      <div className="col-12  mb-2">
                        <i className="fa fa-file-text-o pr-2"></i>
                        Project:{" "}
                        <span className="ft-wt-600 uppercase">
                          {details.project}
                        </span>
                      </div>

                      <div className="col-12  mb-2">
                        <i className="fa fa-code pr-2"></i>
                        Language | Framework :{" "}
                        <span className="ft-wt-600 uppercase">
                          {details.language}
                        </span>
                      </div>
                      <div className="col-12  mb-2">
                        <i className="fa fa-external-link pr-2"></i>
                        Preview :{" "}
                        <a
                          className="preview-link"
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          href={details.link}
                        >
                          {details.preview}
                        </a>
                      </div>
                      {details.detail_overview ? (
                        <div className="col-12  mb-2">
                          <i className="fa fa-external-link pr-2"></i>
                          About :{" "}
                          <a
                            className="preview-link"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.detail_overview}
                          >
                            {details.detail_overview}
                          </a>
                        </div>) : ''
                      }
                    </div>
                  );
                })}
              </div>
              <figure className="modal__img">
                <img src={item.image} alt="portfolio project demo" />
              </figure>

              <button
                className="close-modal"
                onClick={() => setGetModal(false)}
              >
                <i class="fa fa-times" aria-hidden="true"></i>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );

};

export default Modal;
