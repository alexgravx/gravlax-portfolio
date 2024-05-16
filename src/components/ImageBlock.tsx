import Image from 'next/image'

const ImageBlock = ({image_link}: {image_link:string}) => {
    return (
        <Image 
            src={image_link} 
            width={1200} 
            height={1200} 
            alt="" 
        />
    )
}

export default ImageBlock