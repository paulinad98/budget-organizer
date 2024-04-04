import { Camera } from '@/components/app/Camera/Camera'

function saveExpanse(photo: Blob) {
  const formData = new FormData()

  formData.append('file', photo)
  fetch('/api/expense', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error))
}

export default function ExpanseAddCamera() {
  return (
    <div className="h-screen">
      <Camera onTakePicture={saveExpanse} />
    </div>
  )
}
