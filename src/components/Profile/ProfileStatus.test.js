import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe('ProfileStatus component', () => {
  test('status from props should ve in the state', () => {
    const component = create(<ProfileStatus status='it-kamasutra.com' />)
    const instance = component.getInstance()
    expect(instance.state.status).toBe('it-kamasutra.com')
  })
  test('after creation <span> should be displayed', () => {
    const component = create(<ProfileStatus status='it-kamasutra.com' />)
    const root = component.root
    const span = root.findByType('span')
    expect(span).not.toBeNull()
  })
  test('after creation <input> should be displayed', () => {
    const component = create(<ProfileStatus status='it-kamasutra.com' />)
    const root = component.root
    expect(() => {
      let input = root.findByType('input')
    }).toThrow()
  })
  test('after creation <span> should contains correct status', () => {
    const component = create(<ProfileStatus status='it-kamasutra.com' />)
    const root = component.root
    const span = root.findByType('span')
    expect(span.children[0]).toBe('it-kamasutra.com')
  })
})