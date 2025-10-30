import { WhatIsWebDevelopment, whatIsWebDevelopment} from './Chapter 1/WhatIsWebDevelopment';
import { ClientServerArchitecture, clientServerArchitectureMeta } from './Chapter 1/ClientServerArchitecture';
import { FrontendVsBackend, frontendVsBackendMeta } from './Chapter 1/FrontendVsBackend';
import { IntroToMernStack, introToMernStackMeta } from './Chapter 1/IntroToMernStack';
import { DevEnvSetup, devEnvSetupMeta } from './Chapter 1/DevEnvSetup';
import { CodeEditors, codeEditorsMeta } from './Chapter 1/CodeEditors';
import { TerminalBasics, terminalBasicsMeta } from './Chapter 1/TerminalBasics';

// Chapter 2
import IntroductionToVersionControl from './Chapter 2/IntroductionToVersionControl';
import GitInstallationConfiguration from './Chapter 2/GitInstallationConfiguration';
import GitBasics from './Chapter 2/GitBasics';
import WorkingWithBranchesMerging from './Chapter 2/WorkingWithBranchesMerging';
import GitHubIntroductionAccountSetup from './Chapter 2/GitHubIntroductionAccountSetup';
import RemoteRepositories from './Chapter 2/RemoteRepositories';
import CollaborationWorkflows from './Chapter 2/CollaborationWorkflows';
import GitBestPractices from './Chapter 2/GitBestPractices';

// Chapter 3
import HTML5Essentials from './Chapter 3/HTML5Essentials';
import HTMLCompleteGuide from './Chapter 3/HTMLCompleteGuide';
import CSS3CompleteGuide from './Chapter 3/CSS3CompleteGuide';
import CSSLayout from './Chapter 3/CSSLayout';
import CSSAnimations from './Chapter 3/CSSAnimations';
import ResponsiveDesign from './Chapter 3/ResponsiveDesign';
import CSSPreprocessors from './Chapter 3/CSSPreprocessors';
import BrowserDeveloperTools from './Chapter 3/BrowserDeveloperTools';

// Chapter 4
import JavaScriptBasics from './Chapter 4/JavaScriptBasics';
import ControlStructures from './Chapter 4/ControlStructures';
import FunctionsScope from './Chapter 4/FunctionsScope';
import ArraysMethods from './Chapter 4/ArraysMethods';
import ObjectsMethods from './Chapter 4/ObjectsMethods';
import DOMManipulationEvents from './Chapter 4/DOMManipulationEvents';
import ES6Features from './Chapter 4/ES6Features';
import AsynchronousJavaScript from './Chapter 4/AsynchronousJavaScript';
import ErrorHandlingDebugging from './Chapter 4/ErrorHandlingDebugging';
import JsMiniProject from './Chapter 4/JsMiniProject';
import MiniProjectPreview from './Chapter 4/MiniProjectPreview';

// Chapter 5
import IntroductionToCSSFrameworks from './Chapter 5/IntroductionToCSSFrameworks';
import BootstrapFundamentals from './Chapter 5/BootstrapFundamentals';
import TailwindCSSSetup from './Chapter 5/TailwindCSSSetup';
import TailwindCSSUtilityClasses from './Chapter 5/TailwindCSSUtilityClasses';
import TailwindCSSResponsiveDesign from './Chapter 5/TailwindCSSResponsiveDesign';
import TailwindCSSComponents from './Chapter 5/TailwindCSSComponents';
import CSSFrameworkComparison from './Chapter 5/CSSFrameworkComparison';

// Chapter 6
import IntroductionToReact from './Chapter 6/IntroductionToReact';
import CreateReactApp from './Chapter 6/CreateReactApp';
import JSXSyntax from './Chapter 6/JSXSyntax';
import PropsCommunication from './Chapter 6/PropsCommunication';
import StateManagement from './Chapter 6/StateManagement';
import EventHandling from './Chapter 6/EventHandling';
import ConditionalRendering from './Chapter 6/ConditionalRendering';
import ReactHooks from './Chapter 6/ReactHooks';
import ReactRouter from './Chapter 6/ReactRouter';
import FormsValidation from './Chapter 6/FormsValidation';
import ComponentLifecycle from './Chapter 6/ComponentLifecycle';
import ReactMiniProjects from './Chapter 6/ReactMiniProjects';

// Chapter 7
import IntroductionToNode from './IntroductionToNode';
import NodeCoreModules from './NodeCoreModules';
import NpmPackageManagement from './NpmPackageManagement';
import CreatingNodeServer from './CreatingNodeServer';
import UnderstandingModules from './UnderstandingModules';
import AsynchronousProgrammingNode from './AsynchronousProgrammingNode';
import FileSystemOperations from './FileSystemOperations';
import EnvironmentVariables from './EnvironmentVariables';

