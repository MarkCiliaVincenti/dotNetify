import Overview from "./Overview";
import DataFlow from "./DataFlow";
import { MicroFrontend, Reactive, RealtimePostgres, Scaleout, AWSIntegration } from "./Topics";
import GetStarted from "./GetStarted";
import FromScratchWebPack from "./from-scratch/FromScratchWebPack";
import FromScratchScriptTag from "./from-scratch/FromScratchScriptTag";
import FromScratchCRA from "./from-scratch/FromScratchCRA";
import FromScratchCLI from "./from-scratch/FromScratchCLI";
import HelloWorld from "./examples/HelloWorld";
import ControlTypes from "./examples/ControlTypes";
import SimpleList from "./examples/SimpleList";
import CompositeView from "./examples/CompositeView";
import LiveChart from "./examples/LiveChart";
import BookStore from "./examples/BookStore";
import SecurePage from "./examples/SecurePage";
import ChatRoom from "./examples/ChatRoom";
import Connection from "./apis/Connection";
import CRUD from "./apis/CRUD";
import DI from "./apis/DI";
import DotNetClient from "./apis/DotNetClient";
import Filter from "./apis/Filter";
import LocalMode from "./apis/LocalMode";
import Middleware from "./apis/Middleware";
import MinimalApi from "./apis/MinimalApi";
import Multicast from "./apis/Multicast";
import Routing from "./apis/Routing";
import Security from "./apis/Security";
import WebApiMode from "./apis/WebApiMode";
import { DotNetifyTesting, DotNetifyLoadTester, DotNetifyObserver, DotNetifyResiliencyAddon } from "./Premium";

const NotFound404 = () => (
  <div style={{ padding: "1.5rem" }}>
    <h2>Page not found (404)</h2>
    <p>Redirecting to home page...</p>
    <script>setTimeout(function() {(window.location.href = "/?react")}, 2000)</script>
  </div>
);

export {
  Overview,
  FromScratchWebPack,
  FromScratchScriptTag,
  FromScratchCRA,
  FromScratchCLI,
  DataFlow,
  Reactive,
  MicroFrontend,
  RealtimePostgres,
  Scaleout,
  AWSIntegration,
  GetStarted,
  HelloWorld,
  ControlTypes,
  SimpleList,
  CompositeView,
  LiveChart,
  BookStore,
  SecurePage,
  ChatRoom,
  Connection,
  CRUD,
  DI,
  DotNetClient,
  Filter,
  LocalMode,
  Middleware,
  MinimalApi,
  Multicast,
  Routing,
  Security,
  WebApiMode,
  DotNetifyTesting,
  DotNetifyLoadTester,
  DotNetifyObserver,
  DotNetifyResiliencyAddon,
  NotFound404
};
