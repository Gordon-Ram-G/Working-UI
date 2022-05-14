export default function Login({$app, initialState,onClick})
{
    this.state = initialState;
    this.$target = document.createElement('a');
    this.$target.id = 'custom-login-btn';
    $app.appendChild(this.$target);

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    }

    this.onClick = onClick;

    this.render = () => {
        if(!this.state)
        {
        this.$target.innerHTML = `<img
                                src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
                                width="222"
                                alt="카카오 로그인 버튼"
                                />`
        }
        else{
            this.$target.style.display = 'none';
        }
    } 

    this.$target.addEventListener('click', onClick);

    this.render();
} 