import React from 'react';
import { SelectedButton, NonselectedButton } from './UI/SidebarComponents.js';
import headshot from '../containers/images/headshot.png';
import './UI/UI.css';
import { withRouter} from 'react-router-dom';
import * as docCookies from 'doc-cookies';

/**
 * Renders a sidebar for all the different pages on the User interface.
 */
class Sidebar extends React.Component {

    /**
     * Constructor for Sidebar component.
     * Sets the view state based on value passed into props.
     * Renders differently depending on whether user is Instructor or Student.
     * @param {array} props Properties that are passed into element when being used.
     */
    constructor(props) {
        super(props);
        this.handleShowDashboard = this.handleShowDashboard.bind(this);
        this.handleShowClasses = this.handleShowClasses.bind(this);
        this.handleCreateClass = this.handleCreateClass.bind(this);
        this.handleTakeAttendance = this.handleTakeAttendance.bind(this);
        this.handleCreateQuiz = this.handleCreateQuiz.bind(this);
        this.handleSetting = this.handleSetting.bind(this);
        this.getNavButtons = this.getNavButtons.bind(this);

        var viewProp = this.props.view;
        this.state = { view: viewProp };

        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        console.log("mounting");
    }

    componentWillUnmount() {
        console.log("unmounting");
    }

    /**
     * Event handler for when user clicks on profile name.
     * Changes button selection on sidebar and redirects to dashboard page.
     */
    handleShowDashboard() {
        console.log("show dashboard");
        this.setState(state => ({
            view: "dashboard"
        }));

        let path = '/';
        this.props.history.push(path);
    }

    /**
     * Event handler for when user clicks on show classes button.
     * Changes button selection on sidebar and redirects to page showing all classes.
     */
    handleShowClasses() {
        console.log("show class");
        this.setState(state => ({
            view: "show classes",
        }));

        let path = '/instructor/classes';
        this.props.history.push(path);
    }

    /**
     * Event handler for when user clicks on create class button.
     * Changes button selection on sidebar and redirects to form to create new class.
     */
    handleCreateClass() {
        console.log("create class");
        this.setState(state => ({
            view: "create class"
        }));

        let path = '/instructor/createclass';
        this.props.history.push(path);
    }

    /**
     * Event handler for when user clicks on take attendance button.
     * Changes button selection on sidebar and redirects to page to take attendance.
     */
    handleTakeAttendance() {
        console.log("take attendance");
        this.setState(state => ({
            view: "take attendance"
        }));

        let path = '/instructor/takeattendance';
        this.props.history.push(path);
    }

    /**
     * Event hanler for when user clicks on create quiz button.
     * Changes button selection on sidebar and redirects to form to create quiz.
     */
    handleCreateQuiz() {
        console.log("create quiz");
        this.setState(state => ({
            view: "create quiz"
        }));

        let path = '/instructor/createquiz';
        this.props.history.push(path);
    }

    /**
     * Event handler for when user clicks on setting button.
     * Changes button selection on sidebar and redirects to account setting page.
     */
    handleSetting() {
        console.log("setting");
        this.setState(state => ({
            view: "setting"
        }));
    }

    handleLogout() {
        console.log("logging out");

        const promise = new Promise(() => {
            if (docCookies.hasItem('token')) {
                console.log("removing token");
                docCookies.removeItem('token', '/');
                localStorage.clear();
            }
        });

        promise.then(this.props.history.push('/'));
    }

