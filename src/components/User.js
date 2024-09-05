import React from "react";



// creation of class base components

class  User extends React.Component {

    //to create props
    constructor(props){
        super(props);

        // to create state varibles
        this.state = {
           // count : 0,
           // count2 : 2

           userInfo: {
            name : "loki",
            location : "default",
            
           }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/LokeshKaligatla");
        const json = await data.json();
        console.log(json);

        //the github api have a limit if its stops responding remove the api and add info directly 

        this.setState({
            userInfo : json,
        })
        console.log(json)
    }

    render(){

      //  const {name, location} = this.props
      //  const {count, count2} = this.state;

      const {login, location, avatar_url} = this.state.userInfo;

        return (
            <div className="user">
                <img src={avatar_url} />
                <h1>Name : {login}</h1>
                <h3>Location : {location}</h3>
                <h3>Contact : @lokeshkaligatla</h3>
             {/*   <h1>Count : {count}</h1>
                <h1>count 2 : {count2}</h1>
                <button onClick={() => {
                    // never update state varibles direcctly
                    // u can update both of the counts in same object
                    this.setState({
                        count2 : this.state.count2 +1,
                        count : this.state.count + 1
                    }) 
                }}>Count increate</button> */}
            </div>
        )
    }
}

export default User;