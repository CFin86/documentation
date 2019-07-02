import { graphql, StaticQuery } from "gatsby"
import React from "react"
import MarketoForm from "../../components/marketoForm"
import './style.css';

const Footer = ({ data }) => {
  const pantheonLogo = data.allFile.edges.find(
    file => file.node.publicURL.indexOf("pantheon-logo-symbol") > -1
  )

  const CCLogo = data.allFile.edges.find(
    file => file.node.publicURL.indexOf("CC-BY-SA_icon") > -1
  )

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="pio-docs-footer hidden-sf" id="footer">
          <div id="office-hours" className="office-hours">
            <p>Got questions? We've got answers!</p>
            <p>
              <a href="https://pantheon.io/live-demo?docs" className="demo-cta">
                Live Weekly Demo
              </a>{" "}
              <a
                href="https://pantheon.io/developers/office-hours?docs"
                className="offhour-cta"
              >
                Office Hours
              </a>
            </p>
          </div>
          <footer role="contentinfo">
            <div className="container container-whole-footer">
              <div className="row">
                <div className="col-lg-7 footer-menus">
                  <div className="container container-footer-section">
                    <a href="/docs/" className="footer-logo-container">
                      {pantheonLogo && (
                        <img
                          alt="Pantheon"
                          src={pantheonLogo.node.publicURL}
                          className="footer-logo"
                        />
                      )}
                    </a>
                    <div className="row footer-menu-items">
                      <div className="col-xs-6 col-sm-3">
                        <h4 className="block__title">Topics</h4>
                        <ul className="menu">
                          <li className="first leaf menu-mlid-1147">
                            <a href="/get-started/">Get Started </a>
                          </li>
                          <li className="leaf menu-mlid-1148">
                            <a href="/develop/">Develop</a>
                          </li>
                          <li className="leaf menu-mlid-1149">
                            <a href="/go-live/">Go Live</a>
                          </li>
                          <li className="leaf menu-mlid-1162">
                            <a href="/platform/">
                              Explore Platform Architecture
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xs-6 col-sm-3 col-no-title">
                        <ul className="menu">
                          <li className="first leaf menu-mlid-1147">
                            <a href="/automate/">Automate & Integrate</a>
                          </li>
                          <li className="leaf menu-mlid-1148">
                            <a href="/performance/">
                              Optimize Performance
                            </a>
                          </li>
                          <li className="leaf menu-mlid-1149">
                            <a href="/manage/">
                              Manage Teams & Organizations
                            </a>
                          </li>
                          <li className="leaf menu-mlid-1162">
                            <a href="/troubleshoot/">Troubleshoot</a>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- <div className="col-xs-12 col-sm-1 col-divider">
                  </div> -->
                  <!-- Add the extra clearfix for only the required viewport --> */}
                      <div className="clearfix visible-xs-block" />
                      <div className="col-xs-6 col-sm-3">
                        <h4 className="block__title">Help</h4>
                        <ul className="menu">
                          <li className="first leaf menu-mlid-1151">
                            <a href="https://pantheon.io/contact-us">Contact</a>
                          </li>
                          <li className="leaf menu-mlid-1152">
                            <a href="https://pantheon.io/agencies/agency-match">
                              Hire an Agency
                            </a>
                          </li>
                          <li className="leaf menu-mlid-1153">
                            <a href="https://status.pantheon.io/">Status</a>
                          </li>
                          <li className="last leaf menu-mlid-1154">
                            <a href="/support/">Support</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xs-6 col-sm-3">
                        <h4 className="block__title">Community</h4>
                        <ul className="menu">
                          <li className="first leaf menu-mlid-1142">
                            <a href="/code-of-conduct/">Code of Conduct</a>
                          </li>
                          <li className="leaf menu-mlid-1188">
                            <a href="/contributors/">Contributors</a>
                          </li>
                          <li className="leaf menu-mlid-1143">
                            <a href="/power-users/">
                              Community and Power Users Group
                            </a>
                          </li>
                          <li className="last leaf menu-mlid-1145">
                            <a href="/contribute/">Learn to Contribute</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-9">
                        <div className="copyright license-text">
                          Our Documentation is licensed under a Creative Commons
                          Attribution-ShareAlike 4.0 International License. Code
                          snippets are additionally licensed under The MIT
                          License.
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="license-logo">
                          {CCLogo && (
                            <img
                              src={CCLogo.node.publicURL}
                              alt="Creative Commons Attribution-ShareAlike Logo"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="copyright">
                          © 2014-{new Date().getFullYear()} Pantheon{" "}
                          <span>|</span> 717 California Street, San Francisco,
                          CA <span className="responsive-pipe">|</span>{" "}
                          <a
                            className="new-line"
                            href="https://pantheon.io/privacy"
                          >
                            Privacy Policy
                          </a>{" "}
                          <span>|</span>{" "}
                          <a href="https://pantheon.io/pantheon-terms-service">
                            Terms of Use
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /.footer-menus --> */}
                </div>
                <div className="col-lg-5 social-and-marketo">
                  <div className="container container-footer-section">
                    <div className="block block-block" id="block-block-39">
                      <div className="block__content content">
                        <div id="social-links-wrapper">
                          <ul className="social-links">
                            <li>
                              <a
                                className="social-link"
                                href="https://www.facebook.com/getpantheon"
                              >
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li>
                              <a
                                className="social-link"
                                href="https://twitter.com/getpantheon"
                              >
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a
                                className="social-link"
                                href="https://www.linkedin.com/company/pantheon-systems-inc"
                              >
                                <i className="fa fa-linkedin" />
                              </a>
                            </li>
                            <li>
                              <a
                                className="social-link"
                                href="https://www.youtube.com/user/GetPantheon"
                              >
                                <i className="fa fa-youtube-play" />
                              </a>
                            </li>
                            <li className="blog-link-li">
                              <a
                                className="blog-link"
                                href="https://pantheon.io/blog"
                              >
                                Pantheon Blog
                                <i className="fa fa-angle-right" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div id="footer-subscribe">
                          <div className="row">
                            <div className="col-lg-12 col-sm-6">
                              <h4>INSIGHT. DELIVERED MONTHLY.</h4>
                              <p>
                                Awesome development news, tutorials, and tips.
                                Plus get 3 free downloads, just for signing up.
                                If you don't love it, unsubscribe with just a
                                click.
                              </p>
                            </div>
                            <div className="col-lg-12 col-sm-6 market-subscribe-footer">
                              {/* NOTE: maybe this configuration should be moved to a configuration file? */}
                              <MarketoForm
                                baseUrl="https://app-ab05.marketo.com"
                                munchkinId="316-GSV-089"
                                formId={2014}
                                formName="mktoForm_2014"
                              />
                            </div>
                          </div>
                        </div>
                        {/* <!-- /.content --> */}
                      </div>
                      {/* <!-- /.block --> */}
                    </div>
                  </div>
                </div>
                {/* <!-- new footer --> */}
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allFile(
          filter: {
            relativePath: {
              in: ["pantheon-logo-symbol.svg", "CC-BY-SA_icon.png"]
            }
          }
        ) {
          edges {
            node {
              id
              publicURL
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} {...props} />}
  />
)
