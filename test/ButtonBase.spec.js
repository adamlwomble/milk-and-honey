import { mount } from '@vue/test-utils'
import LogoInitial from '@/components/LogoInitial.vue'

describe('LogoInitial', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(LogoInitial)
    expect(wrapper.vm).toBeTruthy()
  })
})
