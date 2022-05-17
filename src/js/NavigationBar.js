export default function NavigationBar({$app, initialState}){
    this.state = initialState;
    this.$target = document.createElement('nav');
    $app.appendChild(this.$target);

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    }

    this.render = () => {
        if(this.state)
        {
            this.$target.innerHTML = `<div id=home_btn>
                                        <img src=''>
                                        <div>홈</div>
                                    </div>
                                    
                                    <div id=ingredient_btn>
                                        <img src=''>
                                        <div>재료등록</div>
                                    </div>

                                    <div id=profile_btn>
                                        <img src=''>
                                        <div>프로필</div>
                                    </div>

                                    <div id=setting_btn>
                                        <img src=''>
                                        <div>설정</div>
                                    </div>
                                    `
        }
    }
    
    this.render();
}