import styles from './ImageGallery.module.css'
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
export const ImageGallery = ({ images }) => {
    return (
        <ul className={styles["ImageGallery"]}>
            {images.map((image) => <ImageGalleryItem {...image}/>)}
        </ul>
    )
}