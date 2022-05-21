export default function TopBar({$app, initialState})
{
    this.state = initialState;
    this.$target = document.createElement('nav');
    this.$userTarget = document.createElement('div');
    this.$userIngred = document.createElement('div');
    this.$target.className = 'tops';
    this.$userTarget.className = 'userTops';
    this.$userIngred.className = 'userIngred';
    $app.appendChild(this.$target);
    $app.appendChild(this.$userTarget);
    $app.appendChild(this.$userIngred);

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
                this.$userTarget.style.display = '';
                this.$userIngred.style.display = '';
                this.$target.innerHTML = `<div id="burger_btn">
                                        <img src='./src/assets/uil_align-justify.png' style="height:120px;width:120px;">
                                    </div>
                                    
                                    <div id="logo">
                                        <img src='./src/assets/squirrel.png' style="height:120px;width:120px;">
                                        <div>Gordon-Ram-G</div>
                                    </div>

                                    <div id="search_btn">
                                        <img src='./src/assets/uil_search.png' style="height:120px;width:120px;">
                                    </div>
                                    `;
            this.$userTarget.innerHTML = `<div id="user_info">
                                            <div id="user_id"><b>${localStorage.getItem('nickname')}</b>님</div>
                                            <div id="comment">오늘은 어떤것을 먹어볼까요?</div>
                                        </div>   
                                        <div id="order_btn">
                                            <button>
                                                <img src='./src/assets/uil_shopping-cart-alt.png' style="height:120px;width:120px;">
                                                <span>주문하기</span>
                                            </button>
                                        </div>
                                        `;

            this.$userIngred.innerHTML = `   
                                        <div id="Main_Ingred">
                                            <div id="Ingred_Board">
                                                <img src='./src/assets/uil_clipboard-notes.png' style="height:120px;width:120px;">
                                            </div>
                                            <div id="Ingred_Info">
                                                ...재료들
                                            </div>
                                        </div>
                                        `;
            }
            else{
                this.$target.style.display = '';
                this.$userTarget.style.display = '';
                this.$userIngred.style.display = '';
            }
        }else{
            this.$target.style.display = 'none';
            this.$userTarget.style.display = 'none';
            this.$userIngred.style.display = 'none';
        }
    }
    
    this.render();
}