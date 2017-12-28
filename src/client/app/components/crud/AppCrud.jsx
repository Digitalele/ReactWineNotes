import React, {Component} from 'react'
import {ref} from 'Firebase'
import DataList from 'DataList'




class AppCrud extends Component {
	constructor() {    /* Note, is possible passed pros into the constructor in order to be used constructor(props)super(props)*/ 
        super()
        // Bind custom methods
        //this.retriveData = this.retriveData.bind(this);
        
        this.theWine = ref.child('wines');
        this.state = {
            data: []
        };
    }
    
    // retriveData() {
    //     const path = ref.child('wines');
    //     path.orderByChild('name')           //ORDERBY
    //     .limitToFirst(30)
    //     .on("value", function(snap) {
    //           console.log(snap.val());
    //           var val = snap.val();
    //             console.log(val);
    //         }, function (errorObject) {
    //           console.log("The read failed: " + errorObject.code);
    //     });
    // }

    componentDidMount = () =>  {

    
    var that = this;
    this.theWine.orderByChild('name')           //ORDERBY
        .limitToFirst(30)
        .on("value", function(snap) {
                   
        var dataVal = snap.val() || {};
        const crud =  []; 
    Object.keys(dataVal).forEach((data) => {      
                console.log(dataVal);
                console.log(data);
                 
                crud.push({
                    id: data,
                    ...dataVal[data]        
                });
            
                console.log(crud);

            }); 

            that.setState({
                     dataList: crud
                    
                 });
            

    console.log(that.state.dataList);

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

        var {dataList} = this.state; //pull the states
            
            function crud(){
                
                if(dataList){
                    console.log(dataList);
                    return(<DataList dataList={dataList}/>)

                }
            }

        return (
            <div>

                <h2 className="page-title text-center main-title">Crud List</h2>
                             
                <div className="small-6 small-centered">

                        {crud()}
                       
                </div>
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