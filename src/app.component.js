import './app.scss'

const AppComponent = {
  template: `
    <header>
      <h1>AngularJS Todo</h1>
      <nav>
        <a ui-sref="home">Home</a>
      </nav>
    </header>
    <ui-view></ui-view>
    <footer>With ❤️Giuseppe</footer>
  `
}

export default AppComponent
