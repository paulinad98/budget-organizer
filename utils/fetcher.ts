import { z, ZodSchema, infer as zInfer } from 'zod'
import { ResponseError } from './responseError'
import type { HTTPMethod } from './types'

type FetcherConfig<Schema extends ZodSchema<any, any> | null> = {
  readonly method: HTTPMethod
  readonly schema: Schema
  readonly body?: object
  readonly config?: RequestInit
}

export async function fetcher<Schema extends ZodSchema<any, any> | null>(
  path: string,
  { method, body, config, schema }: FetcherConfig<Schema>
): Promise<Schema extends ZodSchema<infer T, any> ? T : null> {
  try {
    const response = await fetch(path, {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers,
      },
      credentials: 'include',
      method,
      ...(body && { body: JSON.stringify(body) }),
    })

    if (response.ok) {
      if (!schema) {
        return null as any
      }

      const data = await response.json()

      return schema.parse(data)
    }

    throw new ResponseError(response.statusText, response.status)
  } catch (err) {
    console.log(err)
    if (err instanceof ResponseError) {
      throw err
    }

    throw new ResponseError('Something went wrong during fetching!')
  }
}
