export function convertDataUrlToBlob(dataUrl: string): Blob {
  const parts = dataUrl.split(';base64,')
  const imageType = parts[0].split(':')[1]
  const decodedData = window.atob(parts[1])
  const uInt8Array = new Uint8Array(decodedData.length)

  for (let i = 0; i < decodedData.length; ++i) {
    uInt8Array[i] = decodedData.charCodeAt(i)
  }

  return new Blob([uInt8Array], { type: imageType })
}
