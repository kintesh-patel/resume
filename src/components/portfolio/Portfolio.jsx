import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PortfolioData from "./portfolioData";
import Modal from "./modal/Modal";

const Portfolio = () => {
  const [getModal, setGetModal] = useState(false);
  const [modalId, setModalId] = useState(1);

  const handleModal = (id) => {
    setGetModal(true);
    setModalId(id);
  };

  return (
    <>
      <div className="portfolio-main">
        <Tabs>
          <TabList className="portfolio-tab-list" >
            <Tab>ALL</Tab>
            <Tab>WordPress</Tab>
            <Tab>E-Commerce(WP)</Tab>
            <Tab>Laravel</Tab>
            <Tab>Apps</Tab>
          </TabList>

          <div className="container">
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.map((item) => {
                  const { id, type, image, delayAnimation } = item;

                  return (
                    <div
                      key={id}
                      data-aos="fade"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                      >
                        <img src={image} alt="portfolio project demo" />
                        <h3>
                          <span className="conent-title">{type}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) => item.tag.includes("WordPress")).map(
                  (item) => {
                    const { id, type, image, delayAnimation } = item;
                    return (
                      <div
                        key={id}
                        data-aos="fade"
                        data-aos-delay={delayAnimation}
                      >
                        <div
                          className="tab-content"
                          onClick={() => handleModal(id)}
                        >
                          <img src={image} alt="portfolio project demo" />
                          <h3>
                            <span className="conent-title">{type}</span>
                          </h3>
                        </div>
                        {/* {getModal && <Modal props={modalId} />} */}
                      </div>
                    );
                  }
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) => item.tag.includes("e-commerce")).map(
                  (item) => {
                    const { id, type, image, delayAnimation } = item;
                    return (
                      <div
                        key={id}
                        data-aos="fade"
                        data-aos-delay={delayAnimation}
                      >
                        <div
                          className="tab-content"
                          onClick={() => handleModal(id)}
                        >
                          <img src={image} alt="portfolio project demo" />
                          <h3>
                            <span className="conent-title" data-type={type}>E-commerce(WP)</span>
                          </h3>
                        </div>
                        {/* {getModal && <Modal props={modalId} />} */}
                      </div>
                    );
                  }
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) => item.tag.includes("Laravel")).map(
                  (item) => {
                    const { id, type, image, delayAnimation } = item;
                    return (
                      <div
                        key={id}
                        data-aos="fade"
                        data-aos-delay={delayAnimation}
                      >
                        <div
                          className="tab-content"
                          onClick={() => handleModal(id)}
                        >
                          <img src={image} alt="portfolio project demo" />
                          <h3>
                            <span className="conent-title">{type}</span>
                          </h3>
                        </div>
                        {/* {getModal && <Modal props={modalId} />} */}
                      </div>
                    );
                  }
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) => item.tag.includes("Apps")).map(
                  (item) => {
                    const { id, type, image, delayAnimation } = item;
                    return (
                      <div
                        key={id}
                        data-aos="fade"
                        data-aos-delay={delayAnimation}
                      >
                        <div
                          className="tab-content"
                          onClick={() => handleModal(id)}
                        >
                          <img src={image} alt="portfolio project demo" />
                          <h3>
                            <span className="conent-title">{type}</span>
                          </h3>
                        </div>
                        {/* {getModal && <Modal props={modalId} />} */}
                      </div>
                    );
                  }
                )}
              </div>
            </TabPanel>

          </div>
        </Tabs>
      </div>
      {getModal && <Modal modalId={modalId} setGetModal={setGetModal} />}{" "}
    </>
  );
};

export default Portfolio;