    /**
     * Renders the sidebar based on state of sidebar so that correct button is selected.
     */
    getNavButtons() {
        var instructorName = localStorage.getItem('firstName') + " " + localStorage.getItem('lastName');
        console.log(localStorage);
        // if (instructorName === null || instructorName === "") {
        //     instructorName = "Professor Kim";
        //     console.log("no name");
        // }
        switch(this.state.view) {
            case "dashboard":
                return (
                    <div>
                        <SelectedButton style="margin-top: 20px">{instructorName}</SelectedButton>
                        <NonselectedButton onClick={this.handleShowClasses.bind(this)}>Classes</NonselectedButton>
                        <NonselectedButton onClick={this.handleCreateClass.bind(this)}>Create Class</NonselectedButton>
                        <NonselectedButton onClick={this.handleTakeAttendance.bind(this)}>Take Attendance</NonselectedButton>
                        <NonselectedButton onClick={this.handleCreateQuiz.bind(this)}>Create Quiz</NonselectedButton>
                        <NonselectedButton onClick={this.handleSetting.bind(this)}>Setting</NonselectedButton>
                        <NonselectedButton onClick={this.handleLogout}>Log Out</NonselectedButton>
                    </div>
                )
            
            case "show classes":
                return (
                    <div>
                        <NonselectedButton onClick={this.handleShowDashboard.bind(this)} style="margin-top: 20px">{instructorName}</NonselectedButton>
                        <SelectedButton>Classes</SelectedButton>
                        <NonselectedButton onClick={this.handleCreateClass.bind(this)}>Create Class</NonselectedButton>
                        <NonselectedButton onClick={this.handleTakeAttendance.bind(this)}>Take Attendance</NonselectedButton>
                        <NonselectedButton onClick={this.handleCreateQuiz.bind(this)}>Create Quiz</NonselectedButton>
                        <NonselectedButton onClick={this.handleSetting.bind(this)}>Setting</NonselectedButton>
                        <NonselectedButton onClick={this.handleLogout}>Log Out</NonselectedButton>
                    </div>
                ) 
                
            case "create class":
                return (
                    <div>
                        <NonselectedButton onClick={this.handleShowDashboard.bind(this)} style="margin-top: 20px">{instructorName}</NonselectedButton>
                        <NonselectedButton onClick={this.handleShowClasses.bind(this)}>Classes</NonselectedButton>
                        <SelectedButton>Create Class</SelectedButton>
                        <NonselectedButton onClick={this.handleTakeAttendance.bind(this)}>Take Attendance</NonselectedButton>
                        <NonselectedButton onClick={this.handleCreateQuiz.bind(this)}>Create Quiz</NonselectedButton>
                        <NonselectedButton onClick={this.handleSetting.bind(this)}>Setting</NonselectedButton>
                        <NonselectedButton onClick={this.handleLogout}>Log Out</NonselectedButton>
                    </div>
                )
            
            case "take attendance":
                return (
                    <div>
                        <NonselectedButton onClick={this.handleShowDashboard.bind(this)} style="margin-top: 20px">{instructorName}</NonselectedButton>
                        <NonselectedButton onClick={this.handleShowClasses.bind(this)}>Classes</NonselectedButton>
                        <NonselectedButton onClick={this.handleCreateClass.bind(this)}>Create Class</NonselectedButton>
                        <SelectedButton>Take Attendance</SelectedButton>
                        <NonselectedButton onClick={this.handleCreateQuiz.bind(this)}>Create Quiz</NonselectedButton>
                        <NonselectedButton onClick={this.handleSetting.bind(this)}>Setting</NonselectedButton>
                        <NonselectedButton onClick={this.handleLogout}>Log Out</NonselectedButton>
                    </div>
                )
            
            case "create quiz":
                return (
                    <div>
                        <NonselectedButton onClick={this.handleShowDashboard.bind(this)} style="margin-top: 20px">{instructorName}</NonselectedButton>
                        <NonselectedButton onClick={this.handleShowClasses.bind(this)}>Classes</NonselectedButton>
                        <NonselectedButton onClick={this.handleCreateClass.bind(this)}>Create Class</NonselectedButton>
                        <NonselectedButton onClick={this.handleTakeAttendance.bind(this)}>Take Attendance</NonselectedButton>
                        <SelectedButton>Create Quiz</SelectedButton>
                        <NonselectedButton onClick={this.handleSetting.bind(this)}>Setting</NonselectedButton>
                        <NonselectedButton onClick={this.handleLogout}>Log Out</NonselectedButton>
                    </div>
                )
        
            case "setting":
                return (
                    <div>
                        <NonselectedButton onClick={this.handleShowDashboard.bind(this)} style="margin-top: 20px">{instructorName}</NonselectedButton>
                        <NonselectedButton onClick={this.handleShowClasses.bind(this)}>Classes</NonselectedButton>
                        <NonselectedButton onClick={this.handleCreateClass.bind(this)}>Create Class</NonselectedButton>
                        <NonselectedButton onClick={this.handleTakeAttendance.bind(this)}>Take Attendance</NonselectedButton>
                        <NonselectedButton onClick={this.handleCreateQuiz.bind(this)}>Create Quiz</NonselectedButton>
                        <SelectedButton>Setting</SelectedButton>
                        <NonselectedButton onClick={this.handleLogout}>Log Out</NonselectedButton>
                    </div>
                )
            
            default:
                return (<div></div>);
        }
    }

    render() {
        return (
            <div className="dashboard-sidebar">
                <img className="profile-image" src={headshot} />
                {this.getNavButtons()}
            </div>
        )
    }

}

var SidebarRouter = withRouter(Sidebar)
export default SidebarRouter;