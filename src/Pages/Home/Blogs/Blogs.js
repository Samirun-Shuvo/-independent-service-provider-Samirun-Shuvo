import React from "react";

const Blogs = () => {
  return (
    <div className="container mb-5 pb-5">
      <div className="row">
        <h1 className="text-primary text-center pt-3 pb-4">Our Blogs</h1>
        <div className="row border mt-2">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h4>
              1. What is the difference between authentication and
              authorization?
            </h4>
            <div className="row">
              <div className="col-md-6 border">
                <h2>Authentication</h2>
                <div className="row border">
                  <div className="col-12 border">Verify user identity</div>
                  <div className="col-12 border">
                    Identity credentials based on knowledge,possenssion,and/or
                    onherence
                  </div>
                  <div className="col-12 border">Authentication solution</div>
                  <div className="col-12 border">
                    Network security staff determine which factors to adopt
                  </div>
                  <div className="col-12 border">
                    Users provide authentication factors when requesting access
                  </div>
                </div>
              </div>
              <div className="col-md-6 border">
                <h2>Authorization</h2>
                <div className="row border">
                  <div className="col-12 border">
                    Permits access to resources
                  </div>
                  <div className="col-12 border">
                    Authenticated identity and access control policies
                  </div>
                  <div className="col-12 border">Authorization solution</div>
                  <div className="col-12 border">
                    Leadership sets security strategies
                  </div>
                  <div className="col-12 border">
                    Network security staff implement and maintain access control
                    system
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row border mt-4">
          <h4>
            2. Why Are You Using Firebase? What other option do you have to
            implement authentication?
          </h4>
          <div className="col-sm-12 col-md-12 col-lg-12 ">
            <p>
              Firebase allow syncing the real-time data across all the devices-
              Android, iOS, and the web without refreshing the screen. Firebase
              offers integration to Google Ads, AdMob, DoubleClick, Play Store,
              Data Studio, BigQuery, and Slack, to make your app development
              with efficient and accurate management and maintenance.
            </p>
            <p>
              Usually, authentication by a server entails the use of a user name
              and password. <br /> Other ways to authenticate can be through
              cards, retina scans, voice recognition, and fingerprints.
            </p>
          </div>
        </div>
        <div className="row border mt-4">
          <h4>
            3. What other services does Firebase provide other then
            authentication?
          </h4>
          <div className="col-sm-12 col-md-12 col-lg-12 ">
            <p>
              There are many services which Firebase provides, Most useful of
              them are:
            </p>
            <p>
              -Cloud Firestore. <br />
              -Cloud Functions. <br />
              -Authentication. <br />
              -Hosting. <br />
              -Cloud Storage. <br />
              -Google Analytics. <br />
              -Predictions. <br />
              -Cloud Messaging. <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
