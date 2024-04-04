'use client'

import { cn } from '@/lib/utils'
import FeatherIcon from 'feather-icons-react'
import { Button } from '@/components/ui/Button/Button'
import { useCamera } from '@/hooks/useCamera'

type CameraProps = React.BaseHTMLAttributes<HTMLElement> & {
  onTakePicture: (file: Blob) => void
}

export function Camera({ className, onTakePicture, ...props }: CameraProps) {
  const { takePicture, videoRef, canvasRef, isStreaming } = useCamera()

  function handleTakePicture() {
    const photo = takePicture()

    onTakePicture(photo)
  }

  return (
    <div className={cn('relative h-full w-full', className)} {...props}>
      <video ref={videoRef} className="h-full w-full" />

      <Button
        className="absolute bottom-6 left-0 right-0 mx-auto h-14 w-14 rounded-full"
        onClick={handleTakePicture}
        disabled={!isStreaming}
      >
        <FeatherIcon className="text-white" icon="camera" />
      </Button>

      <canvas ref={canvasRef} className="hidden" />
    </div>
  )
}
