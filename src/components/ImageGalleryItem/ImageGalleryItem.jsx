import style from './ImageGalleryItem.module.css'
export const ImageGalleryItem = ({ webformatURL, id }) => {
    return (
        <li className={style["ImageGalleryItem"]}>
            <img className={style['ImageGalleryItem-image']} src={webformatURL} alt={id} />
        </li>
    )
}