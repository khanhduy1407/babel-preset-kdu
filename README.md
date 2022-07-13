# babel-preset-kdu

Babel preset for all Kdu plugins.

## Install

```bash
npm install -D babel-preset-kdu
```

CDN: [UNPKG](https://unpkg.com/babel-preset-kdu/)

## Usage

```js
{
  "presets": ["kdu"]
}
```

#### Supports event modifiers.

Uses `babel-plugin-jsx-event-modifier` for event modifiers.

Example:
```js
Kdu.component('hello-world', {
  methods: {
    method () {
      console.log('clicked')
    }
  },
  render () {
    return (
      <div>
        <a href="/" onClick:prevent={this.method} />
      </div>
    )
  }
})
```

#### Supports functional components.

Uses `babel-plugin-jsx-kdu-functional` for functional components.

Example:
```js
const A = ({ props }) => <h1>{props.msg}</h1>
const B = ({ listeners }) => (
  <div onClick={listeners.click}>
    <A msg="Hello World!">
  </div>
)
```

#### Supports k-model.

Uses `babel-plugin-jsx-k-model` for two-way data binding with form elements.

Example:
```js
Kdu.component('hello-world', {
  data: () => ({
    text: 'Hello World!'
  }),
  render () {
    return (
      <div>
        <input type="text" k-model={this.text} />
        {this.text}
      </div>
    )
  }
})
```

## License

MIT &copy; 2021 NKDuy
