import * as React from "react";
import { connect } from "react-redux";

import { FirstComponent } from "./FirstComponent";
import store from "../Store";
import { Person } from "../models/Person";

export interface FirstComponentContainerProps {
}

const mapStateToProps = function (store: any) {
    return {
        persons: store.persons
    };
};

export class FirstComponentContainer
    extends React.Component<FirstComponentContainerProps, undefined> {
    clickButton(): void {
        alert("The button was clicked");
    }

    componentDidMount() {
        setTimeout(() => { // simulates an AJAX call
            var persons: Person[] = [{ firstname: "Christos", lastname: "Monogios" }];
            store.dispatch({
                type: "GET_PERSONS",
                persons: persons
            });

            // It gives us the person's firstname and lastname back
            console.log(store.getState());
        }, 2000);
    }

    render() {
        return <FirstComponent firstProp="First Property" firstButtonEvent={this.clickButton} />;
    }
}

export default connect(mapStateToProps)(FirstComponentContainer as any);