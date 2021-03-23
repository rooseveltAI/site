import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import CollapsibleCard from "../components/collapse-card"

// import { Link } from "gatsby"
import "../styles/faq.scss"

const Faq = () => (
  <Layout>
    <SEO title="Frequently asked questions" />

    <div className="page-headers faq_image">
      <h2>FAQ</h2>
      <p>Frequently Asked Questions on weBelong</p>
    </div>

    <div className="pages-body-container">
      <h3>Top questions</h3>

      <div className="amb-faq-wrapper">
        <CollapsibleCard title="How to reach out to weBelong Team">
          <div>
            <p>
              {" "}
              Thanks for taking interest in our application. We’ve put together
              your most frequent questions and answered them. If you have any
              questions which don’t figure here, please feel free to contact us
              at info@holoash.com
            </p>
          </div>
        </CollapsibleCard>

        <CollapsibleCard title="How does weBelong app work?">
          <div>
            <p>
              {" "}
              weBelong is a social platform where you can find people to talk
              depending on your common interests. On weBelong, you can create
              public or private chat groups, meet new people and chat in a safe
              environment. weBelong was created with teenagers in mind and aims
              to provide an outlet for teenagers to connect with each other and
              make friends. Join us in our safe hub of digital friends (created
              by five IRL friends!) who listens, helps you work through whatever
              and will never leave you on read.
            </p>
          </div>
        </CollapsibleCard>

        <CollapsibleCard title="Who created weBelong?">
          <div>
            <p>
              weBelong app was created by HoloAsh, founded by Yoshua Kishi who
              was diagnosed with Attention deficit hyperactivity disorder (ADHD)
              as a child and felt misunderstood. Yoshua wanted to find someone
              who understands him, discuss how to deal with problems, and
              becomes friends. The purpose of weBelong app is to create a social
              environment where people with differences can thrive.
              <a href="https://holoash.com"> Learn more about HoloAsh here.</a>
            </p>
          </div>
        </CollapsibleCard>

        <CollapsibleCard title="Who is weBelong, or why is the app named so?">
          <div>
            <p>
              The app was named weBelong because people with differences, or
              margnalized people need a place to belong. Through our product, we
              want to celebrate people with differences.
            </p>
          </div>
        </CollapsibleCard>

        <CollapsibleCard title="Is weBelong free?">
          <div>
            <p>
              weBelong is a completely free app to download and use. We’re
              passionate about providing a feel-good solution to discuss your
              feelings, chat and seek advice. COVID has had incremental effects
              on and left many of us feeling isolated. weBelong is providing a
              free and safe space where we can connect, vent, make friends!
            </p>
          </div>
        </CollapsibleCard>

        <CollapsibleCard title="What is community in weBelong app?">
          <div>
            <p>
              You can create a community and invite people whom you want to
              connect with. You can share your problems, vent, chat when you
              need to.
            </p>
          </div>
        </CollapsibleCard>

        <CollapsibleCard title="Why do some chat rooms disappear on weBelong?">
          <div>
            <p>
              The chat rooms on weBelong will disappear if there's no activities
              for 12 hours. The experience itself will be instant session, so
              you can join or create active chat rooms instead.
            </p>
          </div>
        </CollapsibleCard>

        <CollapsibleCard title="  What is Karma and how can I increase my points?">
          <div>
            <p>
              A user’s karma reflects their contribution to the weBelong
              community. In Buddhism, karma means the sum of a person’s actions
              in this and previous states of existence, viewed as deciding their
              fate in future existences. You can earn karma points on weBelong
              by chatting, joining chat rooms and creating new communities and
              chats. Based on your karma points, you will be able to use new
              special features which are exclusive to high karma point users.
              Once you reach Level 4, you can start and join private chat rooms.
              Once you reach Level 7, you can create your own community as well
              as send and receive DMs.
            </p>
          </div>
        </CollapsibleCard>

        <CollapsibleCard title="Which languages are supported on weBelong?">
          <div>
            <p>
              weBelong’s user interface and voice recognition capacities are
              currently only available in English. However, feel free to create
              groups and text in any language so that you can meet others who
              speak the language. Our goal is to support every language in the
              future. Thank you for your support in us achieving that goal!
            </p>
          </div>
        </CollapsibleCard>

        <CollapsibleCard title="What do you do with my text/voice data?">
          <div>
            <p>
              We do not use your voice or text data for any other purposes than
              improving your app experience. We do not sell or give your data to
              any third parties. We fully abide by the General Data Protection
              Regulation (GDPR) and California Consumer Privacy Act (CCPA).
            </p>
          </div>
        </CollapsibleCard>

        <CollapsibleCard title="I’d like to feature weBelong on media or collaborate with you. Where can I reach you?">
          <div>
            <p>
              Thank you for considering us! We’ve previously been featured on US
              television. We’re always looking for partnerships and
              collaborations. We’ll be happy to send you a press kit. Please
              reach out to us at{" "}
              <a
                href="mailto:info@holoash.com"
                target="_top"
                rel="noopener noreferrer"
              >
                info@holoash.com
              </a>
            </p>
          </div>
        </CollapsibleCard>
      </div>
    </div>
  </Layout>
)

export default Faq
