import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="" exact component={StreamList}></Route>
          <Route path="" exact component={StreamEdit}></Route>
          <Route path="" exact component={StreamDelete}></Route>
          <Route path="" exact component={StreamShow}></Route>
          <Route path="" exact component={StreamCreate}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
