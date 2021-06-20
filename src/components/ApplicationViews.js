import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { StrMap } from "./strmap/StrMap";
import { StrMapProvider } from "./strmap/StrMapProvider";
import { PersonInfo } from "./strmap/PersonInfo";

export const ApplicationViews = () => {

    return (
        <>
            <StrMapProvider>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/strmap">
                    <StrMap />
                </Route>
                <Route path="/personinfo/:personId(\d+)">
                    <StrMap />
                    <PersonInfo />
                </Route>
            </StrMapProvider>
        </>
    );
};

