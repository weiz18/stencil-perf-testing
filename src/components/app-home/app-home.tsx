import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {
  public maxDiv = 1000;

  renderArrowDiv() {
    let divArr = [];
    for (let i = 0; i < this.maxDiv; i++) {
      divArr.push(<app-profile index={i}></app-profile>);
    }
    return divArr;
  }

  renderBoundDiv() {
    let divArr = [];
    for (let i = 0; i < this.maxDiv; i++) {
      divArr.push(<app-profile-bound index={i}></app-profile-bound>);
    }
    return divArr;
  }

  renderBoundSimpleDiv() {
    let divArr = [];
    for (let i = 0; i < this.maxDiv; i++) {
      divArr.push(<app-profile-simple index={i}></app-profile-simple>);
    }
    return divArr;
  }


  render() {
    return (
      <div class='app-home'>
        {this.renderBoundDiv()}
      </div>
    );
  }
}
