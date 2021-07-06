import React from 'react';
import { withRouter } from "react-router-dom";
import Header from "./Header";
import Chat from "./Chat";
import Chats from "./Chats";

class Chatbox extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="d-none d-sm-none d-md-block">
                    <section id="hero" data-testid="ChatBox">
                        <div className="row">
                            <div className=" ml-0 mr-0 pr-0 col-md-3">
                                <Chats />
                            </div>
                            <div className=" ml-0 mr-0 pl-0 col-md-9">
                                <Chat />
                            </div>
                        </div>
                    </section>
                </div>
                <div className="d-block d-sm-block d-md-none">
                    <section id="hero" data-testid="ChatBox">
                                <Chats />
                    </section>
                </div>
            </div>
        )
    }
}

export default withRouter(Chatbox);