// Chapter 8
import IntroductionToExpress from './IntroductionToExpress';
import ExpressSetup from './ExpressSetup';
import RoutingParameters from './RoutingParameters';
import MiddlewareConcepts from './MiddlewareConcepts';
import BuiltInMiddleware from './BuiltInMiddleware';
import CustomMiddleware from './CustomMiddleware';
import RequestResponseObjects from './RequestResponseObjects';
import ErrorHandlingMiddleware from './ErrorHandlingMiddleware';
import ExpressRouter from './ExpressRouter';
import TemplateEngines from './TemplateEngines';

// Chapter 9
import RESTPrinciples from './RESTPrinciples';
import HTTPMethods from './HTTPMethods';
import APIDesign from './APIDesign';
import CRUDOperations from './CRUDOperations';
import RequestValidation from './RequestValidation';
import APIDocumentation from './APIDocumentation';
import FileUploads from './FileUploads';
import APIVersioning from './APIVersioning';
import RESTAPIMiniProject from './RESTAPIMiniProject';

// Chapter 10
import DatabaseFundamentals from './DatabaseFundamentals';
import MongoDBIntroduction from './MongoDBIntroduction';
import MongoDBCompass from './MongoDBCompass';
import MongoDBCRUD from './MongoDBCRUD';
import MongoDBDataTypes from './MongoDBDataTypes';
import MongooseIntroduction from './MongooseIntroduction';
import MongooseSchemas from './MongooseSchemas';
import DataValidationMongoose from './DataValidationMongoose';
import DataRelationships from './DataRelationships';
import MongooseMiddleware from './MongooseMiddleware';
import IndexingQueryOptimization from './IndexingQueryOptimization';
import AggregationPipeline from './AggregationPipeline';
import DatabaseMiniProject from './DatabaseMiniProject';

