export default function NavigationBar({$app, initialState}){
    this.state = initialState;
    this.$target = document.createElement('nav');
    $app.appendChild(this.$target);

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    }

    this.render = () => {
        this.$target.innerHTML = 
        `<div id=home_btn>
            <img src=''>
        </div>
        <div id=ingredient_btn>
            <img src=''>
        </div>
        <div id=profile_btn>
            <img src=''>
        </div>
        <div id=setting_btn>
            <img src=''>
        </div>
        `
    }
}