import styles from './ImageGallery.module.css';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import Modal from 'components/Modal/Modal';


export const ImageGallery = ({ images}) => {
    return (
        <ul className={styles["ImageGallery"]}>
            {images.map((image) => <ImageGalleryItem {...image} key={image.id} />)}
        </ul>
    )
}