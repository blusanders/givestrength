import React from "react";
import { Route } from "react-router-dom";

import { Home } from "./Home";

import { Crew } from "./crew/Crew";
import { CrewProvider } from "./crew/CrewProvider";
import { CrewTypeProvider } from "./CrewType/CrewTypeProvider";

import { TourRun } from "./tourrun/TourRun";
import { TourRunProvider } from "./tourrun/TourRunProvider";
import { TourProvider } from "./tour/TourProvider";
import { Tour } from "./tour/Tour";
import { TourRunCrewProvider } from "./touruncrew/TourRunCrewProvider";

import { Reports } from "./reports/Reports";

export const ApplicationViews = () => {

    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            
            {/* <Route exact path="/crew">

                <TourProvider>
                    <CrewProvider>
                        <CrewTypeProvider>
                            <Crew />
                        </CrewTypeProvider>
                    </CrewProvider>
                </TourProvider>
            </Route> */}

            <CrewProvider>
                <CrewTypeProvider>
                    <Route exact path="/crew">
                        <Crew />
                    </Route>
                    <Route exact path="/crew/:crewId(\d+)">
                        <Crew />
                    </Route>
                </CrewTypeProvider>
            </CrewProvider>

            <TourProvider>
                <Route exact path="/tour">
                    <Tour />
                </Route>
                <Route exact path="/tour/:tourId(\d+)">
                    <Tour />
                </Route>
            </TourProvider>

                <CrewProvider>
                    <TourRunCrewProvider>
                        <TourProvider>
                            <TourRunProvider>
                            <Route exact path="/tourrun/:tourRunId(\d+)">
                                <TourRun />
                            </Route>
                            <Route exact path="/tourrun">
                                <TourRun />
                            </Route>
                            </TourRunProvider>
                        </TourProvider>
                    </TourRunCrewProvider>
                </CrewProvider>


            <Route exact path="/reports">
            <CrewProvider>
            <TourRunCrewProvider>
                <TourRunProvider>
                    <TourProvider>
                        <Reports />
                    </TourProvider>
                        </TourRunProvider>
            </TourRunCrewProvider>
            </CrewProvider>
            </Route>
        </>
    );
};

