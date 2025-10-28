import { WhatIsWebDevelopment, whatIsWebDevelopmentMeta } from './WhatIsWebDevelopment';
import { ClientServerArchitecture, clientServerArchitectureMeta } from './ClientServerArchitecture';
import { FrontendVsBackend, frontendVsBackendMeta } from './FrontendVsBackend';
import { IntroToMernStack, introToMernStackMeta } from './IntroToMernStack';
import { DevEnvSetup, devEnvSetupMeta } from './DevEnvSetup';
import { CodeEditors, codeEditorsMeta } from './CodeEditors';
import { TerminalBasics, terminalBasicsMeta } from './TerminalBasics';

// Chapter 2
import IntroductionToVersionControl from './IntroductionToVersionControl';
import GitInstallationConfiguration from './GitInstallationConfiguration';
import GitBasics from './GitBasics';
import WorkingWithBranchesMerging from './WorkingWithBranchesMerging';
import GitHubIntroductionAccountSetup from './GitHubIntroductionAccountSetup';
import RemoteRepositories from './RemoteRepositories';
import CollaborationWorkflows from './CollaborationWorkflows';
import GitBestPractices from './GitBestPractices';

// Chapter 3
import HTML5Essentials from './HTML5Essentials';
import HTMLCompleteGuide from './HTMLCompleteGuide';
import CSS3CompleteGuide from './CSS3CompleteGuide';
import CSSLayout from './CSSLayout';
import CSSAnimations from './CSSAnimations';
import ResponsiveDesign from './ResponsiveDesign';
import CSSPreprocessors from './CSSPreprocessors';
import BrowserDeveloperTools from './BrowserDeveloperTools';

// Chapter 4
import JavaScriptBasics from './JavaScriptBasics';
import ControlStructures from './ControlStructures';
import FunctionsScope from './FunctionsScope';
import ArraysMethods from './ArraysMethods';
import ObjectsMethods from './ObjectsMethods';
import DOMManipulationEvents from './DOMManipulationEvents';
import ES6Features from './ES6Features';
import AsynchronousJavaScript from './AsynchronousJavaScript';
import ErrorHandlingDebugging from './ErrorHandlingDebugging';
import JsMiniProject from './JsMiniProject';
import MiniProjectPreview from './MiniProjectPreview';

// Chapter 5
import IntroductionToCSSFrameworks from './IntroductionToCSSFrameworks';
import BootstrapFundamentals from './BootstrapFundamentals';
import TailwindCSSSetup from './TailwindCSSSetup';
import TailwindCSSUtilityClasses from './TailwindCSSUtilityClasses';
import TailwindCSSResponsiveDesign from './TailwindCSSResponsiveDesign';
import TailwindCSSComponents from './TailwindCSSComponents';
import CSSFrameworkComparison from './CSSFrameworkComparison';

// Chapter 6
import IntroductionToReact from './IntroductionToReact';
import CreateReactApp from './CreateReactApp';
import JSXSyntax from './JSXSyntax';
import PropsCommunication from './PropsCommunication';
import StateManagement from './StateManagement';
import EventHandling from './EventHandling';
import ConditionalRendering from './ConditionalRendering';
import ReactHooks from './ReactHooks';
import ReactRouter from './ReactRouter';
import FormsValidation from './FormsValidation';
import ComponentLifecycle from './ComponentLifecycle';
import ReactMiniProjects from './ReactMiniProjects';

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
