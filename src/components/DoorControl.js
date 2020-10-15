import React from 'react';

class DoorControl extends React.Component {
    // constructor(props){
    //     super(props);

    //     this.state = {
    //     closing: false,
    //     opening: false,
    //     doorStatus: ""
    //     };
    // }

    // componentDidUpdate(prevProps) {
    //     if(this.props.value !== prevProps.value){
    //     this.setState({
    //         closing: false,
    //         opening: false
    //     });
    //     }

    //     this.door_updateState();
    // }

    door_isOpen() {
        return this.props.value === true;
    }

    // door_updateState() {
    //     let status = "";

    //     if(this.state.closing === true) {
    //     status = "Closing...";
    //     }
    //     else if(this.state.opening === true) {
    //     status = "Opening...";
    //     }
    //     else if (this.door_isOpen()){
    //     status = "Opened";
    //     }
    //     else {
    //     status = "Closed";
    //     }

    //     if(this.state.doorStatus !== status){
    //     this.setState({
    //         doorStatus: status
    //     });
    //     }
    // }

    setClosing(){
        // this.setState({
        // closing: true,
        // opening: false
        // });
    }

    setOpening(){
        // this.setState({
        // closing: false,
        // opening: true
        // });
    }

    render() {
        return (
        <div>
            Door { this.props.doorNumber }: { this.door_isOpen() ? "Opened" : "Closed" }
            { this.door_isOpen() ? <ApiButton label={`Close Door ${ this.props.doorNumber }`} action={`cdoor${ this.props.doorNumber }`} onClick={() => this.setClosing()} /> : null}
            { !this.door_isOpen() ? <ApiButton label={`Open Door ${ this.props.doorNumber }`} action={`odoor${ this.props.doorNumber }`} onClick={() => this.setOpening()} /> : null}
        </div>
        );
    }
}


class ApiButton extends React.Component {
    handleClick() {
        fetch(`/${this.props.action}`, {
        method: 'POST'
        }).then(
        () => console.log(`${this.props.action} : SUCCESS`),
        (error) => console.log(error)
        );
    }
    render() {
        return (
        <button onClick={() => this.handleClick()}>{this.props.label}</button>
        );
    }
}
  
export default DoorControl;
