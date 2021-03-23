import * as React from "react"

// import "./styles/aside.scss"

export default function Testimonial(props) {
  return (
    <div className="testimonial-inner-container">
      <div className="testimonial-image">
        <img src={props.userimg} alt={props.alt} />
      </div>
      <div className="testimonial-text-container">
        <p>{props.testimony}</p>
        <strong>{props.name}</strong>
      </div>
    </div>
  )
}
