import React from "react"
import classnames from "classnames"
import { ChevronDown, ChevronUp } from "react-feather"

import "./styles/collapse.scss"

export default class CollapsibleCard extends React.Component {
  state = {
    collapsed: true,
  }

  toggleCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed })
  }

  render() {
    const { collapsed } = this.state

    return (
      <div className="collapsible-card">
        <header className="drop--down__container">
          <div onClick={this.toggleCollapse} className="title-and-toggle">
            <h3>{this.props.title}</h3>
            {this.state.collapsed ? (
              <ChevronDown onClick={this.toggleCollapse} className="icon" />
            ) : (
              <ChevronUp onClick={this.toggleCollapse} className="icon" />
            )}
          </div>
        </header>

        <div className={classnames("body", { collapsed })}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
