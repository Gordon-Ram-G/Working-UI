export default function Loading({ $app, initialState }) {
    this.state = initialState;
    this.$target = document.createElement('div')
    this.$target.className = 'Loading Modal'
  
    $app.appendChild(this.$target)
  
    this.setState = (newState) => {
      this.state = newState
      this.render()
    }
  
    this.render = () => {
      this.$target.innerHTML = `<div class="content"><img src="./assets/loading.gif"></div>`
  
      this.$target.style.display = this.state ? 'block' : 'none'
    }
  
    this.render()
  }