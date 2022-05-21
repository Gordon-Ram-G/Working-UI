export default function NavigationBar({$app, initialState}){
    this.state = initialState;
    this.$target = document.createElement('nav');
    this.$target.className = 'bottoms';
    $app.appendChild(this.$target);

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    }

    this.render = () => {
        if(this.state)
        {
            if(this.$target.innerHTML === '')
            {
                this.$target.style.display = '';
                this.$target.innerHTML = `<div id=home_btn>
                                        <img src='./src/assets/uil_home-alt.png' style="height:120px;width:120px;">
                                        <div>홈</div>
                                    </div>
                                    
                                    <div id=ingredient_btn>
                                        <img src='./src/assets/uil_clipboard-alt.png' style="height:120px;width:120px;">
                                        <div>재료등록</div>
                                    </div>

                                    <div id=profile_btn>
                                        <img src='./src/assets/uil_user.png' style="height:120px;width:120px;">
                                        <div>프로필</div>
                                    </div>

                                    <div id=setting_btn>
                                        <img src='./src/assets/uil_cog.png' style="height:120px;width:120px;">
                                        <div>설정</div>
                                    </div>
                                    `
            }else{
                this.$target.style.display = '';
            }
        }else{
            this.$target.style.display = 'none';
        }
    }
    
    this.render();
}