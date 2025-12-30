// import { createBackendModule } from '@backstage/backend-plugin-api';
// import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node/alpha';
// import {
//     createAwsS3CpAction,
//     createEcrAction,
//     createAwsSecretsManagerCreateAction
// } from '@roadiehq/scaffolder-backend-module-aws';

// export const scaffolderAwsModule = createBackendModule({
//     pluginId: 'scaffolder',
//     moduleId: 'roadie-aws',
//     register(env) {
//         env.registerInit({
//             deps: {
//                 scaffolder: scaffolderActionsExtensionPoint,
//             },
//             async init({ scaffolder }) {
//                 // We initialize them into a list first
//                 const actions = [
//                     createAwsS3CpAction(),
//                     createEcrAction(),
//                     createAwsSecretsManagerCreateAction(),
//                 ];

//                 // Only add actions that are correctly defined
//                 actions.forEach(action => {
//                     if (action) {
//                         scaffolder.addActions(action);
//                     }
//                 });
//             },
//         });
//     },
// });