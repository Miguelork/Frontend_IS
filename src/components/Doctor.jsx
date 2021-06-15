import React from "react";
    import { withRouter } from "react-router-dom";

    class Doctor extends React.Component {
        componentDidMount() {
            const id = this.props.match.params.user;
            console.log(id)
            this.fetchData(id);
        }

        fetchData = id => {
            // ...
        };

        render() {
            return <div>Yo</div>;
        }
    }

export default withRouter(Doctor);