export default function ListView({$app, initialState,draw})
{
    this.state=initialState;
    this.$target = document.createElement('div');
    this.$target.className = 'listItems';
    $app.appendChild(this.$target);

    this.node=['a','b','c','d','e','f','g','h','i','j','k','l'];
    
    this.setState = (newState) => {
        this.state = newState;
        this.render();
    }

    this.render = () => {
       this.$target.innerHTML = this.node.map((item, index) => `<li data-index=${index}>${item}</li>`).join('');
    }
    this.render();
}