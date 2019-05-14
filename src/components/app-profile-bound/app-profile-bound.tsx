import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-profile-bound',
  shadow: true
})
export class AppProfileBound {
  @Prop() index: number;
    
  onTestBoundClick = (i) => {
    return (ev) => {
      console.log('onTestBoundClick', ev, i);
    }
  }

  render() {
      return (
        <div onClick={this.onTestBoundClick(this.index)}>{'Bound' + this.index}</div>
      );
  }
}

