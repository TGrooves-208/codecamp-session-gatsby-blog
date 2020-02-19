import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"

export default () => (
  <Layout>
    <Title text="About Me" />
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About Me</Link>
    </div>
    <p>Hi my name is Gil Aguilar and I am a full stack developer/engineer.</p>
    <p>
      I enjoy learning new technologies when possible. For me the key is being
      technologically agnostic in a sense that it does not matter if involves
      the front or back end. The only thing that matters is having a set of
      diverse skill sets that when needed can be utilized to provide solutions
      for business needs. Looking ahead and always staying current with
      technologies outside of your comfort zone also plays a big part in
      professional growth. Doing the bit extra is how you add value I feel as
      long as you have a good balance.
    </p>
    <p>
      I graduated from BSU in December of 2018 with a degree in Information
      Technology Management. Go Broncos !!!
    </p>
    <p>
      I formerly worked at Idaho's Department of Environmental Quality as a IT
      Software Engineer III. Currently I am employed with Intuit as a Software
      Engineer I.
    </p>
    <p>
      For hobbies I love to spend time with my family, brew beer and bbq (tacos
      are life)!
    </p>
    <p>On occasion I produce house music and enjoy playing video games.</p>
    <p>
      Thanks for coming to my session I've been meaning to present many times
      (speaking in front of others terrifies me lol) but finally decided to just
      go for it. Cheers!
    </p>
  </Layout>
)
