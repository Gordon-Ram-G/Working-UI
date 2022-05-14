import Login from "./login.js";
import Loading from "./loading.js";
import Search from "./Search.js";

export default function App($app)
{
    this.state = {
        isLogined : false,
        isLoading : false,
        drawSearchBar : false,
    };
    
    // 초기 카카오 로그인 관련
    const kakaoLogin = new Login({
        $app,
        initialState : false,
        onClick: async () => {
            try
            {
                this.setState({
                    ...this.state,
                    isLoading:true
                });

                await Kakao.init('76b58bf2c5c73f0af2a5e08b9600c4d5');
                Kakao.Auth.login({
                    success: (result) => 
                    {
                        this.setState(
                            {
                                ...this.state,
                                isLogined : true,
                                isLoading : false,
                                drawSearchBar : true
                            })
                    },
                    fail: function(err) 
                    {
                            alert(JSON.stringify(err))
                    },
                })
            }
            catch(e)
            {
                console.log(e.message)
            }
        }
    });

    // 검색창
    const searchBar = new Search({
        $app, 
        initialState : this.state.drawSearchBar,
        onSubmit : (event) => {
            event.preventDefault();
        }
    });

    // loading 창 
    const loading = new Loading({
        $app,
        initialState: this.state.isLoading
    });

    // 전체 상태 setting
    this.setState = (newState) => {
        this.state = newState;
        kakaoLogin.setState(this.state.isLogined);
        loading.setState(this.state.isLoading);
        searchBar.setState(this.state.drawSearchBar);
    }

    // 초기 page init
    const init = () => {
        try
        {    
            this.setState({
                ...this.state,
                isLoading: true,
              })
        }
        catch(e)
        {
            console.log(`App init 에러 발생 ${e.message}`);
        }
        finally{
            this.setState({
                ...this.state,
                isLoading:false
            })
        }
    }

    init();
}