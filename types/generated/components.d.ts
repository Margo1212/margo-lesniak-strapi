import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentQuestion extends Schema.Component {
  collectionName: 'components_component_questions';
  info: {
    displayName: 'question';
  };
  attributes: {
    question: Attribute.Text;
    answer: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.question': ComponentQuestion;
    }
  }
}
