import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TeamComponent from '../TeamComponent.vue'

describe('TeamComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(TeamComponent, { props: { subtitle: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