export const developmentNotes = [
  { component: WhatIsWebDevelopment, meta: whatIsWebDevelopmentMeta },
  { component: ClientServerArchitecture, meta: clientServerArchitectureMeta },
  { component: FrontendVsBackend, meta: frontendVsBackendMeta },
  { component: IntroToMernStack, meta: introToMernStackMeta },
  { component: DevEnvSetup, meta: devEnvSetupMeta },
  { component: CodeEditors, meta: codeEditorsMeta },
  { component: TerminalBasics, meta: terminalBasicsMeta },

  // Chapter 2
  { component: IntroductionToVersionControl, meta: { id: "introduction-to-version-control" } },
  { component: GitInstallationConfiguration, meta: { id: "git-installation-configuration" } },
  { component: GitBasics, meta: { id: "git-basics" } },
  { component: WorkingWithBranchesMerging, meta: { id: "working-with-branches-merging" } },
  { component: GitHubIntroductionAccountSetup, meta: { id: "github-introduction-account-setup" } },
  { component: RemoteRepositories, meta: { id: "remote-repositories" } },
  { component: CollaborationWorkflows, meta: { id: "collaboration-workflows" } },
  { component: GitBestPractices, meta: { id: "git-best-practices" } },

  // Chapter 3
  { component: HTML5Essentials, meta: { id: "html5-essentials" } },
  { component: HTMLCompleteGuide, meta: { id: "html-complete-guide" } },
  { component: CSS3CompleteGuide, meta: { id: "css3-complete-guide" } },
  { component: CSSLayout, meta: { id: "css-layout" } },
  { component: CSSAnimations, meta: { id: "css-animations" } },
  { component: ResponsiveDesign, meta: { id: "responsive-design" } },
  { component: CSSPreprocessors, meta: { id: "css-preprocessors" } },
  { component: BrowserDeveloperTools, meta: { id: "browser-developer-tools" } },

  // Chapter 4
  { component: JavaScriptBasics, meta: { id: "javascript-basics" } },
  { component: ControlStructures, meta: { id: "control-structures" } },
  { component: FunctionsScope, meta: { id: "functions-scope" } },
  { component: ArraysMethods, meta: { id: "arrays-methods" } },
  { component: ObjectsMethods, meta: { id: "objects-methods" } },
  { component: DOMManipulationEvents, meta: { id: "dom-manipulation-events" } },
  { component: ES6Features, meta: { id: "es6-features" } },
  { component: AsynchronousJavaScript, meta: { id: "asynchronous-javascript" } },
  { component: ErrorHandlingDebugging, meta: { id: "error-handling-debugging" } },
  { component: JsMiniProject, meta: { id: "js-miniproject" } },
  { component: MiniProjectPreview, meta: { id: "mini-project-preview" } },

  // Chapter 5
  { component: IntroductionToCSSFrameworks, meta: { id: "introduction-to-css-frameworks" } },
  { component: BootstrapFundamentals, meta: { id: "bootstrap-fundamentals" } },
  { component: TailwindCSSSetup, meta: { id: "tailwind-css-setup" } },
  { component: TailwindCSSUtilityClasses, meta: { id: "tailwind-css-utility-classes" } },
  { component: TailwindCSSResponsiveDesign, meta: { id: "tailwind-css-responsive-design" } },
  { component: TailwindCSSComponents, meta: { id: "tailwind-css-components" } },
  { component: CSSFrameworkComparison, meta: { id: "css-framework-comparison" } },

  // Chapter 6
  { component: IntroductionToReact, meta: { id: "introduction-to-react" } },
  { component: CreateReactApp, meta: { id: "create-react-app" } },
  { component: JSXSyntax, meta: { id: "jsx-syntax" } },
  { component: PropsCommunication, meta: { id: "props-communication" } },
  { component: StateManagement, meta: { id: "state-management" } },
  { component: EventHandling, meta: { id: "event-handling" } },
  { component: ConditionalRendering, meta: { id: "conditional-rendering" } },
  { component: ReactHooks, meta: { id: "react-hooks" } },
  { component: ReactRouter, meta: { id: "react-router" } },
  { component: FormsValidation, meta: { id: "forms-validation" } },
  { component: ComponentLifecycle, meta: { id: "component-lifecycle" } },
  { component: ReactMiniProjects, meta: { id: "react-mini-projects" } },

  // Chapter 7
  { component: IntroductionToNode, meta: { id: "introduction-to-node" } },
  { component: NodeCoreModules, meta: { id: "node-core-modules" } },
  { component: NpmPackageManagement, meta: { id: "npm-package-management" } },
  { component: CreatingNodeServer, meta: { id: "creating-node-server" } },
  { component: UnderstandingModules, meta: { id: "understanding-modules" } },
  { component: AsynchronousProgrammingNode, meta: { id: "asynchronous-programming-node" } },
  { component: FileSystemOperations, meta: { id: "file-system-operations" } },
  { component: EnvironmentVariables, meta: { id: "environment-variables" } },

  // Chapter 8
  { component: IntroductionToExpress, meta: { id: "introduction-to-express" } },
  { component: ExpressSetup, meta: { id: "express-setup" } },
  { component: RoutingParameters, meta: { id: "routing-parameters" } },
  { component: MiddlewareConcepts, meta: { id: "middleware-concepts" } },
  { component: BuiltInMiddleware, meta: { id: "built-in-middleware" } },
  { component: CustomMiddleware, meta: { id: "custom-middleware" } },
  { component: RequestResponseObjects, meta: { id: "request-response-objects" } },
  { component: ErrorHandlingMiddleware, meta: { id: "error-handling-middleware" } },
  { component: ExpressRouter, meta: { id: "express-router" } },
  { component: TemplateEngines, meta: { id: "template-engines" } },

  // Chapter 9
  { component: RESTPrinciples, meta: { id: "rest-principles" } },
  { component: HTTPMethods, meta: { id: "http-methods" } },
  { component: APIDesign, meta: { id: "api-design" } },
  { component: CRUDOperations, meta: { id: "crud-operations" } },
  { component: RequestValidation, meta: { id: "request-validation" } },
  { component: APIDocumentation, meta: { id: "api-documentation" } },
  { component: FileUploads, meta: { id: "file-uploads" } },
  { component: APIVersioning, meta: { id: "api-versioning" } },
  { component: RESTAPIMiniProject, meta: { id: "rest-api-mini-project" } },

  // Chapter 10
  { component: DatabaseFundamentals, meta: { id: "database-fundamentals" } },
  { component: MongoDBIntroduction, meta: { id: "mongodb-introduction" } },
  { component: MongoDBCompass, meta: { id: "mongodb-compass" } },
  { component: MongoDBCRUD, meta: { id: "mongodb-crud" } },
  { component: MongoDBDataTypes, meta: { id: "mongodb-data-types" } },
  { component: MongooseIntroduction, meta: { id: "mongoose-introduction" } },
  { component: MongooseSchemas, meta: { id: "mongoose-schemas" } },
  { component: DataValidationMongoose, meta: { id: "data-validation-mongoose" } },
  { component: DataRelationships, meta: { id: "data-relationships" } },
  { component: MongooseMiddleware, meta: { id: "mongoose-middleware" } },
  { component: IndexingQueryOptimization, meta: { id: "indexing-query-optimization" } },
  { component: AggregationPipeline, meta: { id: "aggregation-pipeline" } },
  { component: DatabaseMiniProject, meta: { id: "database-mini-project" } },
];
