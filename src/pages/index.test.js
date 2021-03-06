import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import IndexPage from './index'
import enzymeconf from '../utils/enzyme'

it('renders correctly', () => {
  const tree = shallow(<IndexPage />)
  expect(toJson(tree)).toMatchSnapshot()
})
