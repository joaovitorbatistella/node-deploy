import { container } from 'tsyringe';

import IMailTemplatePrivider from './models/IMailTemplateProvider';

import HandlebarsMailTemplateProvider from './implementations/HandlebarsMailTemplateProvider';

const providers = {
  handlebars: HandlebarsMailTemplateProvider,
};

container.registerSingleton<IMailTemplatePrivider>(
  'MailTemplateProvider',
  providers.handlebars,
);
