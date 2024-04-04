import { NextRequest } from 'next/server'
import { imageSchema } from '@/utils/schemas'
import { ResponseError } from '@/utils/responseError'
import { fromZodError } from 'zod-validation-error'
import path from 'path'
import { writeFile } from 'fs/promises'

export async function getFile(req: NextRequest) {
  const formData = await req.formData()

  return formData.get('file')
}

export async function getImage(req: NextRequest) {
  const file = await getFile(req)

  const image = imageSchema.safeParse(file)

  if (!image.success) {
    throw new ResponseError(fromZodError(image.error).toString(), 422)
  }

  return image.data
}

export async function createFile({
  file,
  filePath,
}: {
  file: File
  filePath: string
}) {
  const buffer = Buffer.from(await file.arrayBuffer())

  const date = new Date().toISOString().replace(/[:.]/g, '-')
  const filename = file.name.replaceAll(' ', '_')
  const extension = file.type.split('/')[1]

  await writeFile(
    path.join(process.cwd(), `${filePath}/${filename}-${date}.${extension}`),
    buffer
  )
}
