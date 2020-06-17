import React, { Component } from 'react';
import RegisterForm from "./RegisterForm.component";
import Navbar from "./Navbar.component";
import graphicTwo from "../graphic_2.png"

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.passRegisterInfo = this.passRegisterInfo.bind(this);
        this.doSomething = this.doSomething.bind(this);
        this.setState({
            username: "",
            firstname: "",
            lastname: "",
            email: "",
          });
    };

    passRegisterInfo(registerInfo) {
        console.log("passData ran");
        this.setState({
          username: registerInfo.username,
          firstname: registerInfo.firstname,
          lastname: registerInfo.lastname,
          email: registerInfo.email,
        }, () => {
            console.log(this);
            this.doSomething(registerInfo);
        })
    }

    async doSomething(registerInfo) {
        await this.props.passRegisterInfoToMain(registerInfo);
        this.props.history.push('/onboard');
    };

    render() {
        return (
            <div class="homepage-main-container">
                <Navbar />
                <div class="homepage-body-container">
                    <div class="register-main-container">
                        <div class="upper-lines-container animate__animated animate__fadeInLeft animate__delay-3s">
                            <div id="lineOne" class="line"></div>
                            <div id="lineTwo" class="line"></div>
                        </div>
                        <div class="register-form-container">
                            <div class="entice-message animate__animated animate__fadeInDown">Begin a new chapter in Lorem Ipsum.</div>
                            <RegisterForm passRegisterInfo={this.passRegisterInfo}/>
                        </div>
                        <div class="lower-lines-container animate__animated animate__fadeInRight animate__delay-3s">
                            <div id="lineThree" class="line"></div>
                            <div id="lineFour" class="line"></div>
                        </div>
                    </div>
                    <div class="description-main-container">
                        <div class="image-container">
                            <img id="graphicTwo" class="animate__animated animate__fadeIn animate__delay-2s" src={graphicTwo}></img>
                        </div>
                        <div class="description-text">
                            <div class="animate__animated animate__fadeInUp animate__delay-1s description-text-container ">
                                <div class="bigger-text-container">
                                    <p>Hippity Hoppitus Latino Choppitus.</p>
                                    <p>Wir sollten alle den dunklen Lord anbeten.</p>
                                </div>
                                <p class="smaller-paragraph">Haben Sie eine lange Tag gemacht? Diese Solution ist die perfekt fit fur Sie. Fierst, wie haben Faktorie in China, Japan, und the united Staaten vom Amerika. Danach, eine Millione Customer wollen unsere Platform.</p>
                                <p class="smaller-paragraph">Haben Sie eine lange Tag gemacht? Diese Solution ist die perfekt fit fur Sie. Fierst, wie haben Faktorie in China, Japan, und the united Staaten vom Amerika. Danach, eine Millione Customer wollen unsere Platform.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}