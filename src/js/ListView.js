export default function ListView({$app, initialState})
{
    this.state=initialState;
    this.$target = document.createElement('div');
    this.$target.className = 'listItems';
    $app.appendChild(this.$target);

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    }

    this.render = (node) => {
       //this.$target.innerHTML = node.map((item, index) => {`<li data-index=${index}>${item}</li>`}).join('');

    }
    this.render();
}