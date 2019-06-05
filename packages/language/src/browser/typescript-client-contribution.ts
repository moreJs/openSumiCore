import { LanguageClientContribution } from './language-client-contribution';
import { Injectable } from '@ali/common-di';
import { TYPESCRIPT_LANGUAGE_ID, TYPESCRIPT_LANGUAGE_NAME } from '../common';

@Injectable()
export class TypescriptClientContribution extends LanguageClientContribution {
  id = TYPESCRIPT_LANGUAGE_ID;
  name = TYPESCRIPT_LANGUAGE_NAME;
  clientOptions = {
    documentSelector: ['json', 'javascript', 'javascriptreact', 'typescriptreact', 'typescript'],
  };
}
