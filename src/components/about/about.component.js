class AboutComponent {
  /* @ngInject */
  constructor (AboutService) {
    this.AboutService = AboutService
  }

  $onInit () {
    this.AboutService
      .getReadme()
      .then(repo => {
        this.repo = repo
        return repo
      })
      .then(console.log)
  }
}

export default {
  template: `
    <h1>About</h1>
    <p ng-if="!$ctrl.repo">Loading...</p>
    <p ng-if="$ctrl.repo">
      My name is @{{ $ctrl.repo.owner.login }} and this is one of my projects -
      A <i>{{ $ctrl.repo.description }}</i>.
    </p>
  `,
  controller: AboutComponent
}
