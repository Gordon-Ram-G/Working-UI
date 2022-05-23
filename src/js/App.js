import Login from "./login.js";
import Loading from "./loading.js";
import Search from "./Search.js";
import NavigationBar from "./NavigationBar.js";
import ListView from "./ListView.js";
import TopBar from "./TopBar.js";

export default function App($app)
{
    this.state = {
        isLogined : false,
        isLoading : false,
        drawSearchBar : false,
        drawList : false,
        drawTopBar : false,
        drawNavigationBar:false,
    };

    // 초기 카카오 로그인 관련
    const kakaoLogin = new Login({
        $app,
        initialState : this.state.isLogined,
        onClick: async () => {
            try
            {
                this.setState({
                    ...this.state,
                    isLoading:true
                });

                await Kakao.init('76b58bf2c5c73f0af2a5e08b9600c4d5');
                
                return new Promise((resolve,reject) => {
                    Kakao.Auth.login({
                        success: (authObj) => resolve(authObj),
                        fail: function(error) {
                            alert('Login 실패!', error.message);
                        },
                    })
                }).then((authObj) => {
                    {
                        new Promise((r1,r2) => {
                            Kakao.API.request({
                                url: '/v2/user/me',
                                success: (result) => r1(result),
                                fail: function(error) {
                                  alert('Access Token으로 사용자 정보 가져오기 실패!', error.message);
                                },
                              })
                        }).then((result) => {
                            console.log(result.properties.nickname);
                            console.log(result.properties.profile_image);
                            localStorage.setItem('nickname',result.properties.nickname);
                            localStorage.setItem('profile_image',result.properties.profile_image);
                            this.setState({
                                ...this.state,
                                isLogined : true,
                                isLoading : false,
                                //drawSearchBar : true,
                                drawTopBar:true,
                                drawList:true,
                                drawNavigationBar:true,
                            })
                        });
                      }
                });
            }
            catch(e)
            {
                console.log(e.message)
            }
            finally{
                
            }
        }
    });


    // 검색창 => 버튼으로 변경 
    const searchBar = new Search({
        $app, 
        initialState : this.state.drawSearchBar,
        onSubmit : (event) => {
            event.preventDefault();
        }
    });

    // 상단 바
    const topbar = new TopBar({
        $app,
        initialState: this.state.drawTopBar
    });
  
    const listItems = new ListView({
        $app, 
        initialState: this.state.drawList,
    });

    // 하단 네비게이션 바 
    const navBar = new NavigationBar({
        $app, 
        initialState: false
    })

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
        navBar.setState(this.state.drawNavigationBar);
        listItems.setState(this.state.drawList);
        topbar.setState(this.state.drawTopBar);
    }

    // 초기 page init
    const init = () => {
        try
        {   
            if(localStorage.getItem('nickname') !== null)
            {
                this.setState({
                    ...this.state,
                    isLogined : true,
                    //drawSearchBar: true,
                    drawTopBar:true,
                    drawList:true,
                    drawNavigationBar:true,
                })
                console.log('머야')
            }
            else{
                this.setState({
                    ...this.state,
                    isLoading: true,
                })
            } 
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
