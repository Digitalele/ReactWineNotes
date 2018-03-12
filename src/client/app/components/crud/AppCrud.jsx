import React, {Component} from 'react'
import {ref} from 'Firebase'
import DataList from 'DataList'
import LocalStorage from 'LocalStorage'
import firebase, { auth, provider } from 'Firebase';




class AppCrud extends Component {
	constructor() {    /* Note, is possible passed pros into the constructor in order to be used constructor(props)super(props)*/ 
        super()
        
        this.theWine = ref.child('wines');
        this.state = {
            dataList: [],
            user: null,
            username: ''
        };
    }



    componentDidMount = () =>  {

        auth.onAuthStateChanged((user) => {
                if (user) {
                    this.setState({ 
                        user,
                        username: user.displayName
                    });
                } 
        });

        var that = this;
        this.theWine.orderByChild('name')           //ORDERBY
            .limitToFirst(30)
            .on("value", function(snap) {
                       
            var dataVal = snap.val() || {};
            const crud =  []; 
        Object.keys(dataVal).forEach((data) => {      
                     
            crud.push({
                id: data,
                ...dataVal[data]        
            });

        }); 

        that.setState({
                 dataList: crud  
             });
        
        let setFireWinesStorage = LocalStorage.setFireWines(that.state.dataList);
        console.log(setFireWinesStorage + 'update set wine crud');

              
        //console.log(that.state.dataList);

        }, function (e) {
                    //state error
                  console.log("The read failed: " + e.code);
            });
       
    } 

    //unomunt bind firebase
    componentWillUnmount() {
        this.theWine.off();
    }

  
    render() {

        var {dataList, username} = this.state; //pull the states
            function crud(){
                
                if(dataList){
                    return(<DataList dataList={dataList}/>)

                }
            }

        return (
            <div>
                {this.state.user ?  
                    <div>
                        <h2 className="page-title text-center main-title">{username} Wine List</h2>
                                 
                        <div className="small-6 small-centered">

                            {crud()}
                           
                        </div>
                    </div>

                    : 

                <div> <h2 className="page-title text-center main-title">  Protected Area..</h2></div>

                }
                
            </div>

        );
    }
}


export default AppCrud;


// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
// <CSSTransitionGroup
//                                 transitionName="fade"                                                                
//                                 transitionEnterTimeout={300}
//                                 transitionLeaveTimeout={300}
//                                 transitionAppearTimeout={1000}
//                                 transitionAppear={true}>
//              </CSSTransitionGroup> 