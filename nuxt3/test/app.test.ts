// https://nuxt.com/docs/examples/advanced/testing

import { describe, expect, it } from 'vitest'
import { $fetch } from '@nuxt/test-utils'

describe('The application', () => {
  it('renders HTML', async () => {
    expect(await $fetch('/')).toMatch('Hello Nuxt3')
  })
})
