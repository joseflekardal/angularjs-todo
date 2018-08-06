import './about.scss'

/* @ngInject */
class AboutComponent {
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
    <p ng-if="!$ctrl.repo">Loading...</p>
    <div ng-if="$ctrl.repo">
      <img ng-src="{{ $ctrl.repo.owner.avatar_url }}" class="avatar">
      <h1>About</h1>
      <p>
        My name is
        <a href="{{ $ctrl.repo.owner.html_url }}">
          @{{ $ctrl.repo.owner.login }}
        </a>
        and this is one of my projects - A
        <i>{{ $ctrl.repo.description }}</i> application.
      </p>
    </div>
  `,
  controller: AboutComponent
}
