import { Component } from "react"
import style from "./Modal.module.css"

export default class Modal extends Component {
    render () {
    return (
        <div className={style["Overlay"]}>
            <div class={style["Modal"]}>
            <img src={this.props.image.largeImageURL} alt={this.props.image.id} />
            </div>
        </div>
    )
    }
} 