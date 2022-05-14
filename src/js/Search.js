export default function Search({$app, initialState, onSubmit})
{
    this.state = initialState;
    this.$target = document.createElement('div');
    this.$target.className = 'search';
    $app.appendChild(this.$target);

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    }

    this.onSubmit = onSubmit;
    
    this.render = () => {
        if(this.state)
        {
            if(this.$target.innerHTML === "")  
            {
                this.$target.innerHTML = `<form id="search-form"><input type="text" placeholder="검색어를 입력하세요" required></input></form>`
                this.$target.addEventListener('submit', this.onSubmit);
                this.$target.style.display = 'block';
            }
            else
            {
                this.$target.style.display = 'block';
            }
        }
        else if (!this.state){
            this.$target.style.display = 'none';
        }
    }

    this.render();
}