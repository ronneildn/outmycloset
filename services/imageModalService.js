import { useState } from 'react';

const ImageModal = () => {
    const [isShowing, setIsShowing] = useState(false);
    const [image, setImage] = useState('');

    function toggleImage(image) {
        setIsShowing(!isShowing);
        setImage(image);
    }

    function closeModal() {
        setIsShowing(false);
    }

    return {
        isShowing,
        toggleImage,
        closeModal,
        image
    }
};

export default ImageModal;
