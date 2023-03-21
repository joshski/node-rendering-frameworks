// TODO: convert to typescript

import { mount } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('index.vue', () => {
  test('renders HTML', () => {
    expect(mount(Index).html()).toMatch('Hello Nuxt2!')
  })
})
