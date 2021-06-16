import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { StrMap } from "./strmap/StrMap";

export const ApplicationViews = () => {

    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/strmap">
                <StrMap />
            </Route>
            

        </>
    );
};

