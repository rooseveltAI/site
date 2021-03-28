import * as React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { Check } from "react-feather"

import Logo from "../images/assets/webelonglogo.svg"
import AmbassadorImage from "../images/amb.png"
import features from "../images/featured.png"
import thread from "../images/thread.png"
import community from "../images/wB2.png"
import Join from "../images/joinwB.png"

import Footer from "../components/styled-components/footer"

import FBIcon from "../images/assets/fb.svg"
import TWIcon from "../images/assets/tw.svg"
import IGIcon from "../images/assets/ig.svg"

import CollapsibleCard from "../components/collapse-card"

// import { Link } from "gatsby"
import "../styles/ambassador.scss"

const Ambassador = () => (
  <body id="ambassador-page">
    <SEO title="Ambassador" />

    <header
      style={{
        background: `rgba(3, 3, 6, 0.9)`,
        position: `fixed`,
        zIndex: 2,
        width: `100%`,

        // marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1115,
          padding: `1rem`,
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <Logo />
          </Link>
        </h1>{" "}
        <ul style={{ margin: 0 }} className="button-container">
          <a href="https://holoash.typeform.com/to/cHGS6d7R">
            <li className="button-wrapper ambassador">
              <span>Become an Ambassador</span>
            </li>
          </a>
        </ul>
      </div>
    </header>

    <div className="amb-header-container">
      <div className="aside-text-content">
        <h1 className="amb-h1">
          Make an Impact
          <br />
          <span>and connect with other Teens.</span>
        </h1>
        <p>
          Join our Ambassador program and help us build a social platform that
          brings marginalized teens together
        </p>
        <a href="#faq">
          <button className="button-purple-stroke">Learn more</button>
        </a>
        <a href="https://holoash.typeform.com/to/cHGS6d7R">
          <button className="button-green-fill">Become an Ambassador</button>
        </a>
      </div>

      <div className="aside-background">
        <img src={AmbassadorImage} alt="Ambassadors" />
      </div>
    </div>

    <main>
      <section className="section1-container">
        <div className="sec1-content-wrapper">
          <h1 className="sec1-h1">
            What is{""}
            <span>Ambassador Program?</span>
          </h1>
          <div className="sec1-text-wrapper">
            <p>
              weBelong Ambassador Program is a unique opportunity to help build
              a movement of self-love, compassion and connecting like-minded
              people together.
            </p>
            <p>
              weBelong aspires to build a social platform where marginalized
              teens thrive and share their experiences.
            </p>
            <p>
              By joining the Ambassador Program, you can grow an audience and
              build a community of like-minded friends. To address that, we need
              your help to make it work.
            </p>
          </div>
          <a href="https://holoash.typeform.com/to/cHGS6d7R">
            <button className="button-green-fill">Become an Ambassador</button>
          </a>
        </div>
        <div className="feature-box">
          <img src={features} alt="Featured on" />
        </div>
      </section>

      <section className="section2-container">
        <div className="left-aside-container">
          <div className="img-container">
            <img src={thread} alt="Thread screen" />
          </div>

          <div>
            <h2 className="amb-colored-title">
              Calling all the content creators
              <h2>Calling all the thought leaders</h2>
            </h2>
            <p>
              Have a passion you want to share?
              <p>
                Or just feel like venting off and want a safe space to meet
                like-minded teens who get it?
              </p>
              <p>
                Join weBelong as the fast-growing app, create your own community
                and have influence on it.
              </p>
              <p>
                Post your thoughts. Join different communities and group
                chats.Build your community. Grow your base.
              </p>
            </p>
          </div>
        </div>

        <div className="right-aside-container">
          <div>
            <h2 className="amb-colored-title">Social media, but evolved</h2>
            <p>
              A place to support and help each other.
              <p>
                Not a place to impress, but a place for genuine self-expression.
              </p>
            </p>

            <h2>Finally an algorithm on your side</h2>
            <p>
              Our algorithm supports first time community leaders and helps more
              people discover you.
              <p>
                So that you can focus on what matters -building meaningful
                connections.
              </p>
            </p>
          </div>

          <div className="right-image-wrapper">
            <img src={community} alt="Community screen" />
          </div>
        </div>
      </section>

      <section className="section3-container">
        <h2>Why Join weBelong?</h2>
        <div className="join-wB-container">
          <ul className="join-list-items">
            <li>
              <h3 className="list-title list1">
                <Check /> Grow your career
              </h3>
              <li>
                <p>
                  Join a fast growing startup and get a chance to be among the
                  prominent community leaders.
                </p>
              </li>
            </li>

            <li>
              <h3 className="list-title list2">
                <Check /> Get Skills
              </h3>
              <li>
                <p>
                  Gain valuable experience, build your strong audience and reap
                  benefits.
                </p>
              </li>
            </li>

            <li>
              <h3 className="list-title list3">
                <Check /> Special gifts
              </h3>
              <li>
                <p>
                  Enter our giveaways for a chance to win gifts and other
                  benefits.
                </p>
              </li>
            </li>
          </ul>

          <div className="aside-background">
            <img src={Join} alt="Ambassadors" />
          </div>
        </div>
      </section>

      <section id="faq" className="section4-container">
        <h3>FAQ for weBelong Ambassador</h3>
        <div>
          <CollapsibleCard title="Q: How can I apply for Ambassador Program?">
            <div>
              <p>
                {" "}
                A: Thank you for your interest in joining the team <br />
                Please file all applications to our{" "}
                <a href="https://holoash.typeform.com/to/cHGS6d7R">
                  Typeform
                </a>{" "}
                and we’ll contact you soon.
              </p>
            </div>
          </CollapsibleCard>

          <CollapsibleCard title="Q: Can I refer a friend to join Ambassador Program and get perks?">
            <div>
              <p>
                {" "}
                A: We always appreciate a referral <br />
                Feel free to onboard other friends and let us know.
                <a href="https://holoash.typeform.com/to/cHGS6d7R">
                  Here's the link
                </a>
              </p>
            </div>
          </CollapsibleCard>

          <CollapsibleCard title="Q: Can I use the app and build my community for free?">
            <div>
              <p>
                {" "}
                A: weBelong app is free download. We don’t have any ads so that
                we can provide you a great user experience and full privacy. You
                can rest assured.
              </p>
            </div>
          </CollapsibleCard>

          <CollapsibleCard title="Q: How can I reach you?">
            <div>
              <p>
                {" "}
                A: If you have any further questions or want to get in touch,
                you can send us an email at{" "}
                <a
                  href="https://holoash.com/"
                  target="_top"
                  rel="noopener noreferrer"
                >
                  info@holoash.com
                </a>
              </p>
            </div>
          </CollapsibleCard>
        </div>
      </section>
    </main>

    <footer className="footer-container">
      <Footer />
      <div className="footer-line" />
      <section className="footer-credits-wrapper">
        <Logo />
        <p>
          © {new Date().getFullYear()}, weBelong from HoloAsh, Inc. All rights
          reserved
        </p>
        <aside className="icons-wrapper">
          <a
            href="https://twitter.com/webelong_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TWIcon width="24px" />
          </a>

          <a
            href="https://www.facebook.com/webelongapp/?ref=py_c"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FBIcon width="24px" />
          </a>

          <a
            href="https://www.instagram.com/webelongapp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IGIcon width="24px" />
          </a>
        </aside>
      </section>
    </footer>
  </body>
)

export default Ambassador
