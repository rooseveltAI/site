import * as React from "react"
import LeftAside from "./left-aside"
import RightAside from "./right-aside"

import Testimonial from "./testimonials"

import AppStore from "../images/app_store.svg"
import PlayStore from "../images/google_play_store.svg"

// images
import wB1 from "../images/wB1.png"
import wB2 from "../images/wB2.png"
import wB3 from "../images/wB3.png"
import wB4 from "../images/wB2.png"

import alex from "../images/alex.png"
import christina from "../images/christina.png"
import anne from "../images/anne.png"

import "./styles/landing.scss"

// import { Link } from "gatsby"

// import "./styles/header.scss"

const Landing = () => (
  <React.Fragment>
    <div className="landing-hero-container">
      <div className="content-wrapper">
        <div className="text-wrapper">
          <h1>Find Your Place To Belong</h1>
          <p>There are days when you get #feels? Us too.</p>
          <p>
            Join us in our safe hub of digital friends
            <br />
            (created by five IRL friends!) who listens, helps you work through
            whatever, and will never leave you *on read*.
          </p>
          <strong>
            BLACK LIVES MATTER{" "}
            <span role="img" aria-label="Black Lives Matter">
              ✊🏽✊🏾✊🏿
            </span>
          </strong>
        </div>
        <div className="hero-mockup-container">
          <img src={wB2} alt="" />
        </div>
      </div>
    </div>

    <section className="landing-color1">
      <LeftAside
        img={wB1}
        // alt="hey"
        leftTitle="Join and create tribes based on your interests."
        leftDesc="Connect, vent off, and make friends! Talk about your problems, get advice (if you’re looking for it), and feel heard. Whether it’s #TMI Girl Talk, talking about private matters you feel shy of sharing with your friends (periods, mood shifts, boy crushes and so much more), we’ve got your back"
        Appstore={AppStore}
        Playstore={PlayStore}
      />
    </section>

    <section className="landing-color2">
      <RightAside
        img={wB3}
        // alt="hey"
        rightTitle="Glow up mentally."
        rightDesc="Track your emotions, make friends, chat, and have a mental glow up! You’ll be surprised how your life changes around you once you express your emotions, work on it, and feel better."
        Appstore={AppStore}
        Playstore={PlayStore}
      />
    </section>

    <section className="landing-color3">
      <LeftAside
        img={wB4}
        // alt="hey"
        leftTitle="Share your day."
        leftDesc="Record your feelings, share your voice and your daily moments with the world. What are 3 things you feel grateful for today? Build a daily positive habit and you can watch other people’s gratitude stories too."
        Appstore={AppStore}
        Playstore={PlayStore}
      />
    </section>

    <section className="testimonial-container">
      <div className="testimonial-header">
        <p>We’re all different and diverse</p>
        <h2>What people are saying</h2>
      </div>
      <div className="testimonial-wrapper">
        <Testimonial
          userimg={alex}
          testimony="I met some really nice people on weBelong, and It has helped me feel more comfortable putting myself out there."
          name="Alex, 15"
        />
        <Testimonial
          userimg={christina}
          testimony="I recently discovered this app and I love the idea behind it! I wanted to connect with like-minded girls my age but I wanted to connect on an emotional level, not another TikTok. Keep it up!"
          name="Amanda, 20"
        />
        <Testimonial
          userimg={anne}
          testimony="I created a group on weBelong to share about my experience dealing with ADHD and connecting with others made me feel less alone."
          name="Emily, 16"
        />
      </div>
    </section>

    <section className="downloads-container">
      <div className="growth-number-container">
        <aside className="downloads-aside">
          <h2>30k</h2> <p>Downloads</p>
        </aside>
        <aside className="downloads-aside">
          <h2>2M</h2> <p>Messages exchanged</p>
        </aside>
      </div>
      <p>
        Talk about anything, anytime you want, and feel better. 24/7.
        judgment-free
      </p>
      <div className="download-links">
        <a
          href="https://apps.apple.com/us/app/leavoice-voice-messenger/id1470220391"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={AppStore} alt="Download on the Appstore" />
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=com.holoash.leavoice"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={PlayStore} alt="Get it on Playstore" />
        </a>
      </div>
    </section>
  </React.Fragment>
)

export default Landing
