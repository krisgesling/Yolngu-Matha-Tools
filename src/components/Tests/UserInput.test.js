import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-15';
import { configure, mount } from 'enzyme';
import UserInput from '../UserInput';

configure({ adapter: new Adapter() })

describe('Yolngu keyboard modifications', () => {
  const an = mount(
    <UserInput
      userOptions={{'sortAZ': false}}
    />
  );
  it('Returns input for standard letters', () => {
    expect(an.instance().yolnguKeyboard({
      'prevValue': 'a',
      'newInput': 'ab'
    }).newValue).toEqual('ab');
  });
  it('Sets modKey true when ; typed', () => {
    const component = an.instance()
    component.setState({'modKey': false});
    component.yolnguKeyboard({
      'prevValue': 'a',
      'newInput': 'a;'
    })
    expect(component.state.modKey).toEqual(true);
    component.setState({'modKey': false});
    component.yolnguKeyboard({
      'prevValue': 'adskjfhs',
      'newInput': 'a;dskjfhs'
    })
    expect(component.state.modKey).toEqual(true);
  });
  it('Sets modKey false when non-mapped key typed', () => {
    const component = an.instance();
    component.setState({'modKey': true});
    component.yolnguKeyboard({
      'prevValue': 'a;',
      'newInput': 'a;q'
    });
    expect(component.state.modKey).toEqual(false);
    component.setState({'modKey': true});
    component.yolnguKeyboard({
      'prevValue': 'a;dsflgkjsdf',
      'newInput': 'a;qdsflgkjsdf'
    });
    expect(component.state.modKey).toEqual(false);
    component.setState({'modKey': true});
    component.yolnguKeyboard({
      'prevValue': 'a;dsflgkjsdf',
      'newInput': 'a;jdsflgkjsdf'
    });
    expect(component.state.modKey).toEqual(false);
  });
  it('Returns yolngu characters if modKey true', () => {
    const component = an.instance()
    component.setState({'modKey': true});
    expect(component.yolnguKeyboard({
      'prevValue': 'a;',
      'newInput': 'a;j'
    }).newValue).toEqual('aŋ');
  });
  it('Returns standard letters even if modKey true', () => {
    const component = an.instance()
    component.setState({'modKey': true});
    expect(component.yolnguKeyboard({
      'prevValue': 'a;cde',
      'newInput': 'a;bcde'
    }).newValue).toEqual('a;bcde');
  });
  it('Returns yolngu characters mid-sentence', () => {
    const component = an.instance()
    component.setState({'modKey': true});
    expect(component.yolnguKeyboard({
      'prevValue': 'a;sdgkja',
      'newInput': 'a;asdgkja'
    }).newValue).toEqual('aäsdgkja');
  });
  it('Returns capital yolngu characters', () => {
    const component = an.instance()
    component.setState({'modKey': true});
    expect(component.yolnguKeyboard({
      'prevValue': 'a;',
      'newInput': 'a;L'
    }).newValue).toEqual('aḺ');
  });
  it('Returns same string if copy-pasted in', () => {
    const component = an.instance()
    component.setState({'modKey': true});
    expect(component.yolnguKeyboard({
      'prevValue': '',
      'newInput': 'hello world'
    }).newValue).toEqual('hello world');
  });
})
