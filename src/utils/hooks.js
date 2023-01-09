import {useEffect, useState} from "react"

export function useImage(src, placeholder) {
    const [imageSrc, setImageSrc] = useState(placeholder)

    useEffect(() => {
        console.log(src)
        const imageElement = new Image()
        imageElement.src = src
        imageElement.onload = () => {
            console.log("set", src)
            setImageSrc(src)
        }
    }, [src])

    const isLoading = imageSrc === placeholder
    return [imageSrc,isLoading]
}

export function useImageWithLoader(getImage, placeholder) {
    const [imageSrc, setImageSrc] = useState(placeholder)

    useEffect(() => {
        getImage().then(src => {
            const imageElement = new Image()
            imageElement.src = src
            imageElement.onload = () => {
                console.log("set", src)
                setImageSrc(src)
            }
        })
    }, [])

    const isLoading = imageSrc === placeholder
    return [imageSrc,isLoading]
}