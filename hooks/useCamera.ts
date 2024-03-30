import { convertDataUrlToBlob } from '@/utils/client/convert'
import { useRef, useEffect, useState } from 'react'

export function useCamera() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [isStreaming, setIsStreaming] = useState<boolean>(false)

  async function startVideo() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })

      if (videoRef.current) {
        videoRef.current.autoplay = true
        videoRef.current.playsInline = true
        videoRef.current.muted = true
        videoRef.current.srcObject = stream

        await videoRef.current.play()

        setIsStreaming(true)
      }
    } catch (err) {
      console.error('Błąd podczas dostępu do kamery: ', err)
    }
  }

  function takePicture(): Blob {
    const context = canvasRef.current?.getContext('2d')

    if (videoRef.current && context && isStreaming && canvasRef.current) {
      canvasRef.current.width = videoRef.current.videoWidth
      canvasRef.current.height = videoRef.current.videoHeight
      context.drawImage(
        videoRef.current,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      )
      const imageDataUrl = canvasRef.current.toDataURL('image/png')
      const blob = convertDataUrlToBlob(imageDataUrl)

      return blob
    }

    throw new Error('Wystąpił błąd podczas robienia zdjęcia')
  }

  useEffect(() => {
    startVideo()

    return () => {
      if (videoRef.current?.srcObject instanceof MediaStream) {
        const tracks = videoRef.current.srcObject.getTracks()
        tracks.forEach((track) => track.stop())
      }
    }
  }, [])

  return { takePicture, videoRef, canvasRef, isStreaming }
}
