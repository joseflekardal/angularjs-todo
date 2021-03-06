import './app.scss'

const AppComponent = {
  template: `
    <header>
      <h1>AngularJS Todo</h1>
      <nav>
        <a ui-sref="home">Home</a>
        <a ui-sref="about">About</a>
      </nav>
    </header>
    <ui-view></ui-view>
    <footer>By Josef Lekardal</footer>
  `
}

export default AppComponent
