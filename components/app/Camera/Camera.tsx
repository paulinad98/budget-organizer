'use client'

import FeatherIcon from 'feather-icons-react'
import { Button } from '@/components/ui/Button/Button'
import { useCamera } from '@/hooks/useCamera'

export function Camera() {
  const { takePicture, videoRef, canvasRef, isStreaming } = useCamera()

  return (
    <div className="relative h-full w-full">
      <video ref={videoRef} className="h-full w-full" />

      <Button
        className="absolute bottom-6 left-0 right-0 mx-auto h-14 w-14 rounded-full"
        onClick={takePicture}
        disabled={!isStreaming}
      >
        <FeatherIcon className="text-white" icon="camera" />
      </Button>

      <canvas ref={canvasRef} className="hidden" />
    </div>
  )
}
