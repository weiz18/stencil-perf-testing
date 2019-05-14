import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-profile-simple',
  shadow: true
})
export class AppProfileSimple{
  @Prop() index: number;
    
  onTestBoundClick = (i) => {
      console.log('onTestBoundSimpleClick', i);
  }

  render() {
      return (
        <div onClick={this.onTestBoundClick}>{'BoundSimple' + this.index}</div>
      );
  }
}

