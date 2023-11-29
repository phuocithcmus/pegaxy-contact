import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface AssetPageProps {}

const Contact: React.FC<AssetPageProps> = () => {
  const router = useRouter();

  return (
    <div className="root">
      {/* <Navbar /> */}

      <div className="container" style={{ marginTop: "50px" }}>
        <div className="bx-view">
          <div className="bx-full">
            <div className="bx-header">
              <div className="header-inner">
                <div className="header-tab center" />
              </div>
            </div>
            <div className="bx-content default">
              <div className="inner-content">
                {/* <div className="banner-rancing">
									<div
										className="items"
										onClick={() => {
											router.push('/my-assets/v1?tab=swap-v2');
										}}
									>
										<div className="info">
											<Image
												unoptimized={true}
												className="ic-info"
												src="/images/banner/info.png"
												// width="657px"
												// height="1180px"
												width="32px"
												height="32px"
												layout="responsive"
												alt=""
											/>
										</div>
										<Image
											unoptimized={true}
											className="logo-brand"
											src="/images/banner/banner_swapv2.png"
											// width="657px"
											// height="1180px"
											width="50%"
											height="100%"
											layout="responsive"
											alt=""
										/>
									</div>
									<div className="items" onClick={() => {}}>
										<NextLink href="https://discord.gg/pegaxy" target="_blank">
											<Image
												unoptimized={true}
												className="logo-brand"
												src={'/images/banner/banner_discord.png'}
												// width="657px"
												// height="1180px"
												width="50%"
												height="100%"
												layout="responsive"
												alt=""
											/>
										</NextLink>
									</div>
								</div> */}
                <div style={{ paddingLeft: "20%", paddingTop: "5%" }}>
                  <Image
                    unoptimized={true}
                    className="logo-brand"
                    src="https://cdn.pegaxy.io/statics/play/public/v10/images/pegaxy.png"
                    width={272}
                    height={40}
                    layout="fixed"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div style={{ paddingLeft: "20%" }}>
                    <div style={{ width: "100%" }}>
                      <h3 className="mt-3 mb-3">
                        If you wish to delete your game account, please send us
                        an email as template below:
                      </h3>
                      <div>
                        <p
                          style={{ fontSize: "18px", lineHeight: "24px" }}
                          className="mt-3 mb-3"
                        >
                          <br />
                          Title: [Pegaxy][Account Deletion Request][UID] (Please
                          attach the screenshot that shows your UID in the
                          description of the email)
                          <br />
                          And send to us via:
                          <a
                            style={{ marginLeft: "6px" }}
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdlZLLTu2KKz82DLhw2axBqSwkFrQgnkuiWFuPtY6r2w-qXmQ/viewform"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            here
                          </a>{" "}
                          <br />
                          All of your data will be deleted.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
