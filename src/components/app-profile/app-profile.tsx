import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true
})
export class AppProfile {
  @Prop() index: number;

  public maxDiv = 1;

  onTestArrowClick(i) {
    console.log('onTestArrowClick', i);
  }


  render() {
      return (
        <div onClick={ () => this.onTestArrowClick(this.index)}>{'Arrow' + this.index}</div>
      );
  }
}

