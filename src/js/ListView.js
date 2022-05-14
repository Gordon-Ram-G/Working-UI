export default function ListView($app, initialState)
{
    this.state=initialState;
    this.$target = document.createElement('ul');
    this.$target.className = 'listItems';
    $app.appendChild(this.$target);

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    }

    this.render = (node) => {
       // this.$target.innerHTML
    }
}